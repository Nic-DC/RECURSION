// 4 SOLUTIONS:
// 1. WITH RECURSION & WITHOUT MEMOIZATION
// 2. WITH RECURSION & WITH MEMOIZATION
// 3. WITH ITERATION & FOR LOOP
// 4. WITH ITERATION & WHILE LOOP

/* WITH RECURSION & WITHOUT MEMOIZATION --------------------------*/
const factorial = (n) => {
  if (n < 2) {
    return 1;
  }

  return n * factorial(n - 1);
};
console.log(`Factorial solution using RECURSION: `, factorial(5));

/* WITH RECURSION & WITH MEMOIZATION -----------------------------*/
const factorialWithMemoization = (n, memo = {}) => {
  if (n in memo) {
    return memo[n];
  }

  if (n < 2) {
    return 1;
  }

  const result = n * factorialWithMemoization(n - 1, memo);
  memo[n] = result;
  return result;
};
console.log(`Factorial solution using RECURSION & MEMOIZATION: `, factorialWithMemoization(5));

/* WITH ITERATION & FOR LOOP --------------------------------------*/
const factorialIterativeForLoop = (n) => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};
console.log(`Factorial solution using ITERATION & FOR LOOP: `, factorialIterativeForLoop(5));

/* WITH ITERATION & WHILE LOOP -------------------------------------*/
const factorialIterativeWhileLoop = (n) => {
  let result = 1;
  let i = 1;
  while (i <= n) {
    result *= i;
    i++;
  }
  return result;
};
console.log(`Factorial solution using ITERATION & WHILE LOOP: `, factorialIterativeWhileLoop(5));
