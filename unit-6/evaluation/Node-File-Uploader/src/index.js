const express=require("express")
const multer=require("multer")
const upload = multer({ dest: 'uploads/'

 })
const app=express()


app.use(multer().single('myFile'))

app.get('/',(req,res)=>{
    res.status("200").send( { message: "welcome to server"})

})
app.post('/upload', upload.single('myFile'), (req, res) => {
    res.status("200").send({ status:"success", message: 'file uploaded successfully' });
  });
// export the server
// app.listen(8000,()=>{
//     console.log("port 8000 is running")
// })
 module.exports = app;
