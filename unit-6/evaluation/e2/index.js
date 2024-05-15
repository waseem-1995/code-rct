const express=require("express");
const fs=require("fs");
const marvelroute=require("./routes/marvel.route");
const dcroute=require("./routes/dc.route");
const logger=require("./middleware/logger.middleware")
const app=express()

app.use(express.json())

app.use(logger)

app.get("/",(req,res)=>{
    res.setHeaders("Content-type","text/html");
    res.send("<h1>Welcome new Team Member, You are about to be the part of best Superhero Team Out there!!!</h1>")
})
app.use("/marvel",marvelroute);
app.use("/dc",dcroute)
// //Do not forget to export the server.
module.exports = app;
