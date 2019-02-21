/**
 * 
 * Fibonacci is an algorithm that returns a sequence of numbers the first two numbers are 1 then every other number after that is the sum of the two previoues numbers e.g 1 1 2 3 5 8 13 21 34 55 89 ..... so in this example we want to check for the number at a given position
 */

function fibonacci(position) {
  // console.log('Position', position);
  // if position is lesser than three return 1
  if (position < 3) return 1;
  // else add the last wo numbers
  else return fibonacci(position - 1) + fibonacci(position - 2);
}
  
console.log(fibonacci(8));