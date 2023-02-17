let num1 = 10;
let num2 = 20;
let str1 = "hello";
let str2 = "world";
let bool1 = true;
let bool2 = false;

console.log(`Is ${num1} greater than ${num2}? I predict False.`);
console.log(num1 > num2);

console.log(`Is ${str1} not equal to ${str2}? I predict True.`);
console.log(str1 !== str2);

console.log(`Is ${bool1} and ${bool2} equal to ${bool1 || bool2}? I predict True.`);
console.log(bool1 && bool2 === bool1 || bool2);

console.log(`Is ${num1} plus ${num2} greater than or equal to ${num1 * 3}? I predict True.`);
console.log(num1 + num2 >= num1 * 3);

console.log(`Is ${str1} less than to ${str2}? I predict True.`);
console.log(str1 < str2);

console.log(`Is ${num2} not divisible by ${num1}? I predict False.`);
console.log(num2 % num1 !== 0);

console.log(`Is ${bool1} or ${bool2} not equal to ${!bool2}? I predict True.`);
console.log(bool1 || bool2 !== !bool2);

console.log(`Is ${str1} equal to 'Hello'? I predict False.`);
console.log(str1 === 'Hello');

console.log(`Is ${num2} less than or equal to ${num1}? I predict False.`);
console.log(num2 <= num1);

console.log(`Is ${bool1} and ${bool2} both true? I predict False.`);
console.log(bool1 && bool2);
