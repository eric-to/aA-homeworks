// fizzBuzz
// Define a function fizzBuzz(array) that takes an array and returns a new array of every number
// in the array that is divisible by either 3 or 5, but not both.
function fizzBuzz(array) {
  var results = [];
  var i;
  for (i = 0; i < array.length; i++) {
    if (array[i] % 3 == 0 && array[i] % 5 != 0) {
      results.push(array[i]);
    }
    if (array[i] % 5 == 0 && array[i] % 3 != 0) {
      results.push(array[i]);
    }
  }
  return results;
}

// console.log(fizzBuzz([9, 5, 15, 20, 27, 30, 3, 42, 41]))



// isPrime
function isPrime(number) {
  if (number == 0 || number == 1) {
    return false;
  }
  if (number == 2) {
    return true;
  }
  var curr_num = 2;
  while (curr_num != number - 1) {
    if (number % curr_num == 0) {
      return false;
    }
    curr_num += 1;
  }
  return true;
}

// console.log(isPrime(15485863));



function sumOfNPrimes(n) {
  var n_primes = [];
  var curr_num = 1;
  while (n_primes.length != n) {
    if (isPrime(curr_num)) {
      n_primes.push(curr_num);
    }
    curr_num += 1;
  }
  
  var sum = 0;
  var i;
  for (i = 0; i < n_primes.length; i++) {
    sum += n_primes[i];
  }
  return sum;
}

// console.log(sumOfNPrimes(4))