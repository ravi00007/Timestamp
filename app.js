const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./model/User');
const { response } = require('express');
const  MongoClient = require('mongodb').MongoClient;

mongoose.connect('mongodb://localhost:27017/Time',{useNewUrlParser:true},(err)=>{
    if(!err){
        console.log('MongoDB Connected..')
    }
    else{
        console.log('ERRor in DB connection :'+err)
    }
})

// const url ="mongodb://localhost:27017/Time";

app.get('/',(req,res)=>{
    res.send('its working')
})

app.get('/cron',(req,res)=>{

    const user = new User();
    user.save().then((response)=>{
        res.send(response)
        console.log(response)
    }).catch((err)=>{
        res.send(err)
        console.log(err)
    })

})
const PORT =process.env.PORT || 5000;
app.listen(PORT, console.log(`server started at port ${PORT}`));