"use strict";
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

// const firstName = "Fazil";
// const job = "Programmer";
// const birthYear = 1998;
// const year = 2023;

// const Fazil =
//   "I'm " + firstName + ", a " + (year - birthYear) + " Year old " + job + "!";
// console.log(Fazil);

// const fazilNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(fazilNew);

// console.log(`just a regular string`);

// console.log(
//   "String with \n\
// multiple \n\
// lines"
// );

// console.log(`String with
// multiple
// lines`);

// const age = 15;
// const isOldEnough = age >= 18;
// if (isOldEnough) {
//   console.log("Sarah can start driving license🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
// }

// const birthYear = 1999;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

//type conversion
// const inputYear = "1991";
// console.log(inputYear + 19);
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 19);

// console.log(Number("Fazil"));
// console.log(typeof NaN);

// console.log(String(23), 23);

//type coercion
// console.log("I am " + 23 + " years old");
// console.log("I am " + String(23) + " years old");
// console.log("23" - "10" - 3);
// console.log("23" + "13" + 3);
// console.log("23" * 2);
// console.log("23" / 2);
// console.log("23" % 2);
// console.log(23 * 2);
// console.log(23 / 2);
// console.log(23 % 2);

// let n = "1" + 1; // '11'
// n = n - 1;
// console.log(n);

// console.log(2 + 3 + 4 + "5");
// console.log("10" - "4" - "3" - 2 + "5");
// console.log("6" + 7 + "1" - 2 - "2" + 4 * "2");
// console.log("6" + 7);
// console.log("6" + 7 + "1");
// console.log("6" + 7 + "1" - 2);
// console.log("6" + 7 + "1" - 2 - "2");
// console.log("6" + 7 + "1" - 2 - "2" + 4);
// console.log("6" + 7 + "1" - 2 - "2" + 4 * 2);

//5 falsy values ; 0,' ',undefined,Null,NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("fazil"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 0;
// if (money) {
//   console.log("Don't spend it all");
// } else {
//   console.log("You sould get a job!");
// }

// let height = 0;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }

// const age = "18";
// if (age === 18) console.log("You just became an adult(strict)");
// if (age == 18) console.log("You just became an adult(loose)");

// // prompt("What's your favourite number");
// const favourite = Number(prompt("What's your favourite number"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("Cool! 23 is an amazing number");
// } else if (favourite === 7) {
//   console.log("7 is a cool number");
// } else if (favourite === 9) {
//   console.log("9 is a cool number");
// } else {
//   console.log("Number is not 23 or 7");
// }

// if (favourite !== 23) console.log("Why not 23?");

// const hasDriversLiscense = true;
// const hasGoodVision = true;

// console.log(hasDriversLiscense && hasGoodVision);
// console.log(hasDriversLiscense || hasGoodVision);
// console.log(!hasDriversLiscense);

// if (hasDriversLiscense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive..");
// }
// const isTired = false;
// console.log(hasDriversLiscense && hasGoodVision && isTired);

// if (hasDriversLiscense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive..");
// }

// const day = "saturday";
// switch (day) {
//   case "monday": // day === 'monday'
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the wwekend");
//     break;
//   default:
//     console.log("Not a valid day");
// }

// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the wwekend");
// } else {
//   console.log("Not a valid day");
// }

// const age = 18;
// age >= 18
//   ? console.log("I like to drink wine 🍷")
//   : console.log("I like to drink water 💧");

// const drink = age >= 18 ? "wine 🍷" : "water 💧";
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = "wine 🍷";
// } else {
//   drink2 = "water 💧";
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

// function logger() {
//   console.log("My name is Fazil");
// }

//calling / running / invoking function
// logger();
// logger();
// logger();
// logger();
// logger();

// function friutProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }
// const appleJuice = friutProcessor(5, 0);
// console.log(appleJuice);
// // console.log(friutProcessor(5, 0));

// const appleOrangeJuice = friutProcessor(2, 4);
// console.log(appleOrangeJuice);

//Function declaration
// function calAge1(birthYear) {
//   return 2023 - birthYear;
// }
// const age1 = calAge1(1999);

//Function Expression
// const calAge2 = function (birthYear) {
//   return 2023 - birthYear;
// };
// const age2 = calAge2(1998);
// console.log(age1, age2);

