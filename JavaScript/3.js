
// function display(){
//     console.log('hi Geeks!')
// }
// display();
// display();
// display(); // less code for repeated ones


// function display(name){
//     console.log(` hi ${name} welcome to GeeksForGeeks!`)
// }

// display()



// let sum=0;
// for(i=0;i<=10;i++){
//     sum=sum+i;
// }
// console.log(sum)



// ** Task-> calculate sum of min and max value:

// const value=calculate(0,10);

// function calculate(min,max){
//     let sum=0
//     for(i=min;i<=max;i++)
//     {
//         sum=sum+i;
//     }
//     return sum
// }
// console.log(value)




//** Anonymous function */
//  let x =function(){
//     console.log('hi Geeks')
// }
// x();
// console.log(typeof(x))


// x();
// var x =function(){    //x is not a function
//     console.log('hi Geeks')
// }


// x();
// let x =function(){    //cannot access x before initialization
//     console.log('hi Geeks')
// }


// Named function expression:
//  let x =function anyName(){
//     console.log('hi Geeks')
// }
// x();



// //** Return and undefined */
// function calculateSum(x,y){
//     return x+y
//     console.log('hi') // unreachable code after return
// }
// // console.log(calculateSum(12,15));

// const result=calculateSum(4,5)



// Arrow function:

// let calculateAddition=(x,y)=>{
//     return x+y
// }
// console.log(calculateAddition(1,2))


// let calculateAddition=(x,y)=> x+y
// console.log(calculateAddition(3,2))


// const sum=(x,y)=>{
//     if(x>y){
//         return x+y
//     }
//     else{
//         return x-y
//     }
// }

// console.log(sum(3,13))


const sum=(x,y)=> x>y ?  x+y : x-y

const result=sum(31,1)
console.log(result)

