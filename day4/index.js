// Functions & Scope: Function declarations, arrow functions

// we have two type of functions or 3 you can say in JS
// 1. Function declarations
// 2. Function expressions
// 3. Arrow functions

// Function declarations syntax is
// function functionName(parameters) {}

// Function expressions syntax is
// const functionName = function(parameters) {}

// Arrow functions syntax is
// const functionName = (parameters) => {}

// // Function declarations
// function funName(){
//     // here you can write anything
//     // but it will only run when you call this function
// }
// // this way you can call the function
// funName()

// function idk(num){
//     if (num%2 == 0){
//         console.log('even')
//     }
//     else{
//         console.log('odd')
//     }
// }

// idk(12)
// idk(32);idk(1);idk(123);idk(1);idk(33)

// // Function expressions

// const personInfo = function (firstName, middleName, lastName) {
//   // return 'My name is '+firstName+' '+middleName+' '+lastName
//   return `My name is ${2 + 2} ${middleName.toUpperCase()} ${lastName}`
// }

// let a=personInfo('Ali', 'Ahmed', 'Khan')
// let b= a
// let c= b
// console.log(a)
// console.log(b)
// console.log(c)

// rest parameter
// const sum = function (...args) {}
// const listOfItmes = function (...args, a, b) { dont do this

// }
// const listOfItmes = function (a,b,c,...args)  {
//     console.log(a,typeof a)
//     console.log(b , typeof b)
//     console.log(c, typeof c)
//     console.log(args, typeof args)

// }
// listOfItmes(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15)

// Arrow functions
// function funName(){
//     console.log('hello')
// }
// const funName =function (){
//     console.log('hello')
// }
// Arrow functions

// const funName =  () => {
//   console.log('hello')
// }
// const funName =  () => ( 2+2)
// console.log(funName())
// const funName =  () => {
//     return 2+2
// }

// console.log(funName())

// Positive or Negative number
// function positive_or_negative(n){
//     if (n<0){
//         return 'negative'
//     }else {
//         return 'positive'
//     }
// }
// console.log(positive_or_negative(-0))

// let Sum_of_First_N = function (n) {
//   let i = 0
//   let sum = 0
//   while (i <= n) {
//     sum += i
//     i++
//   }
//   return sum
// }

// console.log(Sum_of_First_N(10))



// array