const express=require("express")
const fs=require("fs")
const router=express.Router()
const {validator}=require("../middleware/validator.middleware")

router.post("/addnew",(req,res)=>{
    let data=JSON.parse(fs.readFileSync("./db.json"))
    data.dc.push(req.body)
    fs.writeFileSync("./db.json",JSON.stringify(data))
    res.send("New superhero has been added")
})

router.get("/",(req,res)=>{
   

        let data=JSON.parse(fs.readFileSync("./db.json"))
        if(req.query.alias){
            const newdata=data.dc.filter((ele)=>ele.alias.toLowerCase().includes(req.query.alias.toLowerCase()))
            res.send(JSON.stringify(newdata))
        }else{
            res.send(JSON.stringify(data))
        }
    
})

router.get("/:id",(req,res)=>{
    let{id}=req.params
    let data=JSON.parse(fs.readFileSync("./db.json"))
    for(let i=0;i<data.dc.length;i++){
  if(data.dc[i].id==id){
    res.send(data.dc[i])
  }
    }

})

router.patch("/update/:id",validator,(req,res)=>{
    let{id}=req.params
    let data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    let patchdata=data.dc.map((ele)=>{
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
    data.dc=patchdata
    fs.writeFileSync("./db.json",JSON.stringify(data))


    res.send("Patched Character Details")
})

router.delete("/delete/:id",validator,(req,res)=>{
    let{id}=req.params
    let dcdata=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    const dc=dcdata.dc.filter((ele)=>ele.id!=id)
    datadc.dc=dc
    fs.writeFileSync("./db.json",JSON.stringify(dcdata))
    res.send("Deleted Character Details")

})

module.exports=router
