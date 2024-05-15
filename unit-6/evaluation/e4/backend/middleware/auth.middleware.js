
const  jwt= require("jsonwebtoken");

const auth=(req,res,next)=>{
    const token=req.headers.authorization
    if(token){
        try {
        const decoded=jwt.verify(token.split(" ")[1],"masai")
        if(decoded){
            req.body.deviceID=decoded.deviceID
            req.body.device=decoded.device
            next()
        }else{
            res.send({"msg":"please Login"})
        }
        } catch (error) {
            res.send({"msg":error.message})
        }
    }else{
         res.send({"msg":"please Login"}) 
    }
}

module.exports={
    auth
}