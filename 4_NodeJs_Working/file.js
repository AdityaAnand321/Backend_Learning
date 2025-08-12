const fs=require("fs");

// console.log("1");

// //Blocking 
// const result=fs.readFileSync("contacts.txt","utf-8");
// console.log(result);

// console.log("2");


//Non-Blocking 

console.log("1");

fs.readFile("contacts.txt","utf-8",(err,result)=>{console.log(result)});

console.log("2");
console.log("3");

// const os=require("os");
// get information about cpu