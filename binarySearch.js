/*
U S A G E:
Binary search has a wide range of real-world applications. Here are a few examples:

1. Searching in large databases: Binary search is commonly used to search for records in large databases. 
The records are sorted by some key value, and binary search can quickly find the records that match a 
particular search criterion.

2. Computer science algorithms: Binary search is a fundamental algorithm used in many computer science 
applications, such as sorting and searching algorithms.

3. Game development: Binary search is used in game development to quickly find the location of objects in a game world.

4. Genetics: Binary search is used in genetics to search for sequences of DNA or RNA in a large database.

5. Image processing: Binary search is used in image processing to quickly find the location of a particular 
feature or pixel value in an image.

6. Machine learning: Binary search is used in machine learning to search for optimal parameters in a large parameter space.
---

The binary search algorithm is most useful for sorted arrays, 
where the order of the elements is known. If the array is not sorted, 
or the order is unknown, then binary search cannot be applied effectively.

However, there are variations of binary search that can be used for non-sorted arrays, 
such as interpolation search, which makes assumptions about the distribution of the 
elements in the array to guess the location of the search key.
---


*/

// II. 3 SOLUTIONS:
// 1. WITH RECURSION & WITHOUT MEMOIZATION [BigO(log n)]
// 2. WITH ITERATION & FOR LOOP [BigO(log n)]
// 3. WITH ITERATION & WHILE LOOP [BigO(log n)]

// !!!! NO memoization

// I. REAL WORLD EXAMPLE:
// Sample array of email addresses (sorted alphabetically)
const emails = [
  "alice@example.com",
  "bob@example.com",
  "charlie@example.com",
  "dave@example.com",
  "emma@example.com",
  "john.doe@example.com",
  "jane.doe@example.com",
  "zoe@example.com",
];
let lowIndexEmail = 0;
let highIndexEmail = emails.length - 1;

// Binary search function for finding the index of a target email address
const binarySearchEmailsWhileLoop = (target) => {
  let low = 0;
  let high = emails.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let comparison = target.localeCompare(emails[mid]);

    if (comparison === 0) {
      return mid; // found the target
    } else if (comparison < 0) {
      high = mid - 1; // target is before mid
    } else {
      low = mid + 1; // target is after mid
    }
  }

  return -1; // target not found
};

const binarySearchEmailsRecursion = (arr, low, high, target) => {
  if (low <= high) {
    let mid = Math.floor((high + low) / 2);
    if (target.localeCompare(arr[mid]) === 0) {
      return mid;
    } else if (target.localeCompare(arr[mid]) < 0) {
      return binarySearchEmailsRecursion(arr, low, mid - 1, target);
    } else {
      return binarySearchEmailsRecursion(arr, mid + 1, high, target);
    }
  } else {
    return -1;
  }
};

// Example usage
const targetEmail = "jane.doe@example.com";
// const index = binarySearchEmailsWhileLoop(targetEmail);
const index = binarySearchEmailsRecursion(emails, lowIndexEmail, highIndexEmail, targetEmail);
if (index >= 0) {
  console.log(`Found record at index ${index}`);
  // Retrieve corresponding record from the database using index
} else {
  console.log(`Record not found for email ${targetEmail}`);
}

// II. 3 SOLUTIONS:
/* 1. WITH RECURSION & WITHOUT MEMOIZATION --------------------------*/
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
let nr = 1;

console.log(`Recursion: `, binarySearch(arr, low, high, nr));

/*
nr=7
arr=[1,2,3,4,5,6,7,8]
low=0
high=7
mid=4

if arr[mid] > nr
return bin(arr, low, mid-1,nr)
low=0
high=mid-1
mid=4

if arr[mid] < nr
return bin(arr, mid+1, high, nr)
low=5
high=7
mid=6

*/

/* 2. WITH ITERATION & FOR LOOP --------------------------------------*/
const binarySearchForLoop = (arr, nr) => {
  let low = 0;
  let high = arr.length - 1;

  for (let mid = Math.floor((high + low) / 2); low <= high; mid = Math.floor((high + low) / 2)) {
    if (arr[mid] === nr) {
      return mid;
    } else if (arr[mid] > nr) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1; //  the search element is not present in the array
};
console.log(`For loop: `, binarySearchForLoop(arr, nr));
/*
In this refactored version, we initialize mid inside the loop condition and update it in every iteration 
using the same calculation as before. The loop continues until low is greater than high, and the search 
result is returned as before. The time complexity of this refactored version is still O(log n).
*/

/* 3. WITH ITERATION & WHILE LOOP -------------------------------------*/
const binarySearchWhlieLoop = (arr, nr) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    if (arr[mid] === nr) {
      return mid;
    } else if (arr[mid] > nr) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1; //  the search element is not present in the array
};
console.log(`While loop: `, binarySearchWhlieLoop(arr, nr));
/*
This implementation is functionally equivalent to the original implementation using recursion, but it uses a while 
loop to perform the binary search instead of making recursive calls to the function. The loop condition checks if 
low is less than or equal to high, which ensures that we only search within the valid range of indices.

Inside the loop, we calculate the mid index using the same formula as before, and we compare the value at that 
index with the target element. If the value at mid is equal to the target element, we return the index of mid. 
If the value at mid is greater than the target element, we update high to mid - 1 to search the lower half of 
the array. If the value at mid is less than the target element, we update low to mid + 1 to search the upper 
half of the array.

If we exit the loop without finding the target element, we return -1 to indicate that it is not present in the array.
*/
