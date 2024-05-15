const express=require("express")
const {connection}=require("./db")
const {userRouter}=require("./routes/user.routes")
const jwt = require('jsonwebtoken');
const {authenticate}=require("./middleware/auth.middleware")
const {notesRouter}=require("./routes/note.routes")

const app=express()
app.use(express.json())
app.use("/user",userRouter)

app.use(authenticate)
app.use("/note",notesRouter)
app.get("/cart",(req,res)=>{
    res.status(200).send("send data")
})


app.listen(8080,async ()=>{
    try{
        await connection
        console.log("connected to db")
    }catch(err){
        console.log(err)
    }
    console.log("Running at 8080 Port")
})