const express= require('express');
const connect=require('./config/db')
const app=express();


connect().then(()=>app.listen(3000,()=>{
    console.log(`server running on port 3000`)} )

)
