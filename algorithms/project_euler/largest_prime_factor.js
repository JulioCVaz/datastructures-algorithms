/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 *
 * prime number conditionals:
 * divide by one and by itself
 */

function isPrime(number) {
  if (number / 1 && number / number === 1) {
    return true;
  }
  return false;
}

function findDivider(number) {
  counter = 2;

  while (True) {
    if (isPrime(number) && number % counter === 0) break;
    counter++;
  }

  return counter;
}

function findLargestPrimeFactor(number = 600851475143) {
  if (isPrime(number)) {
    findLargestPrimeFactor(number / findDivider());
  }
}

findLargestPrimeFactor();
