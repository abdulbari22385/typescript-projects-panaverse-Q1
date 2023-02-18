function makeSandwich(...items: string[]): void {
  console.log("Sandwich with the following items:");
  items.forEach(item => console.log(`- ${item}`));
  console.log("Enjoy your sandwich!\n");
}

// Call the function with different numbers of arguments
makeSandwich("Bread", "Cheese", "Tomato");
makeSandwich("Bread", "Chicken", "Mayonnaise", "Pickles");
makeSandwich("Bread", "Butter", "Jelly");
