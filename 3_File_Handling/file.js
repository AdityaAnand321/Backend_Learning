const fs=require("fs");

//Sunchronous hai 
// fs.writeFileSync("./test.txt","Hey There");

//Asynchronous
// fs.writeFile("./test.txt","HelloWorld",(err)=>{})//isme agar koi error hoga to aajaega 

// const result=fs.readFileSync("./test.txt","utf-8");

//ye kuch return ny karta ek function dena  padta hai iska return type void hota hai
// const result=fs.readFile("./test.txt","utf-8",(err,result)=>{
//     if(err)
//         console.log("Error",err)
//     else 
//         console.log(result)
// });

// console.log(result);

//file ko append karta hai 
fs.appendFileSync("./test.txt" ,`${Date.now()}Hey there`);

//copy a file
fs.cpSync('./test.txt','./copy.txt');

//delete a file

fs.unlinkSync('./copy.txt');

//stats bhi dekh sakte hai 

fs.statt("./test.txt");

//make directory
fs.mkdirSync("my-docs");

fs.mkdirSync("my-docs/a/b",{recursive:true})