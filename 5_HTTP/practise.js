const http=require("http");
const fs=require("fs");

const myServer=http.createServer((req,res)=>{

    const req1=`${req.url}\n`;
    
    fs.appendFile("log1.txt",req1,(err,data)=>{
    switch(req.url)
    {
    case '/':res.end("Home Page");
    break;
    case '/about': res.end("piyush garg");
    break;
    default:
        res.end("404");
    }

    })
 
})

myServer.listen(8000,()=>console.log("Everything OK"));