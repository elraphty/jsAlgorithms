/**
 * 
 * Fizz buzz returns fizz when the number is divisible by 3,buzz when the number is divisible by 5 and fizz Buzz when it is divisible by 15, its a common javascript algorithm you can also achieve this functionality with any given sets of number 3, 5 and 15 is not a constant
 */


function fizzBuzz(num) {
  for(i = 1; i <= num; i++) {
    // if the number is divisibe by 15 i.e 5 * 3 console.log(Fizz buzz), this is the first condition because, if it becomes last it breaks the algorithm, what will happen is fizz will be printed out buzz will be printed out and then fizz buzz why? because any number divisible by 15 is also divisble by 3 and 5.
    if(i % 15 === 0) console.log('Fizz Buzz');
    else if(i % 3 === 0) console.log('Fizz')
    else if(i % 5 === 0) console.log('Buzz');
    else console.log(i);
  }
}

fizzBuzz(20);