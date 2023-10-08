const express = require('express');
const app=express();
app.use('',function(req,res,next){
    console.log("1");
    next();
});
app.get('/',function (req,res)
{
    res.send('Hello World!');
});
app.listen(3000);