const mongoose=require("mongoose");

const villainSchema=mongoose.Schema({
    name:String,
    power:Number,
})

const VillainModel=mongoose.model("villain",villainSchema)

module.exports={VillainModel}