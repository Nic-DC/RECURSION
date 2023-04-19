/* STEPS:
Here are the step - by - step rules for using a while loop:
1. Initialize a variable before the loop begins.
2. Define the condition for the loop to continue running.
3. Execute the code block inside the loop.
4. Modify the variable in some way with each iteration of the loop.
5. Update the condition for the loop to continue running based on the modified variable.
6. Repeat steps 3-5 until the condition is no longer met and the loop terminates.
*/

/* EXAMPLE:*/
const whileExample = () => {
  let i = 1; // Initialize the variable
  while (i <= 5) {
    // Define the condition
    console.log(i); // Execute the code block
    i++; // Modify the variable
  }
};
whileExample();

/* Notes
- If the initial condition is never met, the loop will never run. 
- Also, if the condition is never updated, the loop will run indefinitely, 
  which is known as an infinite loop. 
- It's important to be careful when using while loops to ensure that 
  the loop will eventually terminate.
*/
