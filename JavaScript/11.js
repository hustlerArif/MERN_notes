//Async JS

//callback function:
// when you pass function to another fnc
// used in Async JS : setTimeout/interval

// function response when called : eg: btn.addevntListner : called when button clicked  // fetch API

// examples:

// function a(wrapper) {
//   console.log("bye");
//   console.log(wrapper);
// }

// function b() {
//   console.log("hi");
// }

// a(b);

// console.log('kick')
// setTimeout(() => {
//     console.log('hi')
// }, 2000);

// fetch('https://..')
// .then(function (){
//     // response logic
// })

// let btn = document.getElementById('btn')
// btn.addEventListener('click',function(){  // callback function
//     console.log('clicked')
// })




// Async JS || javascript visualizer 9000
// job of call stack is to manage Execution context
//flow-> callStack-> browser API -> callback Queue -> callstack  || setTimeout present..
// event loop is heart of Asyn nature of JS, keep track on callback queue , if callback function arrives here, it pushes into call stack
// In promises=>  Microtask queue will get priority over callbackqueue/task queue when fnc call happens

// check screenshots for more reference



// Callback Hell: (pyramid of doom)
// bookHotel-> proceedToPayment -> showBookingStatus -> UpdateBookingStatus
//Solution=> promises
// code should increase vertically Not horizontally
// everything on website is backed by an API call : search/filter/...

// Inversion of control: eg:
// bookHotel(hotelId, function(){
//     //.......     if code stuck here then it will never go to next function execution
//     proceedToPayment(){
//         //.. control/execution of this function depends on execution of bookHotel
//     }
// })



// Promise : Promise is an object that has the status of an async operation, and its corresponding value
// use promise to get data from server/backend...

// let Promise= bookHotelAPI(hotelId){
//     stateRequest--> pending/fulfilled/rejected
//     response -> value/error
// }

// const URL = "https://fakestoreapi.com/products";

// let promise = fetch(URL);
// console.log(promise);

//1)
// promise
//   .then(function (response) {
//     // console.log(response)
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   })

//2)
// promise
//   .then(function (response) {  // whenever promise resolved
//     // console.log(response)
//     return response.json(); // response from REST API will be always in form of JSON
//   })
//   .then(function (data) { // every then is returning promise, to handle response coming we need .then
//     console.log(data);
//   })
//   .catch(function (error) { // whenever promise rejected
//     console.log("error occurerd", error);
//   });



// Creating a promise

// const isLoggedIn = true;
// const db = [
//   { id: 1, role: "developer" },
//   { id: 2, role: "scientist" },
// ];

// let promise = new Promise((resolve, reject) => {
//   if (isLoggedIn) {
//     // resolve('promise resolved')
//     // setTimeout(() => { resolve("promise resolved"); }, 3000);
//     setTimeout(() => { resolve(db);}, 3000);
//   } else {
//     const error = new Error("someting went wrong");
//     reject(error.message);
//   }
// });

// console.log(promise);

// promise
//   .then((response) => {
//     console.log(response);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });


// Method  chaining -> promise followed by then catch -> then catch-> then catch  // check snap


// Promise.all [array of Promises] => takes multiple promises , order remains same when it resolved
// among them if any one prameter is rejected then, it gives that error / either return all array of single rejected value

// let promise1 = new Promise((resolve) => {setTimeout(() => {resolve("promise1 resolved");}, 3000);});
// let promise2 = new Promise((_,reject) => {setTimeout(() => {reject("promise2 rejected");}, 2000);});
// let promise3 = new Promise((resolve) => {setTimeout(() => {resolve("promise3 resolved");}, 1000);});

// // promise1.then((res)=> console.log(res))
// // promise2.then((res)=> console.log(res))
// // promise3.then((res)=> console.log(res))

// let arrOfPromises=[promise1,promise2,promise3]
//    let promise =Promise.all(arrOfPromises)
//    promise.then((res)=> console.log(res)).catch((err)=>console.log(err))

// ex: fetch multiple data from API using Promise.all
// https://api.github.com/users/hustlerArif
// https://api.github.com/users/karan

// let users = ["hustlerArif", "karan"];

// let arrOfPromises = users.map((user) =>
//   fetch(`https://api.github.com/users/${user}`)
// );

// let promise = Promise.all(arrOfPromises);
// // promise.then((response)=>console.log(response))
// promise
//   .then((response) => response.forEach((data) => console.log(data)))
//   .catch((err) => console.log(err));


//promise.allSettled : waits for all promise to settled , means either fulfilled/rejected

// let promise1 = new Promise((resolve) => {setTimeout(() => {resolve("promise1 resolved");}, 3000);});
// let promise2 = new Promise((_,reject) => {setTimeout(() => {reject("promise2 rejected");}, 2000);});
// let promise3 = new Promise((resolve) => {setTimeout(() => {resolve("promise3 resolved");}, 1000);});

// let arrOfPromises=[promise1,promise2,promise3]

//   //  let promise =Promise.allSettled(arrOfPromises)
//   //  promise.then((res)=> console.log(res))

// //Promise.race/any
//   //  let promise =Promise.race(arrOfPromises)  // whichever promise is settled(fulfilled/rejected) first /waits for 1st settled promise
//   //  promise.then((res)=> console.log(res))

//       let promise =Promise.any(arrOfPromises) //whichever promise is fulfilled first
//    promise.then((res)=> console.log(res))

//................................................



//async -await

// async function returnSomething(){  // whenever async keyword is used before function it returns promise
//   return 'prakash'
// }
// const result=returnSomething()
// console.log(result)

//..........................................
// async function showSomething() {
//   try {
//     let promise = new Promise((resolve, reject) => reject("Promise rejected"));
//     let result = await promise; // function execution stops here until the promise is settled
//     console.log(result);
//   } catch (err) {
//     console.log("Error Occured:", err);
//   }
// }
// showSomething();

//.............................................

// without async await, we used then-catch
//  let result1 =showSomething()
// //  console.log(result1)    // promise
//  result1.then((res)=>console.log(res))  // resolve value of promise



// whichever thing promise is returning you need to take it with await in order to settle
// fetch data from API using async await:

// const getUserData = async () => {
//   try {
//     const promise = fetch("https://fakestoreapi.com/products");
//     // console.log(promise);
//     const data = await promise;
//     // console.log(data)
//     const response = await data.json();
//     console.log(response);
//   } catch (err) {
//     console.log(err);
//   }
// };
// getUserData();

// OR
const getUserData = async () => {
  try {
    const promise = await fetch("https://fakestoreapi.com/products");
    const response = await promise.json();
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
getUserData();
