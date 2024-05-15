const jwt=require("jsonwebtoken");


const authenticate = (req,res,next)=>{
    const token=req.headers.authorization
    if(token){
        const decoded=jwt.verify(token.split(" ")[1],"masai")
        if(decoded){
        next()
        } else {
        res.send("Please Login")
        }
    } else {
       res.send({"msg":"Please Login"})
    }
}

module.exports={
authenticate
}