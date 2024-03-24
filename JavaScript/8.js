//** Pure function */

// function calculateSum(x,y){
//     return x+y;
// }
// const result =calculateSum(1,2)
// console.log(result)

// impure function : eg:1
//o/p is dependent on outer factor z  / influenced by outer factor
// const z=10
// function calculateSum(x,y){
//     return x+y+z;   //mutating/changing the return function prarameter that was passed
// }
// const result =calculateSum(1,2)
// console.log(result)

// impure function : eg:2
// function appendNumbers(arr){
//     arr.push(5,6) // mutating
//     return arr

// }
// const result= appendNumbers([1,2,3,4])
// console.log(result)

//to convert above into pure:
////// let newArr=[]   placing here also it works, but it will be impure
// function appendNumbers(arr){
//     let newArr=[]
//     newArr.push(...arr,5,6)
// return newArr

// }
// const result= appendNumbers([1,2,3,4])
// console.log(result)



//** First class function */  functions treated like other variables
// function can be assigned to any variable, passed as argument  or can be returned by another function(H.O.F)
// in below examples, wrapper is FCF(fist class function)

//1) assign function to variable /anonymous func
//  const greetMsg  = function(){    //// assign function to variable /anonymous func
//         console.log('hello welcome to GfG')
//     }
// greetMsg()

//2)pass function as argument
// function wrapper(){
//     return 'welcome to GFG!'
// }

// function greetMsg(inner,name){
//     console.log(inner(),name)
// }
// greetMsg(wrapper,"prakash")   // pass function as argument

// 3) return function from another function ->

// function greetMsg(){

//     function wrapper(){
//         let name='prakash'
//         console.log('welcome to GFG',name)
//     }
//     return wrapper  // returning reference to function so that we can call it later when we want
// }

// greetMsg()  // o/p blank  -> assign it to variable and access through ()   OR  use greetMsg()()
//    const output = greetMsg()
//    output()

//    greetMsg()()  // call this function, return wrapper function ,and then calling same return function again





//** Higher order function */
// A function that accepts another function as argument OR return a function OR does both is called HOF

//CASE1
// function wrapper(){     // here Wrapper is F.C.F , as it is passed as argument to greetMsg
//     return "welcome to GFG!"
// }

// function greetMsg(wrapper){  // greetMsg is H.O.F
//     console.log('Arif',wrapper())
// }

// greetMsg(wrapper)

//CASE2

// function display(){  // H.O.F   // returning a function
//     return function(){   //F.C.F
//         console.log('from inner function')
//     }
// }

// //display()()    OR
//     const x=display()
//     x()

// Use cases:

// let arr = [1, 2, 3, 4, 5];
// below code needs change again and again for cube/fourth power of no
// function squareOfnumber(arr) {
//   let squaredNumber = [];
//   for (let number of arr) {
//     squaredNumber.push(number ** 2);
//   }
//   return squaredNumber;
// }

// const x = squareOfnumber(arr);
// console.log(x);

// solution is below:-------------
// let arr = [1, 2, 3, 4, 5];

// function square(number) {
//   return number ** 2;
// }
// function cube(number) {
//   return number ** 3;
// }

// function calculatePower(wrapper, arr) {
//   let tempArr = [];
//   for (let number of arr) {
//     tempArr.push(wrapper(number));
//   }
//   return tempArr;
// }

// let x = calculatePower(square, arr);
// console.log(x);

//     let y =calculatePower(cube,arr)
//     console.log(y)

//................




// Array methods-

// arr.method_name(function(curentItem,index,actualArray){   // index & actualArray are optional

// })


// Map:
//reference example : for arr.map(getResult)
// function squareOfnumber(arr) {
//     let squaredNumber = [];
//     for (let number of arr) {
//       squaredNumber.push(number ** 2);
//     }
//     return squaredNumber;
//   }

//   const x = squareOfnumber(arr);

// let arr = [1, 2, 3, 4, 5];
// function getResult(number) {
//   return number ** 2;
// }
// const result = arr.map(getResult); // map internally created temp array ,as per condn iterates/loop using for loop with each element and return something
// console.log(result)

// OR this way:
// const result1 = arr.map(function (number) {
//   return number ** 2;
// });
// console.log(result1);

// OR using Arrow function:
//  const arrowFn = arr.map((number)=> number**2)
// const arrowFn = arr.map(number => number ** 2); // or remove paranthesis from number
// console.log(arrowFn);

// all parameter Map eg:
// let arr1 = [2, 3, 4, 5, 6, 7, 8];

