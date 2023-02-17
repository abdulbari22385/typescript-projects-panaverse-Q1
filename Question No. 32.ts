let current_users: string[] = ["John", "Mary", "David", "Sara", "Bob"];
let new_users: string[] = ["Amy", "Mary", "Jack", "JOHN", "Kate"];

for (let user of new_users) {
  if (current_users.includes(user) || current_users.includes(user.toLowerCase())) {
    console.log(`Sorry, the username "${user}" is already taken. Please choose a new username.`);
  } else {
    current_users.push(user);
    console.log(`Congratulations, the username "${user}" is available.`);
  }
}
