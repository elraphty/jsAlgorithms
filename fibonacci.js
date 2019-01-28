function fibonacci(position) {
  // console.log('Position', position);
  if (position < 3) return 1;
  else return fibonacci(position - 1) + fibonacci(position - 2);
}
  
console.log(fibonacci(8));