import jwt from "jsonwebtoken";


export const generateToken = (user) => {
    return jwt.sign({
        username : user.username,
        email : user.email
    },process.env.JWT_SEC,{
        expiresIn : "30d"
    });
}



export const auth = (req,res,next) => {
    try{
        const result = jwt.verify(req.body.token,process.env.JWT_SEC);
        res.user = result;
    }catch(err){
        res.send(err);
    }


    next();
}