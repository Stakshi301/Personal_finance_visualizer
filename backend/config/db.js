const mongoose=require('mongoose');
require('dotenv').config();

const ConnectDb=async()=>{
    try{
    await mongoose.connect(process.env.String);
        console.log('database connected');
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

module.exports=ConnectDb;