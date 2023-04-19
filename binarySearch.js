// 4 SOLUTIONS:
// 1. WITH RECURSION & WITHOUT MEMOIZATION
// 2. WITH RECURSION & WITH MEMOIZATION
// 3. WITH ITERATION & FOR LOOP
// 4. WITH ITERATION & WHILE LOOP

/* WITH RECURSION & WITHOUT MEMOIZATION --------------------------*/
const binarySearch = (arr, low, high, nr) => {
  // 1. check if high index is >= low index
  if (high >= low) {
    // 2. we calculate the middle index
    let mid = Math.floor((high + low) / 2);
    // 3. we check if the middle element === nr
    if (arr[mid] === nr) {
      // if middle element === nr we return the middle index
      return mid;
      // 4. we check if the middle elem is bigger than nr
    } else if (arr[mid] > nr) {
      // if the middle elem is bigger than the nr we
      // narrow the search interval to the lower half of the array
      return binarySearch(arr, low, mid - 1, nr);
    }
    // 5. we check if the middle elem is smaller than nr
    else {
      // if the middle elem is smaller than the nr we
      // narrow the search interval to the upper half of the array
      return binarySearch(arr, mid + 1, high, nr);
    }
  } else {
    // if high index < low index means the value is not in the array
    return -1;
  }
};
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let low = 0;
let high = 9;
let nr = 8;

console.log(binarySearch(arr, low, high, nr));

/* WITH RECURSION & WITH MEMOIZATION -----------------------------*/
/* WITH ITERATION & FOR LOOP --------------------------------------*/
/* WITH ITERATION & WHILE LOOP -------------------------------------*/

/*
nr=7
arr=[1,2,3,4,5,6,7,8]
low=0
high=7
mid=4

if arr[mid] > nr
return bin(arr, low, mid-1,nr)

if arr[mid] < nr
return bin(arr, mid+1, high, nr)
low=5
high=7
mid=6



*/
