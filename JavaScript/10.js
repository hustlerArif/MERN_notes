// Classes

//Prototype: property inside every JS object(hidden), value of property is either null or reference to other objects

// const user={
//     name:'karan',
//     age:15
// }

// console.log(user)
// console.log(user.toString())  // prototype inheritance

//..............................

// const loggedInStatus={
//     isLoggedIn:false
// }

// const admin={
//     isAdmin:true,
//     __proto__:loggedInStatus  // prototype_chaining
// }

// const user={
//     name:'karan',
//     age:15,
//     __proto__:admin,     // reserver keyword -> __proto__
//     showMsg(){
//         console.log('hello Geeks!')
//         console.log(this.name)
//     }
// }

// console.log(user.isAdmin)

// console.log(user.isLoggedIn) // prototype chaining
// user.showMsg()

// console.log(Object.keys(user))
// console.log(Object.values(user))

// for(let key in user){
//     console.log(key)
// }

//.............................

//basic of classes:
// user is the class and to create object new keyword is used
// class User {
//     constructor(name,role){
//         this.name=name,
//         this.role=role
//     }
// displayMsg(){
//     console.log(`${this.name} is ${this.role} in HCL tech`)
// }

// }
//  const user1 = new User('karan','developer')
// //  console.log(user1)
//  user1.displayMsg()

//..................................

// Classes inheritance

// class Laptop {
//   //parent
//   constructor(ram, processor) {
//     (this.ram = ram), (this.processor = processor);
//   }
//   displayMsg() {
//     console.log(`${this.ram} is of ${this.processor} processor`);
//   }
// }

// class Dell extends Laptop {
//   // child
//   constructor(ram, processor) {
//     super(ram, processor); // access the parameter of parent class from child class
//   }
// }

// const dell1 = new Dell("8GB", "Intel");
// console.log(dell1);
// dell1.displayMsg();

//..............................................

// Static Method, Static properties

// class Children {
//   constructor(name, age) {
//     (this.name = name), (this.age = age);
//   }

//   static sortByAge(a, b) {
//     return a.age - b.age;
//   }
// }

// const child1 = new Children("prakash", 14);
// const child2 = new Children("Ashish", 12);
// const child3 = new Children("Simran", 44);

// let arr = [child1, child2, child3];

// //   console.log(arr.sort((a,b)=>a.age-b.age))  //  direct

// console.log(arr.sort(Children.sortByAge)); // through static method

//............................................

// Private properties

// class User {
//   #id = 121;         // use # to denote private property

//   changeId(id) {
//     this.#id = id;
//   }
// }

// const user1 = new User();
// user1.changeId("xyz");
// console.log(user1);

//...................................................
