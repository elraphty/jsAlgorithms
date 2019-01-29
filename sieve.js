function sieveOfEratosthenes(n) {
  let primes = [];
  
  for (i = 0; i <= n; i++) {
    primes[i] = true;
  }
  
  primes[0] = false;
  primes[1] = false;
  
  for (i = 2; i <= Math.sqrt(n); i++) {
      console.log('I', i);
    for (j = 2; i * j <= n; j++) {
      console.log('j', j);
      primes[i * j] = false;
    }
  }

  console.log('Primes', primes);
  
  var result = [];
  for (var i = 0; i < primes.length; i++) {
    if (primes[i]) result.push(i);
  }
  
  return result;
}

console.log(sieveOfEratosthenes(5));