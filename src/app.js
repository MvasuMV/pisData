require("dotenv").config();
const express = require('express');

// require("./db/conn");
const connectDB = require("./db/conn");
const Info = require("./models/pisInfo")

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    next()
  })



app.post("/infos", async(req,res)=>{
    try{
    const data = new Info(req.body);
    const newInfo = await data.save();
    res.status(201).send(newInfo);
    }catch(e){
        res.status(400).send(e);
    }
})

app.get("/info",async(req, res)=>{
    try{
        const routeData = await Info.find();
        res.send(routeData);
    }
    catch(e){
        res.send(e);
    }
})

app.get("/info/latest",async(req, res)=>{
    try{
        const Data = await Info.find().sort({ field: 'asc', _id: -1 }).limit(1);
        res.send(Data);
    }
    catch(e){
        res.send(e);
    }
})

const start =async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(port,() =>{
           console.log (`${port} connected`); 
        });
    } catch(e){
        console.log(e);
    }

}

start();

// app.listen(port,() => {
//     console.log(`listening on port  ${port}`);
// })