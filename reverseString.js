// 4 SOLUTIONS:
// 1. WITH RECURSION & WITHOUT MEMOIZATION: O(n)
// 2. WITH RECURSION & WITH MEMOIZATION
// 3. WITH ITERATION & FOR LOOP
// 4. WITH ITERATION & WHILE LOOP
// ++++++++++++++++++ BigO ++++++++++++++++++++++

/* WITH RECURSION & WITHOUT MEMOIZATION --------------------------*/
function reverseString(str) {
  // Base case: return the string when its length is 0 or 1
  if (str.length <= 1) {
    return str;
  }

  // Recursive case: call the function again with the substring minus the first and last characters,
  // and concatenate those characters to the end
  return reverseString(str.substring(1, str.length - 1)) + str.charAt(0) + str.charAt(str.length - 1);
}

// Example usage
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("world")); // Output: "dlrow"

/* WITH RECURSION & WITH MEMOIZATION -----------------------------*/
/* WITH ITERATION & FOR LOOP --------------------------------------*/
/* WITH ITERATION & WHILE LOOP -------------------------------------*/

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Big O
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// 1. WITH RECURSION & WITHOUT MEMOIZATION: O(n)
/*
The time complexity (Big O) of this function is O(n), where n is the 
length of the input string. This is because the function calls itself 
recursively, and each recursive call reduces the length of the string by 2 
(by removing the first and last characters). Therefore, the number of 
recursive calls required to reverse the string is proportional to the 
length of the string (n/2), and the time complexity is O(n/2) = O(n).
*/
