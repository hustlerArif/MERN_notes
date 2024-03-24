// comparision operators //
// let a=10;
// let b=10;
// if(a===b){
//     console.log('correct')
// }
// else{
//      console.log('not correct')
// }
// console.log(typeof(b))
// console.log(typeof(a))

// console.log(20>20)
// console.log(20<20)
// console.log(20>=20)
// console.log(20<=20)

// console.log('glow' < 'glowing')

// console.log(null==undefined)
// console.log(null===undefined)

//...........................................//

// Condtional statemet //

// let time= new Date().getHours();
// if(time<10){
//     console.log('good Morning')
// }
// else if(time<20){
//     console.log('good Afternooon')
// }
// else{
//     console.log('good evening')
// }

// const isLoggedIn=true;
// if(isLoggedIn){
//     console.log('welcome User ...')
// }

//   const x= require("readline-sync");
//   const userAge =x.question('type your age here')

//   if(userAge > 16){
//     console.log('you are Adult')
//   }else{
//     console.log('you are not Adult')
//   }

// const x= require("readline-sync");
// const num =Number(x.question('type your number here'));

// const divByThree= num % 3;
// const divByFive= num % 5;

// if(divByThree ===0){
//     console.log('divisible by 3')
// }else if(divByFive ===0){
//     console.log('divisible by 5')
// }

// if(divByThree ===0 && divByFive ===0){
//     console.log('divisible by 3 and 5 both')
// }
// else if(divByThree ===0 || divByFive ===0){
//     console.log('divisible by 3 OR 5 ')
// }

// const x = require("readline-sync");
// const num = Number(x.question("type your number here"));
// // console.log(num);

// if (num % 2 === 0) {
//   console.log(`${num} is even`);
//   if (num % 4 === 0) {
//     console.log(`${num} is divisible by 4`);
//   } else {
//     console.log(`${num} is not divisible by 4`);
//   }
// } else {
//   console.log(`${num} is odd`);
// }

// Ternary operator

// condition ? trueExpression : falseExpression

// let message=(5>21)?'hi':'bye';
// console.log(message)

// const totalMarksScored = 84;

// const x = totalMarksScored<40 ? 'you need to work hard':'you cleared the exam'
// console.log(x);

//multiple if else conditon using ternary operator:
// const result =
//   totalMarksScored < 40
//     ? "work hard"
//     : totalMarksScored < 60
//     ? "C grade"
//     : totalMarksScored < 75
//     ? "B grade"
//     : totalMarksScored < 90
//     ? "A grade"
//     : "genius";
// console.log(result);

// greater of three number using Logical AND operator:

//  const x = require("readline-sync");

// const x1=Number(x.question("type your first number"));
// const x2=Number(x.question("type your second number"));
// const x3=Number(x.question("type your third number"));

// if(x1>x2 && x1>x3){
//   console.log(`${x1} is greater`)
// }
// else if(x2>x3 && x2>x1){
//   console.log(`${x2} is greater`)
// }
// else{
//   console.log(`${x3} is greater`)
// }

// const x=false;
// if(!x){
//   console.log('correct')
// }
// else{
//   console.log('not correct')
// }

// const firstName=''
// const middleName='Anna'
// console.log(firstName || middleName)

// // console.log(Boolean("sometext"))
// // console.log(Boolean("")) // empty string evaluates to false
// console.log(Boolean(" ")) // not a empty string , but having a single space evaluates to True
// console.log(Boolean(0))
// console.log(Boolean(null))
// console.log(Boolean(undefined))

// let userName=null;
// console.log(userName ?? 'text' )

// for(i=0;i<=10;i++){
//   console.log(i)
// }
// let i=0;
// while(i<=100){
//   console.log(i)
//   i++;
// }

// for (i = 0; i <= 10; i++) {
//   console.log(i);
//   for (j = 11; j <= 20; j++) {
//     console.log(j);
//   }
// }

// const name='Geeksdddgreatlive';

// for(i=0;i<name.length;i++){
//   console.log(name.charAt(i))
// }

// console.log(name[i])


// for(i=0;i<name.length;i++){
//   console.log(name[i])
// }


// while(false){ // if true then infinite loop
//   console.log('i love you')
// }

// try{
//    someFunction();
// }
// catch(x){
//     console.log(x.message)
//     console.log(x.stack)
// }
// finally{
//     console.log('this will execute always')
// }



