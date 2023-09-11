"use strict";
// let country = "India";
// let continent = "Asia";
// let population = "120 Millions";

// console.log(country);
// console.log(continent);
// console.log(population);

// let isIsland = "10 Millions";
// let language;
// isIsland = false;

// console.log(country);
// console.log(isIsland);
// console.log(continent);
// console.log(population);
// console.log(language);

// language = "Urdu";
// const country = "India";
// const continent = "Asia";
// let isIsland = false;

// isIsland = true;
// let population = 120;
// console.log(population / 2);
// population++;
// console.log(population);
// console.log(population > 6);
// console.log(population < 33);
// let description =
//   country +
//   " is in " +
//   continent +
//   " and its " +
//   population +
//   " million people speak " +
//   language;
// console.log(description);

// let description = `${country} is in ${continent} and its ${population} million people speak ${language}`;
// console.log(description);

// let population = 120;
// const country = "India";
// if (population > 33) {
//   console.log(`${country}'s population is above average`);
// } else {
//   console.log(
//     `${country}'s population is ${33 - population} milllion below average`
//   );
// }

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, markHigherBMI);
// if (BMIMark > BMIJohn) {
//   console.log("Mark's BMI is higher than John's!");
// } else {
//   console.log("John's BMI is higher than Mark's!");
// }
// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI(${BMIMark}) is higher than John's(${BMIJohn})!`);
// } else {
//   console.log(`John's BMI(${BMIJohn}) is higher than Mark's(${BMIMark})!`);
// }

// console.log("9" - "5");
// console.log("19" - "13" + "17");
// console.log("19" - "13" + 17);
// console.log("123" < 57);
// console.log(5 + 6 + "4" + 9 - 4 - 2);

// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );
// if (numNeighbours === 1) console.log("Only 1 border!");
// else if (numNeighbours === 3) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

// const country = "India";
// const language = "English";
// const population = 48;
// let island = "Andaman";
// island = false;
// if (language === "English" && population < 50 && !island) {
//   console.log(`You should live in ${country}:)`);
// } else {
//   console.log(`${country} doesn't meet your criteria:(`);
// }

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);
// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy🏆");
// } else if (scoreKoalas > scoreDolphins) {
//   console.log("Kolas win the trophy🏆");
// } else {
//   console.log("Both win the trophy🏆");
// }

//bonus
// const scoreDolphins = (97 + 112 + 80) / 3;
// const scoreKoalas = (109 + 95 + 50) / 3;
// console.log(scoreDolphins, scoreKoalas);
// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log("Dolphins win the trophy🏆");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log("Koalas win the trophy🏆");
// } else if (
//   scoreDolphins === scoreKoalas &&
//   scoreDolphins >= 100 &&
//   scoreKoalas >= 100
// ) {
//   console.log("Both win the trophy🏆");
// } else {
//   console.log("No one wins the trophy😞");
// }

// const language = "hindi";
// switch (language) {
//   case "chinese": // language === 'chinese'
//   case "mandarin": // language === 'mandarin'
//     console.log("Most number of native speakers!");
//     break;
//   case "spanish":
//     console.log("2nd place in place of native speakers");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   case "hindi":
//     console.log("Number 4");
//     break;
//   case "arabic":
//     console.log("5th most spoken language");
//     break;
//   default:
//     console.log("Great language too :D");
// }

// const country = "India";
// let population = 120;
// population >= 33
//   ? console.log(`${country}'s population is above average`)
//   : console.log(`${country}'s population is below average`);

// console.log(
//   `${country}'s population is ${population >= 33 ? "above" : "below"} average`
// );

// const bill = 430;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${
//     bill + tip
//   }; `
// );

// function describeCountry(country, population, capitalCity) {
//   console.log(country, population, capitalCity);
//   const details = `${country} has ${population} million people and its capitalCity is ${capitalCity}`;
//   return details;
// }

