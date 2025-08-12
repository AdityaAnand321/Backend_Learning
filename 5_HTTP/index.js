const http=require("http");
const fs=require("fs");

//jabhi koi request aati hai server pe to call back function ko run karti hai 
const myServer=http.createServer((req,res)=>{

    const log=`${Date.now()}: ${req.url}New Req Received \n`;
//req.url se jan sakte hai kis path ke liye req aayi hai 
    fs.appendFile("log.txt",log,(err,data)=>{
        res.end("Hello from server again")
    });
    console.log("New Req Rec");
    // res.end("Hello From Server");
});
//req: req ki sari info user ki ip wagera 
//res: response send karte hai isse
//server ko run karwane ke liye port chahiye hota hai 

myServer.listen(8000,()=>console.log("Everything OK"))//ek server ek hi port pe chlta hai

//browser me jake localhost: phir 8000 likhenge to ye console wala wha print hojaega 
// aur vs code me notification aajaega new req ka 
//console.log(req.header) ye req ki information bata hai 
/*
    if we make any change then we have to restart
    req poora ek object hota hai bhut sara data hota hai usme

*/


/* 
jaise hame req.url se page ka pata chal jata hai to uska use ham ye kar sakte hai ki kab hame kaun sa page chahiye print karwane ke liye

const log=`{Date.now()}: ${req.url} New Req Received   `

fs.appendFile("log.txt",log,(err,data)=>{
    switch(req.url)
    {
    case '/' res.end("Home Page");
    break;
    case '/about'}: res.end("piyush garg")
    })


*/