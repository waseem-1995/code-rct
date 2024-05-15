const express=require("express")
const {connection}=require("./db")
const {userRouter}=require("./routes/user.routes")
const jwt = require('jsonwebtoken');

const app=express()
app.use(express.json())
app.use("/user",userRouter)

app.get("/cart",(req,res)=>{
    const {token}=req.query
    jwt.verify(token,"masai", (err,decoded )=>{
        if(err){
        res.send("Invalid Token")
        console.log(err)
        } else {
        res.send("Whatever you want can be sent over here")
        }
    })
})


app.listen(8080,async ()=>{
try{
await connection
}catch(err){
console.log(err)
}
console.log("Running at 8080 Port")
})