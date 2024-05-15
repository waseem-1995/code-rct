const express=require("express");
const {connection, HeroModel}=require("./db")
const app=express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("welcome home")
})

app.get("/heroes",async(req,res)=>{
//    const language=req.query.language;
//     const power=req.query.power;
//     const heroes=await HeroModel.find({language:language,power:power})
//     res.send(heroes)
    let query=req.query;
    try {
        const heroes=await HeroModel.find(query)
        res.send(heroes)
    } catch (error) {
        console.log(error);
        res.send("something went wrong")
    }
})

app.patch("/edithero/:id",async(req,res)=>{
        const ID=req.params.id
        const payload=req.body
       
        try {
            await HeroModel.findByIdAndUpdate({_id:ID},payload)
            res.send("superheroes updated")
        } catch (error) {
            console.log(error);
            res.send("something went wrong")
        }
})

app.delete("/deletehero/:id",async(req,res)=>{
    const ID=req.params.id
   
    try {
        await HeroModel.findByIdAndDelete({_id:ID})
        res.send("superheroes updated")
    } catch (error) {
        console.log(error);
        res.send("something went wrong")
    }
})

app.post("/addheroe",async(req,res)=>{
    const data=req.body;
    const hero=new HeroModel(data)
    await hero.save()
    console.log(hero);
    res.send("data of superheroes added")
})


app.listen(4500,async()=>{
    
    try {
        await connection
        console.log("connected to db");
    } catch (error) {
        console.log("error");
        console.log(error);
    }
    console.log("server running at 4500");
})