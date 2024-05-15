const express = require("express");
const { FootballModel} = require("../models/models")
const getRouter = express.Router();

getRouter.get("/football", async(req,res) =>{
    const {goals,age,nationality}=req.query
    try {
        const {goals,age,nationality}=req.query
        const query={}
        if(goals)
        query.goals=goals
        if(age)
        query.age=age
        if(nationality){
            query.nationality=nationality
        }

        const data=await Footbal.find(query);
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error)
    }
    
});

getRouter.get("/football/:id", async(req,res) =>{
    const id = req.params.id;
    try{
        let football = await FootballModel.find({"_id":id});
        res.status(200).send(football)
    }catch(err){
        console.log(err);
        res.status(400).send({"err": "something went wrong while fetching data"})
    }
})

module.exports = {
    getRouter
}