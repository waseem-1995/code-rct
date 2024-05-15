const express = require("express");
const { FootballModel} = require("../models/models")
const postRouter = express.Router();

postRouter.post("/football/add", async(req,res) => {
    let body = req.body;
    try{
      let football = new FootballModel(body)
      await football.save()
      res.status(200).send({"msg": "Player has been added"})
    }catch(err){
      console.log(err)
      res.status(400).send({"err":"something went wrong while posting the data"})
    }
})

module.exports = {
    postRouter
}