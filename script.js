// function abc() {
//   console.log("Hello World");
//   function xyz() {
//     console.log("This is second function inside first function");
//   }
//   xyz();
// }

// abc();

// function gp() {
//   let a = 100;
//   let b = 200;
//   let c = 300;
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   function p() {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     function child() {
//       let d = 250;
//       console.log(a);
//       console.log(b);
//       console.log(c);
//     }
//     child();
//   }
//   p();
// }

// gp();

// Higher Order Function
// function firstsumthensubtract(cb,b){
//     console.log(cb-b);
// }

// function sum (a,b){
//     return a+b;
// }

// firstsumthensubtract(sum(10,20),10);

// function walkin(cb){
//     console.log("Walking in the rest");
//     setTimeout(cb,3000);
// }
// function eat(cb){
//     console.log("Eating food ");
//     setTimeout(cb,2000);
// }
// function pay(){
//     console.log("Bill payed");
// }

// walkin(()=>{
//     eat(()=>{
//         pay();
//     })
// })

// let arr = [2,3,4,6,8,5]

// function doublevalue(arr){
//     let  arr2 = [];
//     for(let i=0;i<arr.length;i++){
//         arr2[i] = 2*arr[i];
//     }
//     return arr2;
// }
// let arr3 = arr.map((value)=> 2*value);
// console.log(arr3);
// console.log(doublevalue(arr));

// // Prototype
// Array.prototype.doubleArrVal = function(){
//     let output = [];
//     for(let i=0;i<this.length;i++){
//         output[i] = 2 * this[i];
//     }
//     return output;
// }

// console.log(arr.doubleArrVal());

// Array.prototype.tripleArrVal = function(logic){
//     let output = [];
//     for(let i=0;i<this.length;i++){
//         output[i] = logic[this[i]];
//     }
//     return output;
// }

// function triple(data){
//     return 3*data;
// }

// console.log(arr.tripleArrVal(triple));

// let cart = ["Shoes", "Shirt", "Wallet"];

// function orderDetails(cb, cart) {
//   const tproducts = cart.length;
//   const tprice = 1000 * tproducts;
//   // return tprice;
//   setTimeout(cb, 2000);
//   console.log("Total Amount is " + tprice);
//   return tproducts;
// }
// let orderid = [];
// function orderSummary(cb, orderid, cart) {
//   for (let i = 0; i < cart.length; i++) {
//     orderid[i] = i + 1;
//   }
//   setTimeout(cb, 1000);
// }
// const paymentstatus = [];
// function paymentgateway(cb, cart, paymentstatus) {
//   for (let i = 0; i < cart.length; i++) {
//     paymentstatus.push("Payed for " + cart[i]);
//   }
//   setTimeout(cb, 1000);
// }
// function successfulorder(cart, orderid, paymentstatus) {
//   for (let i = 0; i < cart.length; i++) {
//     console.log(
//       "OrderId: " +
//         orderid[i] +
//         " , Product Name: " +
//         cart[i] +
//         " , Payment Status: " +
//         paymentstatus[i]
//     );
//   }
// }

// console.log(
//   orderDetails(() => {
//     orderSummary(
//       () => {
//         paymentgateway(
//           () => {
//             successfulorder(cart, orderid, paymentstatus);
//           },
//           cart,
//           paymentstatus
//         );
//       },
//       orderid,
//       cart
//     );
//   }, cart)
// );

// let arr = [2,3,4,6,8,5]
// Array.prototype.filterReplica = function(logic){
//     let output = [];
//     for(let i=0;i<this.length;i++){
//         if(logic(this[i])){
//             output.push(this[i]);
//         }
//     }
//     return output;
// }
// function isEven(val){
//     return val%2 === 0;
// }
// console.log(arr.filterReplica((val)=> val%2 != 0));

// let arr = [2, 3, 4, 5, 6, 8, 7];

// Array.prototype.reduceReplica = function (logic, iv) {
//   let acc = iv;
//   for (let i = 0; i < this.length; i++) {
//     acc = logic(acc, this[i]);
//   }
//   return acc;
// };

// console.log(
//   arr.reduceReplica((acc, val) => {
//     return acc + val * 2;
//   }, 0)
// );

// let userData = [
//     {
//         name:"Priyanshu",
//         age: 21
//     },
//     {
//         name:"Pranav",
//         age: 20
//     },
//     {
//         name:"Divesh",
//         age: 23
//     },
// ]

// console.log(userData.filter((user)=>user.age>20).map((user) => user.name));

// Promises

// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("Promise 1 Resolved")
//         // console.log("Promise 1 Resolved");
//     },5000)
// })

// const promise2 = new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("Promise 2 Resolved")
//     // console.log("Promise 2 Resolved");
//     },3000)
// })

// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("Promise 3 Resolved")
//     // console.log("Promise 3 Resolved");
//     },4000)
// })

// promise1
// .then(promise2)
// .catch((err)=>{
//     console.log("Error: ",err);
// })

// Promise.all
// Promise.all([promise1,promise2,promise3])
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log("Error: ",err);
// })

// Promise.allSettled([promise1,promise2,promise3])
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log("Error: ",err);
// })

// Promise.race([promise1,promise2,promise3])
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log("Error: ",err);
// })

// Promise.any

// Async/Await

// async function fetchdata(){
//     try{
//         const data = await fetch("https://dummyjson.com/products");
//         console.log(await data.json());
//     }
//     catch(err){
//         console.log("Error: " + err.message);
//     }

// }
// fetchdata();

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Problem Resolved");
//   }, 3000);
// });

// p1
// .then((res)=>{console.log(res)})
// .then(()=>{
//     setTimeout(()=>{
//         console.log("P3");
//     },3000);
// })
// .then(()=>{
//     setTimeout(()=>{
//         console.log("P4");
//     },1000);
// })

// function promise(message,time){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(message);
//             resolve(message);
//         },time);
//     });
// }



// p1
// .then((res)=>{
//     console.log(res)
// })
// .then(()=>{
//     return (promise("P1",4000))
// })
// .then(()=>{
//     return (promise("P2",2000));
// })
// .catch((err)=>{
//     console.log("Error: "+ err);
// })


// Event Capurting :- Top to Bottom


// Bubbling :- Bottom to Top

// e.stopPropagation() -> Can stop the event from bubbling up or capurting down.


// const grandparent = document.getElementById("grandparent");
// const parent = document.getElementById("parent");
// const child = document.getElementById("child");

// grandparent.addEventListener("click",(e)=>{
//     console.log("This is Red Block");
// })

// parent.addEventListener("click",(e)=>{
//     console.log("This is Green Block");
// })

// child.addEventListener("click",(e)=>{
//     console.log("This is Blue Block")
// })


// Event Deligation




// function debounce() {
//     let currenttime;
//     const inputbox = document.getElementById("textbox");

//     inputbox.addEventListener("input", (e) => {
//         clearTimeout(currenttime); 
//         currenttime = setTimeout(() => {
//             console.log(e.target.value); 
//         }, 3000);
//     });
// }
// debounce();

// Debouncing -> 


// Event Loop 

var a = 10;
console.log(a);
Promise.resolve("Resolved").then(()=>{console.log("P1")});
Promise.resolve("Resolved").then(console.log("P2"));
process.nextTick(()=>{
    console.log("NT1");
})
