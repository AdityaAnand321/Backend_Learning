const mongoose = require("mongoose");


//connection
mongoose.connect('mongodb://127.0.0.1:27017/youtube-app-1')
.then(()=>console.log("MongoDB Connected"))
.catch((err)=>console.log("Mongo Error",err));

//Pahle Schema banate hai 
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    jobTitle:{
        title:String,
    },
    gender:{
        type:String,
    },
});

const result=await User.create({
    firstName:body.first_name,
    lastName:body.last_name,
    email:body.email,
    gender:body.gender,
    jobTitle:body.job_title,
});
console.log(result);

return result.status(201).json({msg:"success"});


//ab model banayenge
const User= mongoose.model('user',userSchema);