// let newArray = arr1.map(function (curentItem, index, array) {
//   console.log(
//     `currentItem is ${curentItem}, index selected ${index}, actual array is ${array}`
//   );

//   return curentItem * 2;
// });
// console.log(newArray);




// Filter:
// let arr = [1, 2, 3, 4, 5,6,7,8];
// const result =  arr.filter( e => e>=4) // internally also checks condn if(each element is greater than 4 then only return) // create tempArray/loop/return
// console.log(result)



// Reduce: takes callback function and return single value

// const result1 =  arr.reduce((total,e) => total+e) // previous value/accumulator= total , current value =e
// const result2 =  arr.reduce((total,e) => total+e,0) // optional, as now total =0 as intial value , else if not given  total=array 1st element
// console.log(result1)

//.......................





// Argument object:  array like object , present internally inside the receiving argument,
// but cant use Array methods like push/pop/..  so, solution convert this into array using spread operator
// from ES6 we use rest parameter

// function calculateSum(){
//   console.log(arguments[0])
//arguments[0]=5  // we can also change the value of argument that is passed/received
// }
// calculateSum(1,2,3,4,5)

// function calculateSum(){
//   let sum=0
//   for(let num of arguments)
//   {
//     sum+=num
//     // console.log(num)
//   }
//   return sum
// }
// x=calculateSum(1,2,3,4,5)
// console.log(x)

//cant use Array methods like push/pop/..  so, solution convert this into array using spread operator
// function calculateSum(){
//   const res=[...arguments]
//   console.log(res)
// }
// calculateSum(1,2,3,4,5)

//...............................





//REST parameter => ...rest /...args  (is proper array you can apply Array methods also)
// rest paramter and spreading has difference  |A rest parameter must be last in a parameter list
// function calculateSum(a,b,...rest){
//   console.log(a,b,rest)
// }
// calculateSum(1,2,3,4,5,6,7)

// program to add any no of passed unknown paramter to function
// function calculateSum(...rest){
//     let sum=0
//     for(let num of rest){
//       sum+=num
//     }
//     console.log(sum)

// }
// calculateSum(1,2,3,4,5,6,7)

//.......................................




// Local Varaible , Global Variable |local/global/block scope
//{variable}  // does not create object but logs in form of object

// let y=18  // Global varaible
// function calculateSum(a,b)
// {let x=10  // local variable / limited to calculateSum function
//   return a+b+x
// }
// const result=calculateSum(1,2)
// console.log({result})  //{ result: 13 }
// console.log(x)  // x is not defined

//block scope  // apply debugger to check throughly
// {
//   var a=10  //let, const not available outside block scope
//   var b=20
//   // console.log(a,b)
// }

// console.log(a,b)

// .........................




// Scope and scope chain // check screenshot with help of example (w.r.t Execution context)
// let a = 3;
// function x() {
//   let b = 5;
//   console.log({ a });
//   function y() {
//     console.log({ b }); //chain -> variable b does not found in his scope but found in parent function /one level up ...and next one level up any more to find
//     //behind the scene ->lexical envionment
//   }
//   y();
// }

// x();

//lexical environment -> has two things  (screenshot for reference)
//1. variable env -> where all the varaibles and functions comes
//2. reference to outer/parent lexical environmet

//** whenever a function is created/script/block is running , a lexical env is created and whenver a function is executed , lexical env is deleted
 
// garbage collector - allocates memory to variable and deletes when not in use // JS automatically does
//.....................................................



// Recursion: fn calling itself
// function x(){
//   console.log('hi')
//    // x();
// }
// x();

// implement recursive function
// number+ (number-1) + (number-2)...

// function calculateSumRecursive(number) {
//   if (number === 1) {   //10+9+8+7+6...1..-2-3.. to stop this at 1 we used base condition of if statement
//     return number;
//   }
//   return number + calculateSumRecursive(number - 1);
//   // 10+calculateSumRecursive(9)+...
//   // 10+9+8+7+6...1..-2-3.. to stop this at 1 we used base condition of if statement
// }

// const result = calculateSumRecursive(10);
// console.log(result);


// finding a factorial - DIY

// your code stats here...

//..............................................



// Closure 
// A closure is the combination of a function bundled together with references to its lexical environment. PFB eg below:
// in other words, A closure is a function that remberes its outer variables and can access them 


function x() {
  let a = 5;

  function y() {
    console.log(a);   // a can access outer variable 
  }
  return y;
}

let z=x();  // if though x is assigned to z , z remembers the returned value
z();

// check examples with TDZ in video last 5 mins/ merge with hoisting concepts
//TIPS ** whenver there is function /fn inside fn concept -> always think in terms of execution context/lexical env


