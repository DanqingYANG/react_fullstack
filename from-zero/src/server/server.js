import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from './connect-db';
import './initialize-db';

let port =7777;
let app= express();

app.listen(port, console.log("server listening on port ", port));
// request, response
// app.get('/',(req, res)=>{
//     res.send("Hello world.");
// });
//var bodyParser = require('body-parser');
app.use(bodyParser.json()); //utilizes the body-parser package

app.use(
    cors(),
)
app.use(bodyParser.urlencoded({extended:true}))


// here, insert a task
export const addNewTask = async task=>{
    let db = await connectDB();
    let collection = db.collection('tasks');
    await collection.insertOne(task);
};

export const updateTask = async task=>{
    let {id,group,isComplete,name} = task;
    let db = await connectDB();
    let collection = db.collection(`tasks`);
    if (group) {
        await collection.updateOne({id},{$set:{group}});
    }
    if (name) {
        await collection.updateOne({id},{$set:{name}});
    }
    if (isComplete !== undefined) {
        await collection.updateOne({id},{$set:{isComplete}});
    }
};

app.post('/task/new', async(req,res)=>{
    console.log("I am here!")
    let task  = req.body.task;
    console.log(task)    
    await addNewTask(task);
    // 200 is ok
    res.status(200).send(); 
});

app.post('/task/update',async (req,res)=>{
    let db = await connectDB();
    await updateTask(req.body.task);
    res.status(200).send();
});

app.post('/comment/new',async (req,res)=>{
    let comment = req.body.comment;
    let db = await connectDB();
    let collection = db.collection(`comments`);
    await collection.insertOne(comment);
    res.status(200).send();
});

