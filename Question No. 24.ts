let str1: string = "hello";
let str2: string = "world";
let num1: number = 5;
let num2: number = 10;
let arr: number[] = [1, 2, 3, 4, 5];

// Tests for equality and inequality with strings
console.log(`Is str1 equal to str2? I predict False.`);
console.log(str1 === str2);

console.log(`Is str1 not equal to str2? I predict True.`);
console.log(str1 !== str2);

// Tests using the lowercase function
console.log(`Is str1 lowercase? I predict True.`);
console.log(str1.toLowerCase() === "hello");

console.log(`Is str2 lowercase? I predict False.`);
console.log(str2.toLowerCase() === "world");

// Numerical tests involving equality and inequality, greater than and less than, 
// greater than or equal to, and less than or equal to
console.log(`Is num1 equal to num2? I predict False.`);
console.log(num1 === num2);

console.log(`Is num1 not equal to num2? I predict True.`);
console.log(num1 !== num2);

console.log(`Is num1 greater than num2? I predict False.`);
console.log(num1 > num2);

console.log(`Is num1 less than num2? I predict True.`);
console.log(num1 < num2);

console.log(`Is num1 greater than or equal to num2? I predict False.`);
console.log(num1 >= num2);

console.log(`Is num1 less than or equal to num2? I predict True.`);
console.log(num1 <= num2);

// Tests using "and" and "or" operators
console.log(`Is num1 greater than 0 and less than 10? I predict True.`);
console.log(num1 > 0 && num1 < 10);

console.log(`Is num2 greater than 0 and less than 10? I predict False.`);
console.log(num2 > 0 && num2 < 10);

console.log(`Is num1 greater than 0 or num2 greater than 0? I predict True.`);
console.log(num1 > 0 || num2 > 0);

console.log(`Is num1 less than 0 or num2 less than 0? I predict False.`);
console.log(num1 < 0 || num2 < 0);

// Test whether an item is in an array
console.log(`Is 3 in the array? I predict True.`);
console.log(arr.includes(3));

console.log(`Is 6 in the array? I predict False.`);
console.log(arr.includes(6));

// Test whether an item is not in an array
console.log(`Is 3 not in the array? I predict False.`);
console.log(!arr.includes(3));

console.log(`Is 6 not in the array? I predict True.`);
console.log(!arr.includes(6));
