"use strict";

// to check input is a string or not
// var str = prompt(
//   "To check whether input is a string or not, Enter the string!!"
// );
// if (typeof str === "string") {
//   console.log(`Entered string ${str} is a string`);
// } else {
//   console.log(`Entered string ${str} is not a string`);
// }

//method- 2
// var str = prompt(
//   "To check whether input is a string or not, Enter the string!!"
// );
// if (Object.prototype.toString.call(str) === '[object String]') {
//   console.log(`Entered string ${str} is a string`);
// } else {
//   console.log(`Entered string ${str} is not a string`);
// }

//method - 3
// function string(input) {
//     return typeof input === 'string';
// }
// const input = 123;
//   if (string(input)) {
//     console.log(`Entered string ${input} is a string`);
//   } else {
//     console.log(`Entered string is ${input} is not a string`);
//   }

// to check whether a string is blank or not
// function isBlank(input){
//     if (input.length === 0){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isBlank(''));
// console.log(isBlank('hcl is a worst company'));
// console.log(isBlank('             '));

//method -2
// function isBlank(str) {
// for (let i=0;i<str.length;i++){
//     if (str[i] !== ' ' && str[i] !== '\t' && str[i] !=='\n') {
//         return false;
//     }
// }
//     return true;
// }
// console.log(isBlank(''));
// console.log(isBlank('hcl is a worst company'));
// console.log(isBlank('             '));
// console.log(isBlank('             '    ));

// to split a string and convert it into an array
// function stringToArray(input) {
//     let array = input.split(''); // if we don't give spaces in quote it returns single single letter
// return array; // this line returns array as the result of the function
// }
// let input = ('hcl is a worst company');
// let arrayOfWords = stringToArray(input);
// console.log(arrayOfWords);

// another way
// function stringToArray(input) {
//     let array = input.split(' '); // if we give spaces in quote it returns one one word
// return array; // this line returns array as the result of the function
// }
//  let input = ('hcl is a worst company');
//  let arrayOfWords = stringToArray(input);
// console.log(arrayOfWords);

// another way
// function stringToArray(input) {
//     let array = input.split('',16); // if we don't give spaces in quote it returns single single letter with limit 16 letters
// return array; // this line returns array as the result of the function
// }
// let input = ('hcl is a worst company');
// let arrayOfWords = stringToArray(input);
// console.log(arrayOfWords);

//another way
// function stringToArray(input) {
//     let array = input.split(' ',3); // if we  give spaces in quote it returns single single word with limit 3 words
// return array; // this line returns array as the result of the function
// }
// let input = ('hcl is a worst company');
// let arrayOfWords = stringToArray(input);
// console.log(arrayOfWords);

//to extract a specified number of characters from a string
// function extractCharacters(inputString, numCharacters){
//     if (numCharacters <= 0){
//         return '';
//     }
//     return inputString.slice(0, numCharacters);
// }
// let inputString = ('hcl is a worst company     ');
// let numCharacters = 29;
// let extractedCharacters = extractCharacters(inputString, numCharacters);
// console.log(extractedCharacters);

// var a = parseInt(prompt("enter the first number"));
// for (var i=0;i<a;i++) {
//   for (var j=0;j<a;j++){
// // console.log(`${i}`);
// // document.write(`${i} `);
// document.write('* ');
//   }
//   // console.log();
//   document.write('<br/>');
// }

// var a = parseInt(prompt("enter the first number"));
// for (var i=0;i<a;i++) {
//   for (var j=i;j<a;j++){
// // console.log(`${i}`);
// // document.write(`${j} `);
// document.write('* ');
//   }
//   // console.log();
//   document.write('<br/>');
// }

// var a = parseInt(prompt("enter the first number"));
// for (var i = 0; i <a; i++) {
//   for (var j = 0; j <a; j++) {
//     // document.write(`${j} `);
//     // document.write("\n");
//     if (i === 0) || (i=== a-1) || (j===a-1) || (j===0) {
// console.log('* ');
//     } 
//     else {
//         console.log(' ');
//     }
//   }
//   for (var k = 0; k <i; k++) {
//     document.write(`${k} `);
//     // document.write(`* `);
//     // document.write('*');
//   }
//   document.write("<br/>");
// }


// let n = 5;
// let string = "";
// // console.log("hello");
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 0; j < n - i; j++) {
//     string += "";
//   }
//   // printing star
//   for (let k = 0; k < i; k++) {
//     string += "*";
//   }
//   string += "\n";
// //   console.log(string);
// }
// console.log(string);