// const calAge3 = (birthYear) => 2023 - birthYear;
// const age3 = calAge3(1999);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1999, "Fazil"));
// console.log(yearsUntilRetirement(1994, "Nana"));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }
// function friutProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
//   return juice;
// }
// console.log(friutProcessor(2, 3));

// const friends = ["nana", "bot", "charmam"];
// console.log(friends);

// const y = new Array(1990, 1991, 1995, 1998);
// console.log(y);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);

// console.log(friends[friends.length - 1]);

// friends[2] = "utta";
// console.log(friends);

// friends = ["kathal", "raj"];

// const firstName = "Fazil";
// const fazil = [firstName, "Hussain", 2023 - 1999, "developer", friends];
// console.log(fazil);
// console.log(fazil.length);

//Exercise

// const calAge = function (birthYear) {
//   return 2023 - birthYear;
// };
// const year = [1990, 1967, 2002, 2010, 1999];
// const age1 = calAge(year[0]);
// const age2 = calAge(year[1]);
// const age3 = calAge(year[2]);
// const age4 = calAge(year[3]);
// const age5 = calAge(year[year.length - 1]);
// console.log(age1, age2, age3, age4, age5);

// const ages = [
//   calAge(year[0]),
//   calAge(year[1]),
//   calAge(year[2]),
//   calAge(year[3]),
//   calAge(year[year.length - 1]),
// ];
// console.log(ages);

// const friends = ["nana", "bot", "charmam"];
// Add elements
// const newLength = friends.push("Utta"); //Last
// console.log(friends);
// console.log(newLength);

// friends.unshift("John"); // First
// console.log(friends);

// Remove elements
// friends.pop(); // Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf("nana"));
// console.log(friends.indexOf("bot"));
// console.log(friends.indexOf("utta"));

// friends.push(23);
// console.log(friends.includes("nana"));
// console.log(friends.includes("utta"));
// console.log(friends.includes("23"));
// console.log(friends.includes(23));

// if (friends.includes("bot")) {
//   console.log("You have a friend called Nana");
// }

// const fazilArray = [
//   "Fazil",
//   "Hussain",
//   2023 - 1999,
//   "Developer",
//   ["Bekaar", "Nana"],
// ];
// console.log(fazilArray);

// const fazil = {
//   firstName: "Fazil",
//   lastName: "Hussain",
//   age: 2023 - 1999,
//   job: "developer",
//   friends: ["Nana", "bot", "Charmam"],
// };

// console.log(fazil.firstName);
// console.log(fazil["lastName"]);

// const namekey = "Name";
// console.log(fazil["first" + namekey]);
// console.log(fazil["last" + namekey]);
// // console.log(fazil.'last'+namekey);

// const interestedIn = prompt(
//   "What do you want to know about Fazil? Choose between firstName,lastName,age,job and friends"
// );
// console.log(interestedIn);
// console.log(fazil[interestedIn]);

// fazil.location = "India";
// fazil["twitter"] = "@fazilhussain";
// if (fazil[interestedIn]) {
//   console.log(fazil[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName,lastName,age,job and friends"
//   );
// }

//Challenge
// 'Fazil has 3 friends, and his best friend is Nana'

// console.log(
//   `${fazil.firstName} has ${fazil.friends.length} friends, and his best friend is ${fazil.friends[0]}`
// );

const fazil = {
  firstName: "Fazil",
  lastName: "Hussain",
  birthyear: 1999,
  job: "developer",
  friends: ["Nana", "bot", "Charmam"],
  hasDriversLicense: true,

  calcAge: function (birthYear) {
    return 2023 - birthYear;
  },
  calcAge: function () {
    console.log(this);
    return 2023 - this.birthyear;
  },
  calcAge: function () {
    this.age = 2023 - this.birthyear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} drivers liscense`;
  },
};

console.log(fazil.calcAge(1999));
console.log(fazil["calcAge"](1999));
console.log(fazil.calcAge());
console.log(fazil["calcAge"]());
console.log(fazil.age);
//Challenge
//Wite method getSummary
//'Fazil is a 24-year old developer, and he has a/no drivers liscense

console.log(fazil.getSummary());
