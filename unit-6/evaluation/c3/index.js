const express = require("express");
const { Connection } = require("./config/db");
require("dotenv").config();
const {postRouter} = require("./routes/postRouter")
const {getRouter} = require("./routes/getRouter");
const {modifyRouter} = require("./routes/modifyRouter")

const app = express();
app.use(express.json());

app.get("/", (req,res) => {
    res.send("HOME PAGE")
});

app.use("/", getRouter);
app.use("/", postRouter);
app.use("/",modifyRouter);

app.listen(process.env.port, async()=>{
    try{
        await Connection;
        console.log('connected to database')
    }catch(err){
        console.log("error while connection to database")
        console.log(err)
    }
    console.log(`listening to port ${process.env.port}`)
})