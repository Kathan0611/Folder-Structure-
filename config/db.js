const mongoose=require('mongoose');
require('dotenv').config()
const connect =async (req,res)=>{

    await mongoose.connect(process.env.DB_HOST);
     
    console.log(`Database Successfully connected`)

}

module.exports=connect;