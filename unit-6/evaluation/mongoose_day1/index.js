const mongoose=require("mongoose");
const main=async()=>{
    
    try {
        const connection=await mongoose.connect("mongodb://127.0.0.1:27017/learningmonoose");
        await UserModel.insertMany([{name:"waseem",age:28,city:"allahabad"}])
        console.log("connected to db")
        connection.disconnect()
    } catch (error) {
        console.log("error");
        console.log(error);
    }
}
main()

const userSchema=mongoose.Schema({
    name:String,
    age:Number,
    city:String
})

const UserModel=mongoose.model("user",userSchema)