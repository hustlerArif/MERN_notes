//   const x=require('readline-sync')
//  const ask1 =Number(x.question('enter your marks1-  '))
//  const ask2 =Number(x.question('enter your marks2-  '))
//  console.log('sum of yours total marks is ',(ask1+ask2))

// userName='karan'
// console.log(`username provided is ${userName}`)  //template literals/backtics

// x="10"
// y="5"
// console.log(x+y)  //cocatenation  
// console.log(x-y)
// console.log(x*y)
// console.log(x%y)

// const result=false
// if(result){
//     console.log('hi')
// }
// else{
//     console.log('bye')
// }

//  const result1  =(3<1)?'hi':'bye'
// console.log(result1)

// totalMarksScored=40
// x=totalMarksScored<50?'work hard':'doing good'
// console.log(x)

// userName=undefined
// userName=null
// console.log(userName ?? 'anyText')   //Nullish coalescing


// const x =function (){
    
//     // console.log('great')
//     return 'great'

// }
// console.log(x())



// display=()=>'hi'
// console.log(display())

// // const sum=(x,y)=> x+y
// // console.log(sum(1,2))

// z=10
// function calculateSum(x,y){
//     return x+y
// }
// x=calculateSum(2,3)
// console.log(x)

// console.log(age)
// var age=20

// var let const are varaible of JS
// Number/string/boolean/null/undefined/ object/array  are data types of JS

// console.log(showName())
// function showName(){
//     return 'hi'
// }


//hoisting is done for all 
// var function -> 
// let const -> cannot access variable before declaration \\ are hoistd but in tdz

//iterting over string   str[i], for(let of)
// str='extravanga'
// for(i=0;i<str.length;i++){
//     console.log(str[i])

// }

// for(let result of str){
//     console.log(result)
// }

// console.log(str.charAt(0))
// console.log(str.indexOf('t',4))
// console.log(str.substring(0,4),'...')


// arr1=['bmw','suzuki','skoda']
// for(i=0;i<arr1.length;i++){
//     console.log(arr1[i])
// }

// for(let x of arr1)
// {
//     console.log(x)
// }

// arr2=arr1
// arr2=[...arr1]
// console.log(arr1)
// console.log(arr2)
// arr1.push('mercedez')
// console.log(arr1)
// console.log(arr2)

// arr2.push('a','b')
// console.log(arr2)

// console.log(arr2.slice(0,2))
// console.log(arr2)

// arr2.splice(1,1)
// console.log(arr2)

//Array sorting
// const arr=[1,12,3,24,5,6]

// arr.sort((a,b)=>b-a)
// console.log(arr)


// const str1='prakash'
//    console.log(...str1)  //expanding string
//    console.log([...str1])  //array of characters


//    arr1=['bmw','suzuki','skoda']
//    arr2=['mercedez','suzuki','skoda']
// console.log([...arr1,...arr2])

// arr2=['mercedez','suzuki','skoda']
// const [a,...rest]=arr2  //destructring  |use varaible name must => expression
// console.log(a)
// console.log(rest)

  
// const obj1={
//     name:'prakash',
//     age:49
// }
// console.log(obj.name)
// console.log(obj.age)
// console.log(obj['name'])
// console.log(obj['age'])

// obj2={...obj1}  // deep copy in object using spread
// obj1.name='akash'
// console.log(obj1)
// console.log(obj2)


// const obj1={
//     name:'prakash',
//     age:49,
//     display(){
//         return 'hi'
//     },
//   x:function(){return 'bye'},

//   address:{
//     city:'Mumbai'
//     // state:'Maharashtra'
//   }
// }
// console.log(obj1.display())
// console.log(obj1.x())
// console.log(obj1.address?.city)  //optional chaining


//  const {name,age,...rest}=obj1  // object destructring - use varaible name must => expression
// console.log(name)
// console.log(age)
// console.log(rest)

// let {address:{city}}=obj1  //use varaible name must => expression
// console.log(city)

// const {name:userName}=obj1   //use varaible name must => expression
// console.log(userName)

// const keys = Object.keys(obj1)  // Object constructor
// const values = Object.values(obj1)
// console.log(keys)
// console.log(values)



// const obj1={
//     name:'prakash',
//     age:49
// }
// const obj2={
//     name:'Amit',
//     age:44
// }
// const obj3={
//     name:'Sharan',
//     age:33
// }

// function sayHi(){
//    console.log(this.name)
// }

// sayHi.call(obj1)
// sayHi.call(obj2)
// sayHi.call(obj3)

//FCF : assign as varaible /passed as argument / return from another function(HOF)

// function wrapper(){  //FCF
//    return 'inner function'
// }

// function greetMsg(inner){  //HOF
//     console.log(inner())
// }

// greetMsg(wrapper)

// function greetMsg(){
//  return   function wrapper(){
//         console.log('hi')
//     }
//     // return wrapper
// }
//  greetMsg()()

// temp array/loops/return


// let arr=[10,2,3,4,5]  //expression


// const result=arr.filter(function (item){
//     return item>=2
// })
// console.log(result)

// const result=arr.reduce(function (sum,item){
//     return sum=sum+item
// })
// console.log(result)



// DOM starts here:
//    let btn =document.querySelector('#btn-start')
// let btn=document.querySelectorAll('.buttons')

// console.log(btn[0])
// console.log(btn[1])
//     // btn.addEventListener('click',()=>{
//     //     // btn.innerText='begin'
//     //     console.log(btn.innerText)
//     // })


// function showMsg(){
//     if(startBtn.innerText==='stop'){
//         startBtn.innerText='start'
//     }
//     else{
//         startBtn.innerText='stop'
//     }
// }

//    let startBtn =document.querySelector('.start')
// startBtn.addEventListener('click',()=>{
//     startBtn.classList.toggle('btn-red')
//     // console.log('hu')
// })

// document.body.classList.add('btn-red')

//   let selInp  =document.querySelector('.input')
//     selInp.addEventListener('change',()=>{
//         console.log(selInp.value)
//     })


//  let btn  = document.querySelector('.parent-container')

//  btn.addEventListener('click',(event)=>{
//     // console.log(event.target)
//     // console.log(event.target.innerText)
//      btnText=event.target.innerText

//     if(btnText==='Red'){
//         event.target.classList.toggle('btn-red')
//     }

//     if(btnText==='Yellow'){
//         event.target.classList.toggle('btn-yellow')
//     }
//  })


// let parentElement=document.getElementById('parent-container')

// let pTag= document.createElement('p')
// pTag.innerText='click below to submit'
  
// let btn = document.createElement('button')
//     btn.innerText='Submit'

//     // adding class to button
//     btn.classList.add('red')


// parentElement.appendChild(pTag)
// parentElement.appendChild(btn)


