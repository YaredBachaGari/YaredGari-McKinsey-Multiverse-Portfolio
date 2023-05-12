require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const db = require("./models"); // There is an entry file called index.js inside models folders to connect models and database
const corsOptions = require("./config/corsOptions");
const credentials = require("./middlewares/credentials");
const verifyJWT = require("./middlewares/VerifyJWT");

app.use(credentials); // this should be always be called before app.use(CORS)
app.use(cors(corsOptions)); //A third party middleware for cross origin resource sharing. if we invoked it with no argument it accepts all request from any site which we need to restric most of the time.
app.use(bodyParser.json());
app.use(express.json()); //built in middleware to extract json data
app.use(express.urlencoded({ extended: true })); //built in middleware to extract form data
app.use(cookieParser()); //built in middleware to extract data from cookies
//import all routes
const RegRoute = require("./routes/Registration");
const LoginRoute = require("./routes/LoginAuthorization");
const RefreshTokenRoute = require("./routes/RefreshToken");
const UsersRoute = require("./routes/Users");
const LogoutRoute = require("./routes/logout");
const PostRoute = require("./routes/Posts");
const CommentRoute = require("./routes/Comments");
const FriendsRoute = require("./routes/Friends");
const LikeRoute = require("./routes/Likes");

//use all middlewares
app.use("/signup", RegRoute);
app.use("/login", LoginRoute);
app.use("/refresh", RefreshTokenRoute);
app.use("/logout", LogoutRoute);
app.use(verifyJWT); // middlewares below this middleware will not be accessed unless user has valid and unexpired access token. every time user send a request they have to have unexpired accesToken that this middleware grabs from the request header (Bearer 'accessToken'). If it is expired refresh token should be sent along with the request to renew the access Token
app.use("/users", UsersRoute);
app.use("/posts", PostRoute);
app.use("/comments", CommentRoute);
app.use("/friends", FriendsRoute);
app.use("/likes", LikeRoute);

//Error handling middleware
app.use((error, req, res, next) => {
  if (res.statusCode < 400) res.status(500);
  res.send({
    error: error.message,
    name: error.name,
    message: error.message,
    table: error.table,
  });
});

db.sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}...`);
  });
});
