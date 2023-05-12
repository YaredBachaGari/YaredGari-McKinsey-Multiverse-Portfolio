require('dotenv').config()
const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next)=>{
   const  authHeader  = req.headers['Authorization'] || req.headers['authorization'];
    if(!authHeader?.startsWith('Bearer ')) return res.status(401); // unauthorized 
    const token = authHeader.split(' ')[1];
    jwt.verify( token,
                process.env.ACCESS_TOKEN_SECRET,
                (err, decoded)=>{
                    if(err) return res.sendStatus(403) //forbidden or invalid token
                    req.username = decoded.userInfo.username   // here we are decoding the encoded access token read from request header 
                    req.roles = decoded.userInfo.roles
                    next()
                }  
    )
}

module.exports = verifyJWT