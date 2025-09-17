const {createClient} = require('redis');

const client = createClient();

client.on('err',err=>console.log(err));

async function connect (){
    await client.connect();
    console.log(" Connected to Redis");
}
module.exports = {client,connect}
