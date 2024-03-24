//**  key : value  | property */
// let obj={
//     name:'karan',
//     age:34,
//     role:'developer',
//     1:'number'               // js does implicit conversion to key (converts into string)
// }
// console.log(obj)

//Accessing object properties through . and square bracket(["pass in string"])
// console.log(obj.name)
// console.log(obj.age)

// console.log(obj["name"])
// console.log(obj['age'])

//why square brackets ?  ->

// let obj1={
//     name:'badshah',
//     "is admin":'true',
//     is_master:'false'
// }
// // console.log(obj1.is admin) // not feasible | multiple word
// console.log(obj1['is admin'])
// console.log(obj1.is_master) //  you can use _ in btw to avoid square bracket :)

//** function as property */
//function inside an object / how to call ?
// const obj = {
//   name: "prakash",

//   info: function () {
//     // cant define here Arrow fnc | use anonymous func
//     console.log("GOAT");
//   },

//   bye() {         // directly define function without giving fuction keyword and do not assign to any variable
//     console.log("bye bye");
//   }
// };
// obj.info();
// obj.bye();

//** computed properties */

// adding property to object
// const detail = {
//   name: "gautam",
//   age: 99,
// };
// detail.city = "Ranchi";
// detail.state = "Jharkhand";
// console.log(detail)

// using input from user to print the detail : using computed property=> takes value and compares
// const x = require("readline-sync");
// const key = x.question(
//   "what details you want to print - name/age/city/state ?"
// );

// console.log(detail[key]); //computed property
// console.log(detail.key); //will give undefined

//.................................

//** shorthand property (obj) */
// function display(name,city){
//     return{
//         // name:name,
//         // city:city
//         name,  // shorthand property
//         city
//     }
// }

// const obj= display('Atarvaa','Daltonganj')
// console.log(obj)

// const student='prakash'
// const course='React'
// console.log({student,course})      // shorthand property : using {object bracket separated by comma}

//..................

//for in
// for let in : used in object/ as map filter reduce are Array function , cant use in object
// const obj={
//     name:"prakash",
//     city:'daltonganj'
// }
// const isPropertyFound = "name" in obj
// // console.log(isPropertyFound)

// for(let key in obj){
//     console.log(key,obj[key])
// }

//..................

//** object reference & shallow copy: */
//shallow copy(pointing to same memory location)
//deep copy(pointing to different memory location)

// const person1={
//     name:'prakash',
//     age:15
// }
// // console.log(person1)
//    const person2 =person1
//    person2.name='xyz'
//    console.log(person1) // same value , does shallow copy(pointing to same memory)
//    console.log(person2)   //same value , solution is do deep copy(pointing to different memory)

//Another method that does - 1 level deep copy, for nested it behave as shallow copy:  Object.assign()
// const person1={
//     name:'prakash',
//     age:15
// }
//   const person2  =Object.assign({},person1)
//   person1.age=44
//   person2.name='shakira'
// console.log(person1) // 1 level deep copy
// console.log(person2) // 1 level deep copy

// shallow nested copy:
// const person1={
//     name:'prakash',
//     age:15,
//     address:{
//         city:'Mumbai',
//         state:'Maharashtra'
//     }
// }
//   const person2 = Object.assign({},person1)
//   person1.address.city='sirsa'
//     console.log(person1)   //sirsa
//     console.log(person2)   //sirsa

//........................

//**Optional chaining */ - used in handling nested object properties while accessing

// const user={
//     name:'prakash',
//     age:15,
//     // address:{
//     //     city:'Mumbai',
//     //     state:'Maharashtra'
//     // },
//      display(){
//         console.log('hello')
//     }
// }

// suppose if address object is not defined in user object ,then how you will handle if accessing address obj

//solution1 - manual handling
// if(user.address !== undefined){
//     console.log(user.address.city)
// }
// else{
//     console.log('user address not found')
// }

//solution2 -Optional chaining
// console.log(user.address?.city)  // identify which can go undefined and gives undefined as o/p , if not then gives usual o/p
// console.log(user.displayMsg?.());

//.......................................

//** Destructring object */

