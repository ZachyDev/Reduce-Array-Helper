// define an array of numbers
let numbers = [10,20,30,40];
let sum = 0;
// define a reduce helper
let result = numbers.reduce(function(sum,number){
   return sum + number;
},0);
console.log(result);
