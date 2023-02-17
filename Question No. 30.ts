let usernames: string[] = ['Ali', 'Ahmed', 'Abdullah', 'Ali', 'Admin'];

for (let username of usernames) {
  if (username === 'Admin') {
    console.log('Hello admin, would you like to see a status report?');
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}
