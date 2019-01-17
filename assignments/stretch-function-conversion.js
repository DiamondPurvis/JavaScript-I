// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {};
const myFunction = () => {};
console.log(myFunction);
// let anotherFunction = function (param) {
//   return param;
// };
const anotherFunction = (param) => {param};
console.log(anotherFunction);
// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
const add = (param1, param2) => {return param1 + param2};
console.log(add);

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);
const subtract = (param1, param2) => {return param1 - param2};
console.log(subtract);
 exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);
const triple = exampleArray.map(num => num * 3 === 0);
console.log(triple); // [1,2,3,4]