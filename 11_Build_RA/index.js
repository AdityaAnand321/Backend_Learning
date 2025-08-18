const express=require("express");
const users=require("./MOCK_DATA.json");
const app=express();
const PORT=8000;


//Routes

app.get('/users',(req,res)=>{
    const html=`
    <ul>
    ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
    </ul>
    `
    res.send(html);
})


app.get('/api/users',(req,res)=>{return res.json(users)});
//app.get ek route banata hai ye batata hai ispe response kya hoga.

//Dynamic Path Parameter 
//GET API/USER/:ID

app.get('/api/users/:id',(req,res)=>{
    const id=Number(req.params.id);
    const user=users.find((user)=>user.id===id);
    return res.json(user);
    })

//create new user 
app.post('/api/users',(req,res)=>{return res.json({status: "Pendind"})});

//edit the user 
app.patch("api/users/:id",(req,res)=>{return res.json({status: "Pending"})})

 
//ek aur tareeke se kar sakte hai 

// app.route("/api/users/:id").get((req,res)=>{
//     const id=Number(req.params.id);
//     const user=users.find((user)=>user.id===id);
//     return res.json(user);
//     })
//     .patch((req,res)=>{res.json({status: "pending"})});
//     .delete((req,res)=>{});



app.listen(PORT,()=>console.log(`Server Started at Port ${PORT}`));

