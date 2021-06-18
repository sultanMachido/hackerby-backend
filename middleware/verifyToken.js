const jwt = require('jsonwebtoken');


module.exports =(req,res,next) =>{

    let token = req.header('auth-token');

    if (!token) {
        res.json({
            status:401,
            message:'Access Denied'
        })
    }

    const verified = jwt.verify(token,process.env.SECRET_TOKEN)
    req.user= verified;

    next()

    if (!verified) {
        res.json({
            status:401,
            message:'Invalid Token'
        })
    }

}