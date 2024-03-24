// Polyfill: a piece of JS code used to provide modern functionality on older browsers that do not support it

// Polyfills for Map:

// const arr = [1, 2, 3, 4, 5];
// // const sqArr = arr.map((number) => number ** 2);
// // console.log(sqArr);

// //1)
// // let tempArr=[]
// // for(let i=0;i<arr.length;i++){
// //    tempArr.push(arr[i]**2)
// // }
// // console.log(tempArr)

// //2)
// function getSquareNum(number) {
//   return number ** 2;
// }
// // const sqArr = arr.map(getSquareNum);
// // console.log(sqArr);

// Array.prototype.myMap = function (callback) {
//   let tempArr = [];
//   for (let i = 0; i < this.length; i++) {
//     tempArr.push(callback(this[i], i, this));
//   }
//   return tempArr;
// };

// const sqArr = arr.myMap(getSquareNum);
// console.log(sqArr);

// final o/p:.....................................

// const arr = [1, 2, 3, 4, 5];

// function getSquareNum(number) {
//   return number ** 2;
// }

// Array.prototype.myMap = function (callback) {
//   let tempArr = [];
//   for (let i = 0; i < this.length; i++) {
//     tempArr.push(callback(this[i], i, this));  // parameter of Map function (value,index,array)
//   }
//   return tempArr;
// };

// const sqArr = arr.myMap(getSquareNum);
// console.log(sqArr);

//.................................................

// Polyfill for Filter:

// const arr = [1, 2, 3, 4, 5, 6, 7];

// //   const filtArr = arr.filter(num=> num>3)
// //   console.log(filtArr)

// function getFilteredArray(num) {
//   return num > 3;
// }

// // const filtArr = arr.filter(getFilteredArray);
// // console.log(filtArr);

// // const tempArr = [];
// // for (i = 0; i < arr.length; i++) {
// //   if (arr[i] > 3) {
// //     tempArr.push(arr[i]);
// //   }
// // }
// // console.log(tempArr);

// Array.prototype.myFilter = function (callback) {
//   const tempArr = [];
//   for (i = 0; i < this.length; i++) {
//     if (callback(this[i])) {
//       tempArr.push(this[i]);
//     }
//   }
//   return tempArr;
// };

// const filtArr = arr.myFilter(getFilteredArray);
// console.log(filtArr);

//Final O/p Filter:.................................................
// const arr = [1, 2, 3, 4, 5, 6, 7];

// function getFilteredArray(num) {
//   return num > 3;
// }

// Array.prototype.myFilter = function (callback) {
//   const tempArr = [];
//   for (i = 0; i < this.length; i++) {
//     if (callback(this[i])) {  // getFilteredArray(1)
//       tempArr.push(this[i]);
//     }
//   }
//   return tempArr;
// };

// const filtArr = arr.myFilter(getFilteredArray);
// console.log(filtArr);

//................//././//./................................

// Polyfills for Reduce:

// const arr = [1, 2, 3, 4, 5];

// // const reducedArr = arr.reduce((x, y) => x + y);
// // console.log(reducedArr);

// function getReducedArr(acc, cur) {
//   return acc + cur;
// }
// // const reducedArr = arr.reduce(getReducedArr);
// // console.log(reducedArr);

// // const tempArr=[]
// // let sum = 0;
// // for (i = 0; i < arr.length; i++) {
// //   sum = sum + arr[i];
// //   // tempArr.push(sum)
// // }
// // console.log(sum);

// Array.prototype.myReduce = function (callback, initialValue) {
//   let acc = initialValue ? initialValue : this[0]; //acc=1
//   for (i = initialValue ? 0 : 1; i < this.length; i++) { // this[2]=3= cur
//     // cur= this[i];
//     acc = callback.call(this, acc, this[i], this);
//   }
//   return acc;
// };
// const reducedArr = arr.myReduce(getReducedArr,0);
// console.log(reducedArr);
//...........................................................

// Final o/p reduce:
const arr = [1, 2, 3, 4, 5];
function getReducedArr(acc, cur) {
    return acc + cur;
  }

  Array.prototype.myReduce = function (callback, initialValue) {
    let acc = initialValue ? initialValue : this[0]; //acc=1
    for (i = initialValue ? 0 : 1; i < this.length; i++) { // this[2]=3= cur
      // cur= this[i];
      acc = callback.call(this, acc, this[i], this);
    }
    return acc;
  };
  const reducedArr = arr.myReduce(getReducedArr,0);
  console.log(reducedArr);

//................................................................