// const describeIndia = describeCountry("India", 6, "NewDelhi");
// console.log(describeIndia);
// const describePortugal = describeCountry("Portugal", 10, "Lisbon");
// console.log(describePortugal);
// const describeFinland = describeCountry("Finland", 83, "Helsinki");
// console.log(describeFinland);

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }
// const perIndia1 = percentageOfWorld1(120);
// const perChina1 = percentageOfWorld1(110);
// const perUSA1 = percentageOfWorld1(332);
// console.log(perIndia1, perChina1, perUSA1);

// const percentageOfWorld2 = function (country, population) {
//   return `${country} has ${population} million people, so it's about ${
//     (population / 7900) * 100
//   }% of the world population`;
// };
// const perIndia2 = percentageOfWorld2("India", 120);
// const perChina2 = percentageOfWorld2("China", 110);
// const perUSA2 = percentageOfWorld2("USA", 332);
// console.log(perIndia2, perChina2, perUSA2);

// const percentageOfWorld3 = (population) => (population / 7900) * 100;

// const perIndia3 = percentageOfWorld3(120);
// const perChina3 = percentageOfWorld3(110);
// const perUSA3 = percentageOfWorld3(332);
// console.log(perIndia3, perChina3, perUSA3);

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }
// const describePopulation = function (country, population) {
//   const percentage = percentageOfWorld1(population);
//   const description = `${country} has ${population} million people, whcih is about ${percentage}% of the world`;
//   console.log(description);
// };
// describePopulation("India", 140);
// describePopulation("Portugal", 100);
// describePopulation("USA", 322);

