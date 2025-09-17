
const express = require("express");
const app = express();
let name = "Priyanshu Bindal"
const pendingReq = [];
app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})
app.get("/getname",(req,res)=>{
    if (name !== req.query.lastName){
        // console.log(name);
        // console.log(req.query.lastName);
        res.json({name});
    }else{
        pendingReq.push(res);
    }
})

app.get("/updatename",(req,res)=>{
    name = req.query.name;

    while( pendingReq.length> 0){
        const client = pendingReq.pop();
        console.log("While is working");
        client.json({name});

    }
    res.send({success: "DATA UPDATED SUCCESFULLY"})
})

const port = process.env.PORT || 5002;

app.listen(port, ()=>{
    console.log(`Server Running on Port ${port}`)
})