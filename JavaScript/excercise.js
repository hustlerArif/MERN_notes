// if excercises | use in non-repetitive/single time execution task

// program that reads three string and print smallest string

// const  x= require('readline-sync')
//       const  a =x.question('enter 1st String- \n  ').length
//       const  b =x.question('enter 2nd String- \n  ').length
//       const  c =x.question('enter 3rd String- \n  ').length
//       // console.log(`string entered are ${a} ${b} ${c}`)
//       if(a<b && a<c){
//          console.log('1st string is smaller among all')
//       }
//       else if(b<c && b<a)
//    {
//       console.log('2nd string is smaller among all')
//    }
//    else if(c<a && c<b) {
//       console.log('3rd string is smaller among all')
//    }
//    else{
//       console.log('found 2 or more string of same length')
//    }

// Repetition task - use loop
//for loop excercises --***********________-------------

//star pattern

// left traingle pattern

//method 1: using inbuilt func repeat
// const symbol='*'
// for(i=1;i<=5;i++){
//    console.log(symbol.repeat(i))
// }

//method2: using nested for loop
// let n=5
// let str=''
// for(i=0;i<n;i++)
// {
//    for(j=0;j<=i;j++)
//    {
//       str+='*'
//    }
//    str+='\n'

// }
// console.log(str)

//downward traingle
// let n=5
// let str=''
// for(i=0;i<n;i++)
// {
//    for(j=n;j>i;j--)
//    {
//       str+='*'
//    }
//    str+='\n'

// }
// console.log(str)

//Right Pascal Star Pattern ****
// let n = 5;
// let str = "";

//   for (i = 0; i < n; i++) {
//     for (j = 0; j <i; j++) {
//       str += "*";
//     }
//     str += "\n";
//   }
//   for (i = 0; i < n; i++) {
//     for (j = n; j > i; j--) {
//       str += "*";
//     }
//     str += "\n";
//   }

// console.log(str);

// square pattern
// let n = 5;
// let string = "";
// for (i = 0; i < n; i++) {
//   for (j = 0; j < n; j++) {
//     string = string + "A";
//   }
//   string = string + "\n";
// }
// console.log(string);

//count the num of string  | on every iteration increase value of count
// count=0
// str='Akashsdfdfd'
// for(i=0;i<str.length;i++){
//    count++
// }
// console.log(count)

// find even/odd
//  const x=require('readline-sync')
// const n =x.question('enter range of number to check even/odd')

// const n=10
// if(n%2==0){
//    console.log('even')
// }
// else{
//    console.log('odd')
// }

//given range of numbers, find even/odd
// for(i=0;i<10;i++)
// {

// if(i%2==0){
//    console.log(`${i} is even`)
// }
// else{
//   console.log(`${i} is odd`)
// }

// }

// // find vowel in a string
// const str ='i love gfg aeu'
// const vowel='aeiou'
// for(i=0;i<str.length;i++){

//    if(vowel.includes(str[i])){
//       console.log(`${str[i]} is a vowel`)
//    }
//    else{
//       console.log(`${str[i]} is not a vowel`)
//    }
// }

// while loop excercise *******--------------------------------------------____________

// keep asking the user for number <50 untill you get it

//  let x=require('readline-sync')
// let n =x.question('enter number <50 -\n')

// while(n>=50){
//    n =x.question('enter number <50 -')
// }
// console.log('number accepted')



// function excercise ---**************-------------__________

//sum of all numbers from m to n /user provided

// let x = require("readline-sync");
// let m = Number(x.question("Enter first number- "));
// let n = Number(x.question("enter second number - "));

// let count = 0;

// function calculateSum(m, n) {
//   for (i = m; i <= n; i++) {
//     count += i;
//   }
//   return count;
// }
// const result = calculateSum(m,n);
// console.log(`sum of no from ${m} to ${n}  is ${result}`);
