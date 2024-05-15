const mongoose=require("mongoose")
const noteSchema=mongoose.Schema({
    titile: String,
    note: String,
    category: String,
    author: String
})


const NoteModel=mongoose.model("note",noteSchema)


module.exports={
NoteModel
}