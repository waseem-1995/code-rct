const express=require("express");
const {VillainModel}=require("../models/villain.model")
const villainRouter=express.Router();

villainRouter.post("/add",async(req,res)=>{
    const data=req.body;
    const villain=new VillainModel(data)
    await villain.save()
    console.log(hero);
    res.send("data of villains added")
})

module.exports=
    villainRouter