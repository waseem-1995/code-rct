const express=require("express")
const { connection } = require("./db")
const { userRoutes } = require("./routes/user.routes")
const jwt = require('jsonwebtoken')
const { auth } = require("./middleware/auth.middleware")
const { noteRouter } = require("./routes/notes.routes")
var cors = require('cors')
const app=express()
app.use(cors()) 
app.use(express.json())

app.use("/users",userRoutes)

//privateroute
app.use(auth) 
app.use("/notes",noteRouter)

  




app.listen(4500,async()=>{
    console.log("port is running")

    try {
        await connection
        console.log("connected to db")
    } catch (error) {
        console.log("something went wrong")
    }

})