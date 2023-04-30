/**
 * @param {number} n - The number of disks to move.
 * @param {string} fromRod - The rod from which to move the disks.
 * @param {string} toRod - The rod to which to move the disks.
 * @param {string} auxRod - The auxiliary rod.
 */

/*
E X P L A N A T I O N:
The Tower of Hanoi is a mathematical puzzle that consists of three rods 
and a number of disks of different sizes. The objective of the puzzle is 
to move the entire stack of disks from the first rod to the third rod, 
obeying the following simple rules:
1. Only one disk can be moved at a time.
2. Each move consists of taking the upper disk from one of the stacks 
   and placing it on top of another stack or on an empty rod.
3. No disk may be placed on top of a smaller disk.
*/

/*
Space complexity: The space complexity of the Tower of Hanoi algorithm 
is O(n), as it requires the use of recursion and a stack to store the 
function calls.

Memoization: Memoization is a technique used to reduce the time complexity
 of algorithms by storing the results of expensive function calls and 
 returning the cached result when the same inputs occur again. 
 However, the Tower of Hanoi problem is not suitable for memoization as 
 it doesn't involve any repetitive or overlapping subproblems.

Applications: Although the Tower of Hanoi problem is mainly used for 
mathematical and algorithmic analysis, it has some real-world applications
 in computer science, such as in optimizing the placement of data in disks
  or memory blocks to improve performance and reduce disk I/O. It is also 
  used as a pedagogical tool to teach programming concepts such as 
  recursion and problem-solving.
*/

// 4 SOLUTIONS:
// 1. WITH RECURSION & WITHOUT MEMOIZATION
// 2. WITH RECURSION & WITH MEMOIZATION
// 3. WITH ITERATION & FOR LOOP
// 4. WITH ITERATION & WHILE LOOP

const towerOfHanoiRecursion = (n, fromRod, toRod, auxRod) => {
  if (n === 1) {
    console.log(`Move disk 1 from rod ${fromRod} to rod ${toRod}`);
  } else {
    towerOfHanoiRecursion(n - 1, fromRod, auxRod, toRod);
    console.log(`Move disk ${n} from rod ${fromRod} to rod ${toRod}`);
    towerOfHanoiRecursion(n - 1, auxRod, toRod, fromRod);
  }
};
/* WITH RECURSION & WITHOUT MEMOIZATION --------------------------*/
/* WITH RECURSION & WITH MEMOIZATION -----------------------------*/
/* WITH ITERATION & FOR LOOP --------------------------------------*/
/* WITH ITERATION & WHILE LOOP -------------------------------------*/
