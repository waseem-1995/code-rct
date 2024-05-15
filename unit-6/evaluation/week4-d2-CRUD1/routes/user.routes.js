const express=require("express")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
   
const { UserModel}=require("../model/User.model")
const userRouter=express.Router()


userRouter.post("/register",async (req,res)=>{
    const {name,email,pass,age}=req.body
    try{
            bcrypt.hash(pass, 8, async (err, hash)=>{
                const user=new UserModel({name,email,pass:hash,age})
                await user.save()
                res.status(200).send({"msg":" new Registered has been added"})
            });
     const user= new UserModel()
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
            bcrypt.compare(pass, user[0].pass,(err, result) =>{
                if(result){
                    const token = jwt.sign({ course: 'backend' }, 'masai');
                    res.send({"msg":"Login Successfull","token":token})
                } else {
                    res.status(200).send({"msg":" wrong credential"})
                }
            });
        
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