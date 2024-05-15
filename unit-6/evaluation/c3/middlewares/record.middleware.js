const fs = require("fs");

const record = (req,res,next) =>{
    if(req.method === "PATCH"){
        next();
        const id= req.params.id;
        fs.appendFileSync("./records.txt", `The Player with id:${id} has been updated | ${new Date()} \n`)
    }
    else if(req.method === "DELETE"){
        next();
        const id= req.params.id;
        fs.appendFileSync("./records.txt", `The Player with id:${id} has been deleted | ${new Date()} \n`)
    }
}

module.exports = {
    record
}