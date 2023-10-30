// JS Basic

// 1. Print 1 - 135
// Write a program using JavaScript that will print all the numbers from 1 to 135.

// Pseudocode
// 1. use for loop
// 2. console.log all numbers

for (let i = 1; i <= 135; i++) {
  console.log(i);
}

// 2. Print Odd Numbers 1 - 135
// Write a program using JavaScript that will print all the odd numbers from 1 to 135.

// Pseudocode
// 1. Use for loop
// 2. start for loop from 1 and in iterator increase value by 2;
// 3. console.log iterator

for (let i = 1; i <= 135; i += 2) {
  console.log(i);
}

// 3. Sum of Printed Numbers
// Write a program that will print all the numbers from 1 to 135 AND the sum of the numbers
// that have been printed so far. Your output should look similar to this:

// Pseudocode
// 1. create variable result;
// 2. use for loop;
// 3.add iterator value to the result;
// 4. console.log template string with iterator value and result;

let result = 0;
for (let i = 1; i <= 135; i++) {
  result += i;
  console.log(`Number is: ${i} Sum: ${result}`);
}

// 4. Print the elements of an array
// Given an array X = [1,4,2,12], write a program that will iterate through
// the array and print all numbers on the screen.
// Your program should work with arrays of all sizes.

//Pseudocode
// 1. use array method for each;
// 2. inside for each array method call console.log for every element;

X = [1, 4, 2, 12];

X.forEach((element) => console.log(element));

// 5. Find Max
// Given an array X, write a program that would find the maximum value of the array.
// Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero.

//Pseudocode
// 1. create max variable;
// 2. use for loop;
// 3. inside for loop compare whether value of iterator is greater than value of max variable, if yes assign this value to max variable;
// 4. console.log string with value of max variable;

X1 = [2, -3, -1];
let max = X1[0];

for (let i = 0; i < X1.lenght; i++) {
  if (X1[i] > max) max = X1[i];
}

console.log("Max is : " + max);

// 6. Get Average
// Given an array X, write a program that will return the average
//value of all elements in the array. For example, for array X = [2,1,3]
// your output should be 2.

// Pseudocode
// 1. create function findAvg which takes some array as parameter;
// 2. create two variables: totla and count;
// 3. use forEach method for array and add each array element to total variable increasing count variable by 1 on each step;
// 4. return from function result of devisin of total variable over count variable;
// 5. console.log the call of the function with argument of X array;

X2 = [2, 1, 3];

function findAvg(arr) {
  let total = 0;
  let count = 0;

  arr.forEach((el) => {
    total += el;
    count++;
  });

  return total / count;
}

console.log(findAvg(X2));

// 7. Eliminate the Negatives

// Given an array X, write a program that will remove all negative
//  numbers and replace them with a 0. For example, for array X = [2,-1,4,-3]
//  the output of your program should be [2,0,4,0].

// Pseudocode
// 1. Create function removeNegatives which takes some array as parameter;
// 2. Use forEach method for array parameter;
// 3. inside forEach method use if condition to check if element value is less than 0;
// 4. if value is less than 0 assign the element inside of array the value of 0;
// 5. return array from function;
// 6. console.log call of function with argument of array X;

const X3 = [2, -1, 4, -3];

function removeNegatives(arr) {
  arr.forEach((el, i, array) => {
    if (el < 0) {
      array[i] = 0;
    }
  });
  return arr;
}

console.log(removeNegatives(X3));

//8. Number to String
// Write a program that takes an array of numbers and turns the negative values to strings.
//For example, for array X = [1,-4,0,-1] the output should be [1,'Turing,0,'Turing'].

// Pseudocode
// 1. Create function numberToString which takes some array as parameter;
// 2. Use for loop;
// 3. inside for loop use if condition to check if element value is less than 0;
// 4. if value is less than 0 assign the element inside of array the value of strin 'Turing';
// 5. return array from function;
// 6. console.log call of function with argument of array X;

X4 = [1, -4, 0, -1];

function numberToString(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = "Turing";
    }
  }
  return arr;
}

console.log(numberToString(X4));
