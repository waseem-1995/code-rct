const express=require("express")
const {connection}=require("./db")
const {userRouter}=require("./routes/user.routes")
const jwt = require('jsonwebtoken');
const {authenticate}=require("./middleware/auth.middleware")

const app=express()
app.use(express.json())
app.use("/user",userRouter)

app.use(authenticate)
app.get("/cart",(req,res)=>{
    res.status(200).send("send data")
})


app.listen(8000,async ()=>{
try{
await connection
}catch(err){
console.log(err)
}
console.log("Running at 8000 Port")
})