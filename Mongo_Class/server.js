const http = require('http');
const { MongoClient } = require('mongodb');
// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type': 'text/plain'});
//     res.end('Hello World\n');
// })

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbname = 'Mongo_Class';

async function main(){
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db(dbname);
    const collection = db.collection('user');

    // const user = collection.insertMany([{
    //     name:"Priyanshu",
    //     age: 21,
    //     Roll_No: 1
    // },
    // {
    //     name: "Prianshu",
    //     age:21,
    //     Roll_No: 2
    // },
    // {
    //     name: "Raghav",
    //     age: 22,
    //     Roll_No: 3
    // },
    // {
    //     name: "Pranav",
    //     age:20,
    //     Roll_No: 4
    // }
    // ])

    // const findResult = await collection.find({age:22}).toArray();
    // console.log('Found documents =>', findResult);

    // const updateResult = await collection.updateOne({ name: "Raghav" }, 
    // { $set: { age: 23 } });
    // console.log('Updated documents =>', updateResult);

    // const deleteResult = await collection.deleteOne({ name: "Raghav" });
    // console.log('Deleted documents =>', deleteResult);

    return 'done';
}

main()
.then(console.log)
.catch(console.error)

// 0847
