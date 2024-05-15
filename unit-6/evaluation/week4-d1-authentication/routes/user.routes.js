const express=require("express")
const jwt = require('jsonwebtoken');
   
const { UserModel}=require("../model/User.model")
const userRouter=express.Router()


userRouter.post("/register",async (req,res)=>{
    try{
     const user= new UserModel(req.body)
     await user.save()
        res.status(200).send({"msg":" new Registered has been added"})
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
     res.send("Registered")
})

userRouter.post("/login",async (req,res)=>{
      const {email,pass}=req.body
    try{
      const user=await UserModel.find({email,pass})
     if(user.length>0){
        const token=jwt.sign({"course":"backend"},"masai")
     res.status(200).send({"msg":" Login Successful","token":token})
    } else {
        res.status(200).send({"msg":" wrong credential"})
    }
    } catch(err){
        res.status(400).send({"msg":err.message})
    }
})

module.exports={
    userRouter
}    