const express=require("express")
const fs=require("fs")
const { validator } = require("../middleware/validator.middleware")
const router=express.Router()

router.post("/addnew",(req,res)=>{
    let data=JSON.parse(fs.readFileSync("./db.json"))
    data.marvel.push(req.body)
    fs.writeFileSync("./db.json",JSON.stringify(data))
    res.send("New superhero has been added")
})

router.get("/",(req,res)=>{
   

        let data=JSON.parse(fs.readFileSync("./db.json"))
        if(req.query.alias){
            const newdata=data.marvel.filter((ele)=>ele.alias.toLowerCase().includes(req.query.alias.toLowerCase()))
            res.send(newdata)
        }else{
            res.send(data)
        }
    
})

router.get("/:id",(req,res)=>{
    let{id}=req.params
    let data=JSON.parse(fs.readFileSync("./db.json"))
    for(let i=0;i<data.marvel.length;i++){
  if(data.marvel[i].id==id){
    res.send(data.marvel[i])
  }
    }

})

router.patch("/update/:id",validator,(req,res)=>{
    let{id}=req.params
    let data=JSON.parse(fs.readFileSync("./db.json","utf-8"))


    let freshdata=data.marvel.map((ele)=>{
        if(ele.id==id){
            ele.name=req.body.name
            ele.alias=req.body.alias
            ele.power_level=req.body.power_level
            ele.role=req.body.role
            return ele
        }else{
            return ele
        }
       
    })
    data.marvel=freshdata
    fs.writeFileSync("./db.json",JSON.stringify(data))
    res.send("Patched Character Details")
})

router.delete("/delete/:id",validator,(req,res)=>{
    let{id}=req.params
    let data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    const marvel=data.marvel.filter((ele)=>ele.id!=id)
    data.marvel=marvel
    fs.writeFileSync("./db.json",JSON.stringify(data))
    res.send("Deleted Character Details")

})

module.exports=router

