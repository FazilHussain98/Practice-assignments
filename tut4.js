"use strict";

// const describePopulation = function (country, population) {
//     function percentageOfWorld1(population) {
//           return (population / 7900) * 100;
//         }
//           const percentage = percentageOfWorld1(population);
//           const description = `${country} has ${population} million people, whcih is about ${percentage}% of the world`;
//           console.log(description);
// };
// describePopulation ('India', 120);
// describePopulation ('Norway', 15);
// describePopulation ('Canada', 12);

// const population = [120, 15, 11, 9];
// console.log(population);
// if (population.length === 4) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// function percentageOfWorld1(population) {
//               return (population / 7900) * 100;
//             }
// const percentages = [percentageOfWorld1(population[0]), percentageOfWorld1(population[1]), percentageOfWorld1(population[2]), percentageOfWorld1(population[3]) ];
// console.log(percentages);

// const neighbours = ['India', 'Srilanka', 'Bangladesh'];
// neighbours.push('Utopia');
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes('Germany')) {
//     console.log('Probably not a central European country :D');
// }
// // console.log(neighbours.includes('Germany'));

// console.log (neighbours.indexOf('India'));
// neighbours[0] = 'Republic of India';
// console.log(neighbours);

// const myCountry = {
//     country : 'India',
//     capital : 'New Delhi',
//     language : 'Urdu',
//     population : 130,
//     neighbours : ['China', 'Srilanka', 'Bangladesh']
// }
// // console.log(myCountry);
// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

// console.log(myCountry.population += 2);
// console.log(myCountry['population'] -= 2);

// const myCountry = {
//         country : 'India',
//         capital : 'New Delhi',
//         language : 'Urdu',
//         population : 130,
//         neighbours : ['China', 'Srilanka', 'Bangladesh'],
//         describe: function() {
//             console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
//         },
//         checkIsland : function() {
//             this.isIsland = this.neighbours === 0 ? true : false ;
//             this.isIsland = !Boolean(this.neighbours.length);
//         }
//     }
//     myCountry.describe();
//     myCountry.checkIsland();
//     console.log(myCountry.isIsland);

// for (var voterNumber = 1; voterNumber <= 50; voterNumber++) {
//   console.log(`Voter number ${voterNumber} is currently Voting`);
// }

// const populations = [120, 10, 144, 96];
// const percentages = [];
// function percentageOfWorld1(populations) {
//               return (populations / 7900) * 100;
//             }
// for (let i=0; i<populations.length; i++) {
//     const perc = percentageOfWorld1(populations[i]);
//     percentages.push(perc);
// }
// console.log(percentages);

// const listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];
// console.log(listOfNeighbours);

// for (let i = 0; i < listOfNeighbours.length; i++) {
//     // console.log(i);
//   for (let j = 0; j < listOfNeighbours[i].length; j++) {
//       console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
// }
// }

const populations = [120, 10, 144, 96];
const percentages3 = [];
function percentageOfWorld1(populations) {
  return (populations / 7900) * 100;
}
let i = 0;
while (i < populations.length) {
  const perc = percentageOfWorld1(populations[i]);
  percentages3.push(perc);
  i++;
}
console.log(percentages3);
