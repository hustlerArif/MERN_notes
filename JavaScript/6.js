//**iterating over Array */

// const arr=['bmw','skoda','maruti']
// // console.log(arr[0])

// // for(i=0;i<arr.length;i++)
// // {
// //     console.log(arr[i])
// // }

// // for(let x of arr){
// //     console.log(x)
// // }

// // const arr2=['auto','finance',arr]
// // console.log(arr2)

// const student={
//     name:'karan',
//     age:15,
//     id:'yy'
// }

// const arr3=['auto','finance',arr,student]
// // console.log(arr3)

// for(let name in arr3){   // gives index
//     console.log(name)
// }

// for(let index in arr3){   // gives list of array
//     console.log(arr3[index])
// }

//**Array reference */
// const arr1=['prakas','abhishek','kuldeep']
// const arr2=arr1
// console.log('arr1 -',arr1)
// console.log('arr2 -',arr2)

// arr2.push('rahul')

// // console.log('updated arr1 -',arr1)
// // console.log('updated arr2 -',arr2)
// arr1.pop('abhishek')

// console.log('updated arr1 -',arr1)
// console.log('updated arr2 -',arr2)

// to avoid copy of reference use Spread operator:

// const arr1=['pen','pencil','rubber']
// // const arr2=arr1
// const arr2=[...arr1]   // using spread operator

// arr1.push('sharpner')
// console.log(arr1)
// console.log(arr2)

// const str='geeksisbest'
// const str1=[...str]
// console.log(str1)

//................................................

//** Array method :push, concat */

// const arr1=['apple','banana']
// arr1.push('kiwi','melons','orange')
// console.log(arr1)

// const arr1=[1,2,3]
// const arr2=[4,5,6]
//   const arr3=arr1.concat(arr2)
//   console.log(arr3)

//** pop slice splice */

// const arr1=['html','css','javascript','reactJs']
// const removed= arr1.pop()  // pop method returns removing item
// console.log(arr1)
// console.log(`removed item is ${removed}`)

//**slice */

// slice returns shallow copy in case of Array | not change original string
// const arr1=['html','css','javascript','reactJs']
//   const x=arr1.slice(0,3)  // start from  0 index and include till 2
// console.log(x)
// console.log(arr1)

// use case slice: suppose user gives name of any string you need show first name as Capital letter :
// const userName='prakash'
//    const capitalize= userName[0].toUpperCase()
// //    console.log(capitalize)
//           const final =capitalize + userName.slice(1)
//           console.log(final)

// ** splice * :
// const arr1=['html','css','javascript','reactJs','vue.js','jquery']
//  arr1.splice(3,2)  // start from 3 ,delete 2 item , returns orginal array
//  console.log(arr1)

// const arr1=['html','css','javascript','reactJs','vue.js','jquery']
//  arr1.splice(2,0,'kotlin')  //at index2 insert kotlin ,0 is specified not to delete anything
//  console.log(arr1)

//.............................

//** arr.includes */
// const arr1=['html','css','javascript','reactJs','vue.js','jquery']
//     console.log(arr1.includes('htm'))
//     console.log(arr1.includes('html')) // each character should match and returns boolean value

// user sizes available in cart/array
//     const availableSizes=['S','M','L','XL','XXL','XXL']
//       const x= require("readline-sync");
//   const userSize =x.question('type your size here')
// const   isSizeavailable = availableSizes.includes(userSize)
// // console.log(found)
// if(isSizeavailable){
//     console.log('given size is available')
// }
// else{
//     console.log('given size is not available')
// }



// **sort*
// const arr1=['html','css','javascript','reactJs','vue.js','jquery']
// const x=arr1.sort()
// console.log(x)

// const arr2 = [4, 2, 7, 5, 9, 7, 8, 6, 1, 3, 22, 111, 11];
// console.log(arr2.sort())   // if you print this it will give random value , soln-> use sort defined callback fnc
// function sortInAscending(a,b){
//     return a-b
// }
// console.log(arr2.sort((a, b) => a - b)); // callback function already defined in sort // Ascending order bydefault
// console.log(arr2.sort((a, b) => b - a)); // descending order sorting


//** split and join */

// const str='madam'
// const str='madona'
// let result=str.split("")   // converts string into array of characters
//  console.log(result.reverse())  // reverses array

 //join : will convert array of characters into string
// //  console.log(result)
// console.log(result.join(""))
// console.log(result.join("|"))


//.....................................

//** Spread operator */ unpacking string/Array
// const arr=[1,2,3,4,5]
// const arr1=[6,7,8,9]
// const arr='prakash'
// const arr1='kumari'
// const x=...arr //cannot redeclare spread
// const arr3=[...arr,10,...arr1,11]
// console.log(arr3)
// console.log(typeof(arr3))


//** Destructring */

// //Array destructring
// let arr=['bmw','skoda']
//    const [a,b]=arr
// // console.log(a)
// console.log(a,b)

// //object destructring
// let details={
//     name:'prakhar',
//     age:15,
//     id:'eee'
// }
// const {name,age,id}=details
// console.log(name,age,id)


// const  [a,b,c,courses]=[1,2,3,['html','css','js']]
// console.log(a,b,c,courses)

// const  [ , , ,courses,a]=[1,2,3,['html','css','js'],5,6]  // if we dont want 1,2,3 then skip this using ,
// console.log(courses,a)


//rest parameter: all in one single value // rest must be last in destrcuting pattern

// const  [courses,...rest]=[['html','css','js'],1,2,3,4,5,6]
// console.log(courses,...rest)


// use case -swapping of numbers
// let a=5;
// let b=10;
//   [a,b]=[b,a];
//   console.log(a)
//   console.log(b)