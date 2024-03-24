/**palindrome string */

//using method:
// let readlineSync = require("readline-sync");
// let str = readlineSync.question("enter string to check palindrome-  ");
// // str='madam'
// // const x=str.split("")
// // const y=x.reverse()
// //  const z=y.join("")        // use single line
// const z = str.split("").reverse().join("");

// if (str === z) {
//   console.log("palindrome");
// } else {
//   console.log("not palindrome");
// }

// using for loop
// str = "prakash";
// revStr = "";

// function palindromeCheck(str) {
//   for (i = str.length - 1; i >= 0; i--) {
//     revStr += str[i];
//   }
//   return revStr;
// }

// const result = palindromeCheck(str);

// if (str === result) {
//   console.log("palindrome string");
// } else {
//   console.log("not palindrome string");
// }

// remove vowels from string
// str='iTHOI love geeks for geeks'
// vowels='aeiou'
// remVowel=''
// for(i=0;i<str.length;i++)
// {
//     if(!(vowels.includes(str[i].toLowerCase()))){
//         // console.log(str[i])
//         remVowel+=str[i]
//     }
//     // else{
//     //     console.log(str[i])
//     // }
// }
// console.log(remVowel)

//mask the last 4 character with #

// str='123456789'
// let reduce=str.slice(0,str.length-4)
//  let maskChar ='#'.repeat(4)
//  result=reduce+maskChar
//  console.log(result)

//method 2 : using for loop and string.repeat
// str = "123456789";
// newStr = "";
// for (i = 0; i < str.length - 4; i++) {
//   newStr += str[i];
// }
// // console.log(newStr)
// let maskChar = "#".repeat(4);

// console.log(newStr + maskChar);

// Encoding & decoding characters

// str='cdef'
// let encodedValue = encodeString(str)
// let decodedValue =decodeString(encodedValue)

// function encodeString(str){
//     newStr=''
//     currentPos=0
//     newPos=0
//    for(i=0;i<=str.length-1;i++)
//    {
//      currentPos=str.charCodeAt(i)
//      newPos=currentPos+2
//      newStr+= String.fromCharCode(newPos)
//    }
// return newStr
// // console.log(newStr)
// }

// function decodeString(str){

//     newStr=''
//     currentPos=0
//     newPos=0
//    for(i=0;i<=str.length-1;i++)
//    {
//      currentPos=str.charCodeAt(i)
//      newPos=currentPos-2
//      newStr+= String.fromCharCode(newPos)

//    }
// //    console.log(newStr)
// return newStr
// }

// console.log(`After encoding the new value of ${str} is ${encodedValue}`)
// console.log(`After decoding the  value of ${str} is ${decodedValue}`)

//......../////////////////...................

// sub string : all possible combination of substring
// let str='prakash_sakari'

// for single iteration with starting P only combination: use single for loop
// for(i=0;i<str.length;i++)
// {
//     // console.log(str.substring(0,i+1))
//     console.log(str.slice(0,i+1))
// }

// for multiple iteration 0, i+1: use nested for loop
// for(i=0;i<str.length;i++)
// {
//   for(j=i+1;j<=str.length;j++)
//   {
//       console.log(str.slice(i,j))
//   }
// }

// event to odd & vice versa

// const arr=[1,2,3,4,5,6,7]
//  const result =arr.map(num=> num%2===0 ? num-1 : num+1)
//  console.log(result)

// sum of numbers less than 40

//method1
//  let arr=[10,17,22,55,88,99,33,22,45,31,12]
//  const result =arr.filter(function(num){
//  return num<40
//  })
// //  console.log(result)

//  const result1=result.reduce((num,item)=>num+item,0)
//  console.log(result1)

//method 2 :
// let arr1 = [10, 17, 22, 55, 88, 99, 33, 22, 45, 31, 12];
// const result2 = arr1.reduce((num, item) => (item < 40 ? num + item : num,0));
// console.log(result2);

// Return array of names from an object
// name of employees with exprience >3
// const employees=[
//   {
//     name:'prakash',
//     numOfYears:3
//   },
//   {
//     name:'chinmoy',
//     numOfYears:5
//   },
//   {
//     name:'amit',
//     numOfYears:2
//   },
//   {
//     name:'kirti',
//     numOfYears:6
//   },
//   {
//     name:'Arif',
//     numOfYears:2
//   }
// ]

// // console.log(employees[0].numOfYears)

// for(i=0;i<employees.length;i++)
// {
//  let exp=employees[i].numOfYears
//   // console.log(employees[i].name)
//   if(exp>3){
//     console.log(`names of employees with experience greater than 3 are ${employees[i].name}`)
//   }
// }

//method 2 : using higher order function:
// DIY (Hint-video)

// Generate an object with sum of even and odd numbers from an Array of numbers
//  for below array, write a function that returns an object with sum of even and odd numbers
/**arr =[1,2,3,4,5]  o/p-> {even:6, odd:9} */

// let arr=[1,2,3,4,5,6]
//  let res1 =arr.filter(function(num){
//     if(num%2===0){
//       return num
//     }
//   })
//   // console.log(res1)
//   let res2 =arr.filter(num=>!(num%2===0)?num:0)
//   // console.log(res2)

//   const even=res1.reduce((num,item)=>num+item)
//   const odd=res2.reduce((num,item)=>num+item)
//   console.log({even},{odd})  // FYI its not a object so try method2

//method2
//DIY (Hint-video)



// Find Average age of family members for below Array of object
const familyMembers = [
  {
    name: "prakash",
    age: 10,
  },
  {
    name: "Amit",
    age: 10,
  },
  {
    name: "Sahil",
    age: 10,
  },
];

//method1: using for loop
// console.log(familyMembers[0].age)
// console.log(familyMembers[1].age)

// let sum=0
// for(i=0;i<familyMembers.length;i++){
//    sum+=familyMembers[i].age
// }
// // console.log(sum)
// const avg=sum/familyMembers.length
// console.log(avg)

//method 2 : using for in
// In case of object ,use for loop / for(let key in obj) loop to access keys/values , beacuse HOF cant used in objects
// for(let key in familyMembers){
//   sum+=familyMembers[key].age
// }
// console.log(sum/familyMembers.length)


// method3 : using reduce(H.O.F)
// let totalAge = familyMembers.reduce((acc,cur)=>acc+cur.age,0)
// console.log(totalAge/familyMembers.length)



// Count distinct(separate) element

//method1 : using for loop
const arr=['a','b','a','b','c']
// console.log(arr[1])

let a=0
let b=0
let c=0
for(i=0;i<arr.length;i++){
  if(arr[i]==='a'){
    a++
  }
}
for(i=0;i<arr.length;i++){
  if(arr[i]==='b'){
    b++
  }
}
for(i=0;i<arr.length;i++){
  if(arr[i]==='c'){
    c++
  }
}

console.log({a})
console.log({b})
console.log({c})


//method2: using reduce + for in + spread operator ...
//DIY (Hint:video)