const express = require("express");
const {PostModel} = require("../models/post.model")
const {UserModel} = require("../models/user.model")
const postRouter = express.Router();

postRouter.get("/posts", async(req,res)=>{
try{
const posts = await PostModel.find();
res.status(200).send(posts)
}catch(err){
    console.log(err.message)
    res.status(400).send({"err": "something went wrong"})
}
});

postRouter.post("/posts/add", async(req,res)=>{
const payload = req.body;
try{
const newPost = new PostModel(payload);
await newPost.save();
res.status(200).send({"msg": "Post has been added successfully"})
}catch(err){
    console.log(err.message)
    res.status(400).send({"err": "something went wrong"})
}
});

postRouter.get("/posts/top", (req,res)=>{

});

postRouter.patch("/posts/update/:id", async(req,res)=>{
    try{
        const payload = req.body;
        const id= req.params.id;
        const post = await PostModel.findByIdAndUpdate(id, payload);
        res.status(200).send({"msg": "Post has been updated"})
    }catch(err){
        console.log(err.message)
        res.status(400).send({"err": "something went wrong"})
    }

});

postRouter.delete("/posts/delete/:id", async(req,res)=>{
try{
const id = req.params.id;
const post = await PostModel.findByIdAndDelete(id);
res.status(200).send({"msg": "post has been deleted"})
}catch(err){
    console.log(err.message)
        res.status(400).send({"err": "something went wrong"})
}
});

module.exports = {
    postRouter
}