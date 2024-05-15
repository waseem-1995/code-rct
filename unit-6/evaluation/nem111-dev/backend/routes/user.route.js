const express = require("express");
const {UserModel} = require("../models/user.model")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userRouter = express.Router();

userRouter.post("/users/register", async(req,res)=>{
const {name,email,gender,password,age,city,is_married} = req.body;
try{
const user = await UserModel.findOne({"email":email});
if(user){
res.send({"msg": "User already exist, please login"})
}else{
bcrypt.hash(password,5,async(err, hash_pass) =>{
    if(err){
        console.log(err)
    }else{
        const newUser = new UserModel({name,email,gender,password:hash_pass,age,city,is_married});
        await newUser.save();
        res.status(200).send({"msg": "User has been registered successfully"})
    }
})
}
}catch(err){
res.status(400).send({"err": "something went wrong"});
console.log(err.message)
}
});

userRouter.post("/users/login", async(req,res)=>{
const {email,password} = req.body;
try{
const user = await  UserModel.find({email});
const hash_pass = user[0].password;
if(user.length>0){
    bcrypt.compare(password, hash_pass, (err,result) =>{
        if(result){
            const token = jwt.sign({userID:user[0]._id}, "masai");
            res.status(200).send({"msg": "Login successfull","token":token})
        }else{
            res.status(400).send({"msg": "Wrong credentials"});
        }
    })
}else {
    res.status(400).send({"msg": "wrong credentials"})
}
}catch(err){
    console.log(err.message)
    res.status(400).send({"err": "something went wrong"})
}
});

module.exports = {
    userRouter
}