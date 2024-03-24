// let startBtn=document.getElementById('btn-start')
// console.log(startBtn)

//In query selector use . for class/# for id
// let startBtn=document.querySelector('.start')
// console.log(startBtn)
// let startBtn=document.querySelector('#btn-start')
// console.log(startBtn)

//In query selectorAll always use class/ use to group elements into one
// let startBtn=document.querySelectorAll('.button')
// console.log(startBtn)
// console.log(startBtn[0])  // internally array of node list

// Adding event listener:
//it takes 3 argument(event,function,capturing&bubbling)
// change the text/hover/color/orientation etc

// let startButton=document.querySelector('.start')
// function showMsg(){
//     console.log('hello')
// }

// startButton.addEventListener('click',showMsg)  // passing function reference
//OR :
// startButton.addEventListener('click',()=>console.log('arrow function executing'))

//TIPS: write queryselector on top level of code...
// let startButton = document.querySelector(".start");
// function showMsg() {
//   // startButton.innerText='stop'
//   if (startButton.innerText === "start") {
//     startButton.innerText = "stop";
//     // startButton.innerHTML='<span>Lets Begin </span>' //you can add innerHTML also,adding here span tag
//   } else {
//     startButton.innerText = "start";
//   }
// }

// startButton.addEventListener("click", showMsg);

//increase count
// let count=0
// let countButton = document.querySelector(".count");

// countButton.addEventListener("click", ()=>{
//     count++
//     console.log(count)
// });

// change the color:

// let stopBtn =document.querySelector('.stop')

// stopBtn.addEventListener('click',()=>{
//     // stopBtn.classList.add('btn-red') // defined in css/not HTML
//     stopBtn.classList.toggle('btn-red') // adding and removing using toggle
// })
// //you can add toggle to this color

// document.body.classList.add('body-chg')   // change body color

//Part2
//input element/textarea - same logic
// let input = document.querySelector(".input");

// // input.addEventListener("change", () => { // when key is clicked other side
// //   console.log(input.value);
// // });

// input.addEventListener("input", () => {  // continous take values
//   console.log(input.value);
// });

// input.addEventListener("keyup", () => {
//   console.log(input.value);
// });

// input.addEventListener("focus", () => {
//   console.log(input.value);
// });

//Part3:
//Mouse events:

//  let input = document.querySelector(".input");
//  input.addEventListener('mousedown',(event)=>{  // gives no of clicks from mouse 0-right/2-left/1-scroll
//     console.log(event.button)
//  })

//  input.addEventListener('mousedown',(event)=>{
// //    xCord=event.pageX    //whole page // gives cordinates when clicked
// //    yCord=event.pageY
//    xCord=event.clientX   //visible area
//    yCord=event.clientY
//    console.log({xCord},{yCord})
//  })

//  document.body.addEventListener('mousedown',(event)=>{  // cordinates whole body
//    let xCord=event.clientX
//   let  yCord=event.clientY
//    console.log({xCord},{yCord})
//  })

//Bubbling & Capturing
//event listener takes 3 argument(event,function,capturing&bubbling)
// by default ,bubbling is set to false/boolean value
// it bubbles up(bottom to top)/execute upper cicruit elements also...

//capturing- reverse of bubbling - top to bottom
// if both set then, does both/1st capture, then bubble

//event delegation/uses concept bubbling/capturing

//  let form =document.querySelector('#form')
//  let div =document.querySelector('#div')
//  let para =document.querySelector('#para')

//  para.addEventListener('click',()=>{
//     alert('In para tag')
//  })
//  div.addEventListener('click',()=>{
//     alert('In Div tag')
//  })
//  form.addEventListener('click',()=>{
//     alert('In form tag')
//  })
//  para.addEventListener('click',()=>{
//     alert('In para tag')
//  },true)
//  div.addEventListener('click',()=>{
//     alert('In Div tag')
//  },true)
//  form.addEventListener('click',()=>{
//     alert('In form tag')
//  },true)

// Event delegation
//if there are 10-100 button then it can be controlled by one event listener

// let btn =document.querySelector('#btn-container')

// btn.addEventListener('click',(event)=>{
//    // console.log(event.target)  // to select specific button clicked
//    // console.log(event.target.innerText)   // select text of that button
// })

// btn.addEventListener('click',(event)=>{

//   let btnText=event.target.innerText
//   if(btnText==='Red'){
//    event.target.classList.toggle('btn-red')
//   }
// //   if(btnText==='Blue'){
// //    event.target.classList.toggle('btn-blue')
// //   }

// })




// creating HTML using JS

let parentElement = document.getElementById("parent-container");
let cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");

// creating card img element
let cardImageElement = document.createElement("img");
cardImageElement.classList.add("image");

//set attribute of image
cardImageElement.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGwlMjBpbWFnZSUyMGZvciUyMGFydGljbGVzfGVufDB8fDB8fHww"
);

cardImageElement.setAttribute("alt", "no-img");


// this img tag is child of card-container class
// to create DOM tree/add HTML // add the child using appendChild

cardContainer.appendChild(cardImageElement);


//adding text:
let spanText = document.createElement("span");
spanText.innerText =
  "The jounery of thousand miles begins with a single step- by Anonymous";
cardContainer.appendChild(spanText);


//also add cardContainer to parent element

parentElement.appendChild(cardContainer); // to make parent card visible



//Async and defer: both used in script tag/in head | for performance , otherwise in html/body also you can use script at bottom , no problem
//  <script defer src="./9.js"></script> loads the file+ loads HTML
//  <script async src="./9.js"></script> loads the file+ loads HTML(but do not wait for complete), it executes js file meanwhile

