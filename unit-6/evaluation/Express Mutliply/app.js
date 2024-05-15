// your code goes here
const express=require("express");
const app=express()
app.get("/multiply",(req,res)=>{
    const a=parseFloat(req.query.a);
    const b=parseFloat(req.query.b);

    if(!isNaN(a) && !isNaN(b)){
        res.status(200).json({product:a*b})
    }
    else if(!isNaN(a) && !isNaN(b)){
        res.status(400).json({"error": "\"a\" and \"b\" are required parameters" })
    } else if(!isNaN(a)){
        res.status(400).json({"error": "\"a\" is not a valid number"})
    }  else if(!isNaN(b)){
        res.status(400).json({"error": "\"b\" is not a valid number" })
    }
})

module.exports = app;

///done
//new