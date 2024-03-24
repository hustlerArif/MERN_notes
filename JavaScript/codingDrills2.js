// 1) Arrange the words in the sentence in ascending order of their length
// Input: gfg is a comp science learning plaform
// Output: a is gfg comp science learning plaform

//solution:(inbuilt methods)
// const str = "gfg is a comp science learning plaform";
// const str = "let a king is preserver by some TOP counries of the damascusking";

// function sortTextByWordLength(str) {
//   const sortArr = str.split(" ");
//   //   return sortArr
//   const SortedArray = sortArr.sort((a, b) => a.length - b.length);
//   return SortedArray.join(" ");

// }
// const result = sortTextByWordLength(str);
// console.log(result);

//using for loop:

///.....................................

//2) Reverse word of string without changing their order :
// INput: react is library
//o/p: tcear si yrarbil

// const str = "react is a library";

// function reversedWord(str) {
//   const arrWord = str.split(" ");
//   //    console.log(arrWord)
//   revWord = arrWord.map((word) => word.split("").reverse().join(""));
//   // console.log(revWord)
//   return revWord.join(" ");
// }

// const result = reversedWord(str);
// console.log(result);

//...........................................

//3)
const arr = [1, 2, 3, 4, 5, 2, 3, 7, 6, 3, 3, 2, 1, 4, 5, 5, 5, 5, 5, 5];
function getNumberWithMaxFreq(arr) {
  let maxCount = 0;

  const numberFeqObj = arr.reduce(
    (acc, cur) =>
      cur in acc ? { ...acc, [cur]: acc[cur] + 1 } : { ...acc, [cur]: 1 },
    {}
  );
  //   return numberFeqObj;  // gives no of occurence

  const arrOfKeyValues = Object.entries(numberFeqObj);
  //    console.log(arrOfKeyValues)
  for (let [key, value] of arrOfKeyValues) {
    if (maxCount < value) {
      maxCount = value;
    }
  }
  return maxCount; // return max occurence
}

const result = getNumberWithMaxFreq(arr);
console.log(result);
