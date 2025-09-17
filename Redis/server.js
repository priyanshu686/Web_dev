const {client,connect} = require('./client');

async function hello(){
    await connect();
    const res1 = await client.set("bike:2", "World");
    console.log(res1);  // OK
    const res2 = await client.get("bike:2");
    console.log(res2);  // Deimos
}
hello();
