const whiteListedDomain = require('./allowedOrigins')
    
const corsOptions = {
    origin:(origin, callback)=>{
        if(whiteListedDomain.indexOf(origin) !== -1 || !origin){  // during development since we dont have domain this throws an error so after -1 add || !origin. but later remove it when the goes to prod
            callback(null, true) //if the index origin from where the request is coming from is d/t from the list in the whitelist array let it pass
        }else{
            callback(new Error('Not allowed by CORS'))   //a built in express error handler
        }
    },
    credentials:true,
    optionsSuccessStatus: 200
}


module.exports = corsOptions