let guest: string[] = ["Ahmed", "Ali", "Abdullah"];

for (let i = 0; i < guest.length; i++) {
  console.log(`Dear ${guest[i]}, you are cordially invited to dinner.`);
}

console.log(`Unfortunately, ${guest[1]} cannot make it to dinner.`);

guest[1] = "Ahmed";

console.log("Good news, we found a bigger dinner table!");

guest.unshift("Hamza");
guest.splice(Math.ceil(guest.length / 2), 0, "Hassan");
guest.push("Haris");

for (let i = 0; i < guest.length; i++) {
  console.log(`Dear ${guest[i]}, you are cordially invited to dinner.`);
}
