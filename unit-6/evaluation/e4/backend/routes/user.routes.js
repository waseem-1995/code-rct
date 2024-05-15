const express=require("express")
const { userModal } = require("../model/model.user")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const app=express()

const userRoutes=express.Router()


userRoutes.post("/register",async(req,res)=>{
       const{email,password,name,gender}=req.body
    try {
        bcrypt.hash(password, 5,async (err, hash) =>{
        const user=new userModal({email,gender,name,password:hash})
        await user.save()
        res.status(200).send({"msg":"New user has been registred"})
        })
    
    } catch (error) {
        res.status(400).send({"msg":error.message})
        
    }
})

userRoutes.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try {
        const user=await userModal.findOne({email})
        if(user){
            bcrypt.compare(password, user.password, (err, result)=> {
              if(result){
               const token = jwt.sign({ deviceID:user._id,device:user.name }, 'masai')
                res.status(200).send({"msg":"login successfull","token":token})
              }else{
                res.status(200).send({"msg":"wrong credentials"})
              }
            }) 
        }else{
            res.status(200).send({"msg":"wrong credentials"})
        }
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})

module.exports={
    userRoutes
}
