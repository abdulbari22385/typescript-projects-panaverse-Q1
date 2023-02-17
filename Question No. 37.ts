function make_shirt(message: string = "I love TypeScript", size: string = "large") {
  console.log(`This is a ${size} shirt with the message "${message}".`);
}

// large shirt with default message
make_shirt();

// medium shirt with default message
make_shirt("I love TypeScript", "medium");

// custom message with any size
make_shirt("TypeScript is awesome!", "small");
