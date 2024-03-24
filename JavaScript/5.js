/**Iterator over strings */
// for(let variable of string_variable){}

// const comment='Mentor at GeeksforGeeks'
// for(let char of comment){
//     console.log(char)
// }

//Q : Print values till a character if found/ if found then stop execution  : using let of loop
// const comment = "Mentor at GeeksforGeeks";
// for (let char of comment) {
//   if (char === "s") {
//     break;          // if you find s then stop
//   } else {
//     console.log(char);   // if fails for M then it goes to else and then print M

//   }
// }

// Q: how many times e occurs in below string?

// const comment = "Mentor at GeeksforGeeks";
// count=0;
// for(let char of comment){

//     if(char ==='e'){
//         count=count+1;
//     }
// }
// console.log(count)

// const comment1='teacher at GeeksForGeeks';

// for(i=0;i<comment1.length;i++){
//     console.log(comment1[i])
// }

//Q : Print values till a character if found/ if found then stop execution : using for loop square braces

// const comment1='teacher at GeeksForGeeks';

// for(i=0;i<comment1.length;i++){
//     if(comment1[i] === 'G'){
//         break
//     }
//     else{
//         console.log(comment1[i])
//     }
// }

//** charAt , charCodeAt */

// const str='Marvel studio presents'
// console.log(str.charAt(1))
// console.log(str.charCodeAt(0))



//** index of(search,postionfromWheretoStartSearching) */

// const str='I am a Marvel ent studio presents a geeks'
// console.log(str.indexOf('a',3))
// console.log(str.indexOf('z')) // if not found while searching then it returns -1

//Q: write a function which returns index based on arguments passed
// function findCharacter(text,char){
//     const value=text.indexOf(char)
//     return value;
// }

//    const x= findCharacter('I am a good person','g')
//     console.log(x)

//Q: write a function which prints whether passed string found or not in the given string set
// function findCharacter(text, char) {
//   const index = text.indexOf(char);
//   if (index === -1) {
//     console.log("character not found");
//   } else {
//     console.log("character found in given string at below index");
//   }
//   return index
// }

// const x = findCharacter("prakas@gmail.com", "@");
// console.log(x);



//**includes */

// const str1='i Love to code in morning time'
// // console.log(str1.includes('code'))
// if(str1.includes('code')){
//     console.log('this string is present')
// }

//Q: find vowels in below string
// const x='xaiesowu'
// const vowel='aeiou'
// for(let char of x){
//     if(vowel.includes(char)){
//         console.log(`${char} is a vowel`)
//     }
// }



//**substring */
// const str2='md arif is using good technology'
// console.log(str2.substring(0,16)+'...')

 
//**trim */
const str3='   space will be cut    '
console.log(str3.trim().substring(0,6))








// const str ='geekShow'
// // console.log(str)

// console.log(str.includes('S'))
// console.log(str.indexOf('S'))
// console.log(str.startsWith('g'))
// console.log(str.slice(0,3))
// console.log(str.substring)
