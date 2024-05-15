const express = require("express");
const { connection } = require("./config/db");
const {postRouter} = require("./routes/post.route");
const {userRouter} = require("./routes/user.route");
const {authenticate} = require("./middlewares/authenticate")
const app=express();
app.use(express.json());
require("dotenv").config();
const cors = require('cors')

app.use(cors());

app.get("/", (req,res) =>{
    res.send("HOME PAGE")
});

app.use("/", userRouter);
app.use(authenticate)
app.use("/", postRouter);

app.listen(process.env.port, async()=>{
    try{
       await connection;
        console.log("connected to database")
    }catch(err){
     console.log("could not connect to database")
     console.log(err.message)
    }
    console.log(`server running on ${process.env.port}`)
})