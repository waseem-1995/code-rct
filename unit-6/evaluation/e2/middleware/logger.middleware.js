const express=require("express")
const fs=require("fs");
function logger(req,res,next){
    const {method,url,headers:{'user-agent':userAgent}}=req;
    const line=`Method:${method},Route:${url},user-agent:${userAgent}\n`;
    fs.appendFileSync('log.txt',line)
    next()
}


module.exports=logger