// 4 SOLUTIONS:
// 1. WITH RECURSION & WITHOUT MEMOIZATION
// 2. WITH RECURSION & WITH MEMOIZATION
// 3. WITH ITERATION & FOR LOOP
// 4. WITH ITERATION & WHILE LOOP

/* WITH RECURSION & WITHOUT MEMOIZATION --------------------------*/
const fib = (n) => {
  if (n < 2) {
    return n;
  }

  return fib(n - 2) + fib(n - 1);
};
console.log(`Fibonacci solution using RECURSION: `, fib(8));

/* WITH RECURSION & WITH MEMOIZATION -----------------------------*/
const fibWithMemoization = (n, memo = {}) => {
  if (n in memo) {
    return memo.n;
    // return memo[n]
  }

  if (n < 2) {
    return n;
  }

  const result = fibWithMemoization(n - 2, memo) + fibWithMemoization(n - 1, memo);
  memo.n = result;
  return result;
  //memo[n] = result;
  // memo[n] = result
};
console.log(`Fibonacci solution using RECURSION & MEMOIZATION: `, fibWithMemoization(8));

/* WITH ITERATION & FOR LOOP --------------------------------------*/
const fibIterativeForLoop = (n) => {
  const arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
};
console.log(`Fibonacci solution using ITERATION & FOR LOOP: `, fibIterativeForLoop(8));

/* WITH ITERATION & WHILE LOOP -------------------------------------*/
const fibIterativeWhileLoop = (n) => {
  const arr = [0, 1];
  let i = 2;

  while (i <= n) {
    arr.push(arr[i - 2] + arr[i - 1]);
    i++;
  }
  return arr[n];
};
console.log(`Fibonacci solution using ITERATION & WHILE LOOP: `, fibIterativeWhileLoop(8));