// const calcAverage = (scoreDolphins1, scoreDolphins2, scoreDolphins3) => {
//   return (scoreDolphins1 + scoreDolphins2 + scoreDolphins3) / 3;
// const calcAverage = (a, b, c) => {
//   return (a + b + c) / 3;
// };
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win🏆 (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win🏆 (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log("No team wins..");
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// //Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

// const populations = [120, 190, 100, 30];

// if (populations.length === 4) {
//   console.log("true");
// } else {
//   console.log("false");
// }
// console.log(populations);
// function percentageOfWorld1(populations) {
//   return (populations / 7900) * 100;
// }
// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];
// console.log(percentages);

// const neighbours = ["India", "China", "Nepal", "Srilanka"];
// neighbours.push("Utopia");
// console.log(neighbours);

// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes("Germany")) {
//   console.log("Probably not a central European country :D");
// }

// console.log(neighbours.indexOf("Nepal"));

// neighbours[2] = "Republic of Nepal";
// console.log(neighbours);

// const calTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// const calTip = bill=> {
//   bill >= 50 && bill <= 300 ? bill *0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44];
// const tips = [calTip(bills[0]), calTip(bills[1]), calTip(bills[2])];

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, totals);

// function greet(name) {
//   console.log("Hello, " + name);
// }
// greet("John", "Doe");
// console.log(eval("+10+'20-10'));
// const myCountry = {
//   country: "India",
//   capital: "NewDelhi",
//   language: "Urdu",
//   population: "130Million",
//   neighbours: ["Nepal", "Silanka", "China"],
// };

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// const John = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// mark.calcBMI();
// John.calcBMI();
// console.log(mark.bmi, John.bmi);

// if (mark.bmi > John.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${John.fullName}'s BMI (${John.bmi})`
//   );
// } else if (John.bmi > mark.bmi) {
//   console.log(
//     `${John.fullName}'s BMI (${John.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
//   );
// }

//Factorial program
// let number = prompt("Enter the number to find factorial");
// let fact = 1;
// if (number === 0 || number === 1) {
//   console.log(`The factorial of given number ${number} is 1`);
// } else {
//   for (let i = 1; i <= number; i++) {
//     fact = fact * i;
//   }
// }
// console.log(`The factorial of given number ${number} is ${fact}`);

// no. of words in a string
// let string = "HCL is a worst company";
// let string = prompt("Enter the string to find out number of words");
// const words = string.length;
// let count = 1;
// for (let i = 1; i <= words; i++) {
//   if (string[i] === " " && string[i + 1] !== " " && string[i + 2] !== " ") {
//     count = count + 1;
//   }
// }
// console.log(`Entered string ${string} has ${count} words`);

// let string = prompt("Enter the string to find out number of words");
// const words = string.length;
// let count = 1;
// for (let i = 1; i <= words; i++) {
//   if (string[i] === " " && string[i + 1] !== " " && string[i + 2] !== " ") {
//     count = count + 1;
//   }
// }
// console.log(`Entered string ${string} has ${count} words`);

// number divisible by 3
// let number = prompt("Enter a three digit number");
// if (number.length !== 3) {
//   console.log(`Entered number ${number} is not a three digit number`);
// } else {
//   // for (let i = 100; i < 1000; i++) {
//   var quotient = Math.floor(number / 10);
//   var remainder = quotient % 10;
//   // }
//   if (remainder % 3 === 0) {
//     console.log(`Entered number ${number} is divisible by 3`);
//   } else {
//     console.log(`Entered number ${number} is not divisible by 3`);
//   }
// }

// factorial program using function
// let number = prompt("Enter a number to find factorial");
// function factorialFunction(number) {
//   var fact = 1;
//   let i = 1;
//   while (i <= number) {
//     fact = fact * i;
//     i++;
//   }
//   return fact;
// }
// console.log(factorialFunction(5));
// console.log(`The factorial of given number ${number} `);

// reverse of a number
// var number = prompt("Enter a number");
// let remainder = 0;
// let originalNumber = parseInt(number);
// let checkingNumber = p;
// while (number !== 0) {
//   let p = number % 10;
//   remainder = remainder * 10 + p;
//   number = Math.floor(number / 10);
// }
// console.log(
//   `Entered number is ${originalNumber} and reverse of that number is ${remainder}`
// );

// palindrome or not
// if (remainder === originalNumber) {
//   console.log(`Entered number ${originalNumber} is a palindrome`);
// } else {
//   console.log(`Entered number ${originalNumber} is not a palindrome`);
// }

// armstrong number or not
// while (number !== 0) {
//   let p = number % 10;
//   remainder += p * p * p;
//   number = Math.floor(number / 10);
// }
// if (remainder === originalNumber) {
//   console.log(`Entered number ${originalNumber} is a armstrong number ${remainder}`);
// } else {
//   console.log(`Entered number ${originalNumber} is not a armstrong number`);
// }

// sum of digits in a number
// var number = prompt("Enter a number");
// let remainder = 0;
// let originalNumber = parseInt(number);
// while (number !== 0) {
//   let p = number % 10;
//   remainder += p;
//   number = Math.floor(number / 10);
// }
// console.log(
//   `Entered number ${originalNumber} sum of it's digit are ${remainder}`
// );

//maximum and minimum digit in a number
// var number = prompt("Enter a number");
// let originalNumber = number;
// if (isNaN(number)) {
//   console.log(`Please enter valid number ${number}`);
// } else {
//   var maxDigit = 0;
//   var minDigit = 9;
//   while (number >= 0) {
//     var remainder = number % 10;
//     if (remainder > maxDigit) {
//       maxDigit = remainder;
//     }
//     if (remainder < minDigit) {
//       minDigit = remainder;
//     }
//     number = Math.floor(number / 10);
//   }
//   console.log(
//     `Entered number is ${originalNumber} and maximum digit in that number is ${maxDigit} and minimum digit in that number is ${minDigit}`
//   );
// }

//method - 2
// var number = prompt("Enter a number");
// let originalNumber = number;
// if (isNaN(number)) {
//   console.log(`Please enter valid number ${number}`);
// } else {
//   var maxDigit = 0;
//   var minDigit = 9;
//   for (var i = 0; i < number.length; i++) {
//     var currentDigit = number[i];
//     if (currentDigit > maxDigit) {
//       maxDigit = currentDigit;
//     }
//     if (currentDigit < minDigit) {
//       minDigit = currentDigit;
//     }
//   }
//   console.log(
//     `Entered number is ${originalNumber} and maximum digit in that number is ${maxDigit} and minimum digit in that number is ${minDigit}`
//   );
// }

// which number is large
// var number1 = prompt("Enter a number1");
// var number2 = prompt("Enter a number2");
// var number3 = prompt("Enter a number3");
// let originalNumber = number1;
// // var duplicate1 = number1;
// // if (isNaN(originalNumber)) {
// //   console.log(`Please enter valid number ${originalNumber}`);
// // } else {
// // }
// if (number1 > number2 && number1 > number3) {
//   console.log(`${number1} is big`);
// } else if (number2 > number1 && number2 > number3) {
//   console.log(`${number2} is big`);
// } else {
//   console.log(`${number3} is big`);
// }

//method -2
// var a = parseInt(prompt("Enter a number1"));
// var b = parseInt(prompt("Enter a number2"));
// var c = parseInt(prompt("Enter a number3"));
// var dummy = 0
// if (a > b)
// {
//   if (a > c)
//    {
//     dummy = a;
//   }
// }
// else
//  {
//   if (b > c)
//    {
//     dummy = b;
//   }
//    else
//    {
//     dummy = c;
//   }
// }
// console.log(`${dummy} is big number`);

// speciliazed even or odd number or not
// var a = prompt("Enter a number1");
// var dummy = 0;
// if (a % 2 === 0 )
// {
//   if (a %4 ===0)
//   {
//     console.log(`It is a speciliazed even number ${a}`);
//   }
//   else
//   {
//     console.log(`It is just an even number ${a}`);
//   }
// }
//  else
//  {
//   if (a %3 ===0 )
//   {
//     console.log(`it is specialized odd number ${a}`);
//   }
//   else
//  {
// console.log(`it is just an odd  number ${a}`);
//  }
//  }

// current bill calculation project
// var currentBill = parseInt(prompt("Enter the number of units consumed"));
// var unitsConsumed = currentBill;
// var rupees = 100;
// var taxPer100Units = 100;
// var taxBlocks = Math.floor(currentBill / 100);
// var chargePerUnitAbove300 = 5;
// var chargePerUnitAbove100 = 2;
// var chargePerUnitAbove200 = 3;
// var additionalUnitsAbove300Units = 300;
// var totalTax = taxBlocks * taxPer100Units;
// if (currentBill <= 100) {
//   console.log(
//     `Current bill for  ${unitsConsumed} units from the range 0 to 100 units is ${rupees} rupees`
//   );
// } else {
//   if (currentBill >= 100 && currentBill <= 200) {
//     var calTaxes = currentBill - taxPer100Units;
//     var add = rupees + calTaxes * chargePerUnitAbove100;
//     console.log(
//       `Current bill for ${unitsConsumed} units from the range 100 to 200 units is ${add} rupees`
//     );
//   } else if (currentBill >= 200 && currentBill <= 300) {
//     var calTaxes = Math.floor(currentBill % 100);
//     var add = rupees + totalTax + calTaxes * chargePerUnitAbove200;
//     console.log(
//       `Current bill for ${unitsConsumed} units from the range 100 to 200 units is ${add} rupees`
//     );
//   } else {
//     var calTaxes = currentBill - additionalUnitsAbove300Units;
//     var add =
//       rupees +
//       chargePerUnitAbove100 * taxPer100Units +
//       chargePerUnitAbove200 * taxPer100Units +
//       calTaxes * chargePerUnitAbove300;
//     console.log(
//       `Current bill for ${unitsConsumed} units from the range 100 to 200 units is ${add} rupees`
//     );
//   }
// }

// efficient program to calcuate which number is big
// let a = parseInt(prompt("Enter a number"));
// let b = parseInt(prompt("Enter a number"));
// let c = parseInt(prompt("Enter a number"));
// var d = 0;

// if (a !== 0 && b !== 0 && c !== 0) {
//   if (a > b) {
//     if (a > c) {
//       d = a;
//     }
//   } else {
//     if (b > c) {
//       d = b;
//     } else {
//       d = c;
//     }
//   }
//   console.log(d);
// } else {
//   if (a === 0) {
//     if (b > c) {
//       d = b;
//     } else {
//       d = c;
//     }
//   } else {
//     if (b === 0) {
//       if (a > c) {
//         d = a;
//       } else {
//         d = c;
//       }
//     } else {
//       if (c === 0) {
//         if (a > b) {
//           d = a;
//         } else {
//           d = b;
//         }
//       }
//     }
//   }
//   console.log(d);
// }

// from certain range of numbers to calculate big number from that range program
// var number = parseInt(prompt("Enter how many numbers do you want"));
// var big = 0;
// for (let i = 0; i < number; i++) {
//   var a = parseInt(prompt("Enter the number"));
//   if ((i === 0)) {
//     big = a;
//   } else {
//     if (a > big) {
//       big = a;
//     }
//   }
// }

// console.log(`Big Number is ${big}`);

// dynamically
// var i = 0;
// while (i<number) {
//     var a = parseInt(prompt("Enter the number"));
//     if ((i === 0)) {
//             big = a;
//           } else {
//             if (a > big) {
//               big = a;
//             }
//           }
//           i++;
// }
// console.log(`Big Number is ${big}`);
// var number = parseInt(prompt("Enter how many numbers do you want"));
// var big = 0;
// // for (let i = 0; i < number; i++) {
// for (var i =0; i<number;i++) {
// console.log(`${i}`); }

// 5--- user no
// 10-- first no  - big = 10 (i=0)
// 40-- second no  - big =40 i =1
// 35 i =2
// 11 i =3
// 9 i =4

// to calculate number of digits in a number
// var p = prompt(("Enter the digit you want the count"));
// var number = parseInt(prompt("Enter the number"));
// while (number > 0) {
//   var remainder = number % 10;
//   if (remainder === p){
//     console.log(`${remainder}`);
//   }
//   number = Math.floor(number / 10);
// }

// 423
// var number = parseInt(prompt("Enter the number"));
// // var add =0;
// while (number > 0) {
//   var remainder = number % 10;
// //    add += remainder;
//   number = Math.floor(number / 10);
// }
// console.log(`${remainder}`);

// sum of it's digits
// var number = prompt("Enter a number");
// let remainder = 0;
// let originalNumber = parseInt(number);
// while (number !== 0) {
//   let p = number % 10;
//   remainder += p;
//   number = Math.floor(number / 10);
// }
// console.log(
//   `Entered number ${originalNumber} sum of it's digit are ${remainder}`
// );

// var number = parseInt(prompt("Enter the number"));
// var count = 0;
// while (number > 0) {
//   var remainder = number % 10;
//   if (remainder === p){
//       count += 1;

//   }
//   number = Math.floor(number / 10);

// }
//  console.log(`${count}`);

// swapping of numbers using third variable  program
// var a =parseInt(prompt("enter the first number"));
// var b =parseInt(prompt("enter the first number"));
// var c = a;
// a= b;
//  b =c;
// console.log(`${a}`);
// console.log(`${b}`);
// a =1
// b =2
// a - print = 2

// 0 1  1  2 3 5 8 13 21 = 9-- numbers
// a b  f
//   a
// var a = parseInt(prompt("enter the first number"));
// var first = 0;
// var second = 1;
// console.log(`${first}`);
// console.log(`${second}`);
// console.log(`${first}`);
//   console.log(`${second}`);
// for (var i = 10; i < a +8; i++) {
// for (var i = 1; i <= a - 2; i++) {
// for ( var i=5; i < a+5; i++ ) {
// for ( var i =0;i<a ;i++) {
// for ( var i=2; i < a; i++ ) {
//   for ( var i=0; i <= a- 3; i++ ) {
// for (var i = 36; i < a + 34; i++) {
// for (var i = 10; i > -a + 12; i--) {
// console.log(`${i}`);
// if (i === 0 ) {
// console.log(`${first}`);
// }
// else if (i===1) {
//   console.log(`${second}`);
// }
// else {

//   var f = first + second;
//     console.log(`${f}`);
//     first = second;
//     second = f;
// }
// var a = parseInt(prompt("enter the first number"));
// for (var i=1;i<a+11 ;i++) {
// for (var i=1;i<=a+10 ;i++) {
// for (var i=-6;  i<a-6+10  ;i++) {
// for (var i=0;  i<Math.floor(a/2);i++) {
// var count =1;
// console.log(`${i}`);

// }
// for (var i=-6;i>-a-6-10;i--) {
//   console.log(`${i}`);
// }

// for (var i=0;i<a;i++){
//   console.log(`${i}`);
// }
// for (var i=0;i<=a;i++){
//   console.log(`${i}`);
// }

// swappping of numbers without using third variable
// var first = first + second;
// var second = first - second;
// var first = first + second;
// console.log(`${first}`);
// console.log(`${second}`);
// console.log(`${i}`);
// console.log(`${f}`);
// first = second;
// second = f;

// }
//  a= 10 i = 5
//  i =

// 5
// 0<= 2
// 1<=2
// 2<=2

// first - 0
// second - 1
// f = first + second

//nested for loop concept starts
// pattern programs
// var a = parseInt(prompt("enter the first number"));
// for (var i =0;i<a;i++) {
//   for (var j=0;j<a;j++){
// // console.log(`${j}`);
// document.write('* ');
//   }
//   // console.log();
//   document.write('<br/>');
// }
// var b = a;
// if (a===0 || a === 1) {
//   console.log(`Number is not a prime number ${a}`)
// } else {
//   if (a%1 === 0 && a % b ===0 ) {
//     console.log(`Number is prime number ${a}`);
//   }
//     else {
//       console.log(`Number is not a prime number ${a}`);
//     }

//     }

// prime number program from 1 to n numbers
// var count=0;
// var a = parseInt(prompt("enter the first number"));
// for (var j =1; j<=a; j++)
// {
//   var count = 0;
//   for (var i=1; i<=j; i++)
//    {
//     if (j%i === 0)
//     {
// count++;
//     }
//   }
//   if (count === 2)
//    {
//     console.log(` ${j}`);
//   }
// else {
//   console.log(`Number is not a prime number ${a}`);
// }
// }

// count = 1 i =1
// count = 2 i =2
// 3
// 4
// count = 3 ; i =5
// 6
// 7
// 8
// 9
// 10 ; count = 4
// for a =10 count is 4
// // count = 1 i =1
// for input  a =5; i=1
// count =1;
// i =2
// 3
// 4
// count = 2; i =5

// for input = 7; count =2
// for input =11; count = 2
// for input =6 ;
// 1 count = 1
// 2 count =2
// 3 count =3
// 4
// 5
// 6 count = 4;

// factorial program from 1 to n numbers
//   var a = parseInt(prompt("enter the first number"));
//   for (var i =1; i<=a; i++)
//   {
//     var fact =1 ;
// for (var j= 1; j<=i;j++)
// {
//   fact = fact * j;
// }
// console.log(`${fact}`);
// }

// factorial program with a number
// var a = parseInt(prompt("enter the first number"));
// var fact =1;
// for (var i =2; i<=a; i++){
// fact = fact * i;
// }
// console.log(`${fact}`);

// prime number program from 1 to n numbers
//   var a =parseInt(prompt("enter the first number"));
//   var j =1;
// while (j<=a)
// {
//   var count = 0;
// var i =1;
// while (i<=j)
// for (var i=1; i<=j; i++)
//    {
//     if (j%i === 0)
//     {
// count++;
//     }
//     i++;
//   }
//   if (count === 2)
//    {
//     console.log(` ${j}`);
//   }
//   j++;
// }
