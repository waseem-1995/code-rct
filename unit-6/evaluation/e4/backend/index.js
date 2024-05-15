const express=require("express")
const { connection } = require("./db")
const { userRoutes } = require("./routes/user.routes")
const { auth } = require("./middleware/auth.middleware")
const { postRouter } = require("./routes/post.routes")
var cors = require('cors')
const app=express()
app.use(cors()) 
require("dotenv").config();
app.use(express.json())

app.use("/users",userRoutes)

//privateroute
app.use(auth) 
app.use("/posts",postRouter)

app.listen(process.env.port,async()=>{
    console.log("port is running")

    try {
        await connection
        console.log("connected to db")
    } catch (error) {
        console.log("something went wrong")
    }

})