const fs=require('fs');
const http=require('http');
const url=require('url');

const myServer=http.createServer((req,res)=>{
    if(req.url==="favicon.ico")return res.end();
    const log=`${Date.now()}; ${req.url}New Request Received\n`;

        fs.appendFile("log.txt",log,(err,data)=>{
            res.end("Hello from server again")
        });
        console.log("New Req Rec");

    })

    myServer.listen(8000,()=>console.log("Everything OK"))