// const obj1={
//     name:'prakash',
//     age:44
// }
// const  {name,b}=obj  // use key that is mapped with object else will throw undefined
// console.log(name) //prakash
// console.log(b)  //undefined

// const obj2={
//     name:'prakash',
//     age:44,
//     address:{
//         city:'Palamu',
//         state:'Jharkhand'
//     },
//     courses:['html','css','Js']
// }
// const {name,...rest} =obj2
// console.log(rest)

// change key to any name you want
// const {name:userName}=obj2
// console.log(userName)

// accessing nested object using {key:{value}}
//   let {address:{city}} =obj2
//   console.log(city) //Palamu
//   console.log(address) //ReferenceError: address is not defined/ while destructring key will not be accessed but value can be

//** key, value, entries */

// const obj2={
//     name:'prakash',
//     age:44,
//     id:'yyt'
// }
//    const entries =Object.entries(obj2)
//    console.log(entries)

// const key = Object.keys(obj2)
// console.log(key)

// const value =Object.values(obj2)
// console.log(value)

// use case -> sum of values in object (convert into array using Object.values and then using for loop add)

//......................

//** this keyword */ this keyword refers to an object.
// The this keyword refers to different objects depending on how it is used:->
// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
//In Arrow function=> this refers to global scope/object
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

// in object method , this refers to object executing function
// const obj={
//     name:'prakash',
//    display :function(){
//         // console.log('hello')
//         console.log(this.name) // implicit binding
//     }
// }
// obj.display()

// in regular function not using object, this refers to window object
// function calculateSum(){
//     console.log(this)
// }
// calculateSum()

// console.log(this)

//In Arrow function=> this refers to global scope/object
// const obj={
//     name:'prakash',
//    display :()=>{            // when using Arrow function
//         console.log(this.name) // undefined // refers to global object
//     }
// }
// obj.display()

//...........................

//**call(), apply(,) & bind() */
// funcion borrowing using above method   OR Explicit binding is same concept
//Explicit binding is done by using method call,apply, bind

// const user1={
//     name:'prakash',
//     age:23,
//     sayHi(){
//         console.log('hello')
//         console.log(this.age)  // this poiting to user1 => Implicit Binding
//     }
// }
// const user2={
//     name:'Ashish',
//     age:34,
//     sayHi(){
//         console.log('hi')
//     }
// }
// const user3={
//     name:'Riya',
//     age:32,
//     sayHi(){
//         console.log('hello')
//     }
// }
// user1.sayHi()
// user2.sayHi()
// here same function sayHi() is repeating , so declare one function and borrow it, see below:-

// const user1 = {
//   name: "prakash",
//   age: 23,
// };
// const user2 = {
//   name: "Ashish",
//   age: 34,
// };
// const user3 = {
//   name: "Riya",
//   age: 29,
// };

// function sayHi(){
//     console.log(this.name)
// }

// sayHi.call(user1)
// sayHi.call(user2)

//let suppose below declared function has multiple parameter , how you will access them ?
// function sayHi(degree, year) {
//   console.log(this.name, degree, year);
// }

/// * Explicit Binding/ function borrowing * //

// sayHi.call(user1,'CSE','2019') // 1st argument is object that want to borrow function, rest will be parameters/arguments of function
// sayHi.call(user2,'ECE','2018')

// sayHi.apply(user1, ["ece", 2019]); // 1st argument is object that want to borrow function , 2nd argument array of passing arugument /inernally gets destructure

// const result=sayHi.bind(user1,'Btech CSE',2019)  // bind returns function -> call that function to return value
// result()
// OR you can skip last parameter and pass it in returned function
// const result=sayHi.bind(user1,'Btech CSE')
// result(2019)

//** constructor 'new'  */
// function User(){
//     this.name='prakash',
//     this.age=34
// }
//  const user1 = new User()
//  console.log(user1.name)
//  console.log(user1.age)

// convinent way to create multiple object : use constrcuter function /add properties using this keyword/ call it using new
function User(name,age){
    this.name=name,
    this.age=age
}
 const user1 = new User('prakash',33)
 const user2 = new User('Ashish',23)
 console.log(user1)
 console.log(user2)


 // ** this keyword excercise below: 