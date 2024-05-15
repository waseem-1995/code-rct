const express=require("express")
const {NoteModel}=require("../model/notes.model")
const notesRouter=express.Router()



//for all the following things authentication is required.
notesRouter.get("/", async(req,res)=>{
    try {
        const new_note= await NoteModel.find()
        res.status(200).send(new_note)
    } catch (error) {
        res.status(400).send({"err":err.message})
    }
})

notesRouter.post("/create", async (req,res)=>{
    try {
        const new_note=new NoteModel(req.body)
        await new_note.save()
        res.send({"msg":"Note Created"})
    } catch (error) {
        res.status(400).send({"err":err.message})
    }
   
})


notesRouter.patch("/update/:noteID", (req,res)=>{
//logic to update the notes
})
notesRouter.delete("/delete/:noteID", (req,res)=>{
//logic to delete the notes
})
module.exports={
notesRouter
}
