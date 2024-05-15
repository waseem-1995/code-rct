const mongoose=require("mongoose");

const heroSchema=mongoose.Schema({
    name:String,
    city:String,
    power:Number,
    villain:String,
    language:String,
    is_active:Boolean
})

const HeroModel=mongoose.model("hero",heroSchema)

module.exports={HeroModel}

// {
//     "name":"waseem",
//     "city":"ald",
//    "power":4,
//     "villain":"khan",
//     "language":"english",
//     "is_active":false
// }