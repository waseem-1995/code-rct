
const http=require("http")
const fs=require("fs")
const dns=require("node:dns")
let os=require("os")
var yodasay=require("yodasay")

let totalcount=0
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.setHeader("Content-type","text/html");
        res.end("<h1>Welcome to the Home Page</h1>")
    }
    //address part
    else if(req.url==="/address"){
        dns.lookup("masaischool.com",(err,address,family)=>{
            if(err)res.end(err);
            else{
                fs.appendFile(
                    "./logs.txt",
                    `URL: masaischool.com IP Address: ${address} and Family is IPv4${family}\n`,
                    (err)=>{
                        if(err)res.end(err);
                        else res.end("Logs File has been updated")
                    }
                )
            }
        })
    }
    //add new
    else if(req.url==="/addnew"){
        let data=JSON.parse(fs.readFileSync("./data.json","utf-8"));
        const newdata={
            id:Math.floor(Math.random()*100),
            first_name:os.userInfo.username,
            last_name:os.userInfo.username,
            email:"iwaseemkhan1995@gmail.com",
            gender:"Male",
        }
        data.push(newdata)
        fs.writeFile("./data.json",JSON.stringify(data),(err)=>{
            if(err)res.end(err)
            else res.end("The data has been updated, go and check the data file")
        })
        totalcount++
    }
    // gencount
    else if(req.url==="/gencount"){
        let data=JSON.parse(fs.readFileSync("./data.json","utf-8"));
        fs.writeFile(
            "./logs.txt",
            `The initial Male count is 11 and Female count is 10 at ${Date()}\n`,
            (err)=>{
                if(err)res.end(err);
                else res.end("The count has been updated in the logs file")
            }
        )
    }
    //people
    else if(req.url==="/people"){
        let users = JSON.parse(fs.readFileSync("data.json", "utf-8"));
        users.map((ele) => {
            fs.writeFile("./people.txt",`\n${(`First Name: ${ele.first_name} Last Name: ${ele.last_name} Gender: ${ele.gender} Email: ${ele.email}\n`)}`,(err)=>{
                if(err){
                    res.end(err)
                }else{
                    res.setHeader("Content-type","text/html")
                    res.end("The file has been created and data has been entered")
                }
            })
        
        });
        res.end()
          

    }

    //yodasay
    else if(req.url==="/yoda"){
        let data=fs.readFileSync("./people.txt","utf-8");
        res.end(
            yodasay.say({
                text:data,
            })
        )
    }
})


// Do not forget to export the server.
 module.exports = server;
