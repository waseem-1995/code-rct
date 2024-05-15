
const express=require("express")
const { postModal } = require("../model/model.post")

const postRouter=express.Router()



postRouter.post("/create",async(req,res)=>{
    try {
        const post=new postModal(req.body)
        await post.save()
        res.status(200).send({"msg":"new post have been created"})
    } catch (error) {
        res.status(400).send({"msg":error.message})
        
    }
    
})


postRouter.get("/",async(req,res)=>{
    // const query=req.query
    try {
        const post=await postModal.find({deviceID:req.body.deviceID})
        res.status(200).send(post)
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }

})

postRouter.patch("/update/:id",async(req,res)=>{
    const {id}=req.params
    const post=await postModal.findOne({_id:id})
    try {
        if(req.body.deviceID!=post.deviceID){
            res.status(200).send({"Msg":"you are not auhorized to do this action"})
        }else{
            await postModal.findByIdAndUpdate({_id:id},req.body)
            res.status(200).send(`posts has been updated  of id ${id}`)
        }
        
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})

postRouter.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
    const post=await postModal.findOne({_id:id})
    try {
        if(req.body.deviceID!=post.deviceID){
            res.status(200).send({"Msg":"you are not auhorized to do this action"})
        }else{
            await postModal.findByIdAndDelete({_id:id})
            res.status(200).send(`post has beendeleted of id ${id}`)
        }
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})
module.exports={
    postRouter
}

