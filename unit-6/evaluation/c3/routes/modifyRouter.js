const express = require("express");
const {FootballModel} = require("../models/models")
const {record} = require("../middlewares/record.middleware")
const modifyRouter = express.Router();
modifyRouter.use(record)

modifyRouter.patch("/football/update/:id", async(req,res) => {
    const id=req.params.id;
    try{
        await FootballModel.findByIdAndUpdate({"_id":id},req.body);
        res.status(200).send({'msg': `Player with the id ${id} has been updated`}) 
    }catch(err){
        console.log(err)
        res.status(400).send({"msg": "something went wrong"})
    }
});


modifyRouter.delete("/football/delete/:id", async(req,res) =>{
    const id=req.params.id;
 try{
 await FootballModel.findByIdAndDelete({"_id":id});
 res.status(200).send({'msg': `Player with the id ${id} has been deleted`})
 }catch(err){
    console.log(err)
    res.status(400).send({"msg": "something went wrong"})
 }
});

module.exports = {
    modifyRouter
}