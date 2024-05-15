//  import required modules from nodejs and build the server
const express=require("express")
const app=express()
const fs=require("fs")

app.use(express.json())  //middleware

//get all todos data
app.get("/",(req,res)=>{
    const data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    console.log(data.todos)
    res.status(200).send(data.todos)
});

//post in todos
app.post("/",(req,res)=>{
    const data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    data.todos.push(req.body)
    fs.writeFileSync("./db.json",JSON.stringify(data))
    res.status(200).send(data.todos)
})


//delete
app.delete("/:id",(req,res)=>{
    const {id}=req.params;
    const data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    //delete todos
   let new_todo_data=data.todos.filter((el)=>{
    return el.id!==+id;
   })
   if(new_todo_data.length===data.todos.length){
    res.status(400).send("Invalid argument")
   }else{
    fs.writeFileSync("./db.json",JSON.stringify({todos:new_todo_data}))
    res.status(200).send(new_todo_data)
   }
    //write in db.json
    
}) 

//update
app.put("/:id",(req,res)=>{
    const {id}=req.params;
    const data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    for(let i=0;i<data.todos.length;i++){
        if(data.todos[i].id=== +id){
            data.todos[i]=req.body
        }
    }
    //write in db.json
    fs.writeFileSync("./db.json",JSON.stringify(data))
    res.status(200).send(data.todos)
}) 

// app.listen(8080,()=>{
//     console.log("running 8080")
// })


// export the server
module.exports = app;
