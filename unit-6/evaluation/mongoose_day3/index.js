const express=require("express");
const {connection}=require("./db");

const heroRouter=require("./routes/Hero.route");
const villainRoute=require("./routes/Villain.routes")


require('dotenv').config()

const app=express()
app.use(express.json())
app.use("/heroes",heroRouter)
app.use("/villains",villainRoute)

app.get("/",(req,res)=>{
    res.send("welcome home")
})



app.listen(process.env.port,async()=>{
    
    try {
        await connection
        console.log("connected to db");
    } catch (error) {
        console.log("error");
        console.log(error);
    }
    console.log("server running at 4300");
})