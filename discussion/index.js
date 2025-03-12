// While Loop
/* -a while loop takes in an expression/condition
    - expression are any unit of code that can be evaluated to a value
    - if the condition evaluate to true, the statements inside the code block will be executed
    - A statement is a command that the programmer gives to the computer
    - A loop will iterate a certain number of times until an expression/condition is met
    
    'iteration' is a term given to the repetition of statements
    
    'syntax':
        while(expression/condition){
            statements
        }
*/

let count = 5;

while (count !== 0) {
  console.log("While: " + count);
  count--;
}

// Do-While Loop
/*
    - works a lot like the while loop
    - do while loops guarantees that the code will be executed at least once

    --syntax:
    do {
    code to execute
    } while (expression/condition)
*/

let number = Number(prompt("Enter a number"));

do {
  console.log("Do while: " + number);
  number += 1;
} while (number < 10);

// For Loop
/*
    - more flexible than the while and do-while loops
    - it consists of three parts:
        - the 'initialization' value that will track the progression of the loop
        - the 'expression/condition' that will be evaluated which will determine whether the loop will run one more time
        - the 'finalExpression' indicates how to advance the loop
        
        - syntax:
            for(initialization; expression/condition; finalExpression) {
                statement
            }
*/

for (let count = 0; count <= 20; count++) {
  // the current value of count is printed out

  console.log(count);
}

let myString = "happy";
console.log(myString.length);

// Will create a loop that will print out the individual letters of the myString variable

for (let x = 0; x < myString.length; x++) {
  // the current value of myString is printed out using its index value

  console.log(myString[x]);
}

for (let i = 0; i < myString.length; i++) {
  console.log(myString[i].toUpperCase());
}

// Continue and Break Statements
/* 
    - the 'continue' statements allows the code to go to the next iteration of the loop without finishing the execution of all statements in a code block
    - the 'break' statement is used to terminate the current loop once a match has been found
*/

for (let count = 0; count <= 15; count++) {
  if (count % 2 === 0) {
    continue;
  }
  console.log("Continue and break: " + count);
  if (count > 10) {
    break;
  }
}
