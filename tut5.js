"use strict";

//PROBLEM 1
// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calcTempAmplitude([
//   3,
//   -2,
//   -6,
//   -1,
//   "error",
//   9,
//   13,
//   17,
//   15,
//   14,
//   9,
//   5,
// ]);
// console.log(amplitude);

//PROBLEM 2
// const calcTempAmplitude = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeNew = calcTempAmplitude(
//   [3, -2, -6, -1, "error", 9],
//   [13, 17, 15, 14, 9, 5, -16]
// );
// console.log(amplitudeNew);

//DEBUGGING

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     value: Number(prompt("Degrees celsius")),
//   };
//   console.log(measurement);
//   console.table(measurement);
//   // console.log(measurement.value);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// // A) IDENTIFY
// console.log(measureKelvin());

//DEBUGGING PROCESS
// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);
//   let max = 0;
//   let min = 0;
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// console.log(amplitudeBug);

//PROBLEM
//TEST DATA1: [17,21,23]
//TEST DATA2: [12,5,-5,0,4]

//Understanding the problem
//Array transformed to string, separated by ...
//What is X days? Answer: index+1

//Breaking up into sub-problems
//Transform array into string
//Transform each element to string with °C
//Strings needs to contain day (index+1)
//Add ... between elements and start and end of string
//Log string to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

//This is not the correct way
console.log(`... ${data1[0]}°C ... ${data1[1]}°C ... ${data1[2]}°C ...`);

//actual way is
const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}°C in ${i + 1} days ... `;
    // str += `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log("..." + str);
};
printForecast(data1);
printForecast(data2);
