// Define an interface for the fruit object
interface Fruit {
  name: string;
  color: string;
  price: number;
}

// Create an array of fruit objects
let favoriteFruits: Fruit[] = [
  { name: "apple", color: "red", price: 100 },
  { name: "banana", color: "yellow", price: 200 },
  { name: "orange", color: "orange", price: 300 },
  { name: "kiwi", color: "brown", price: 400 },
  { name: "mango", color: "yellow", price: 500 }
];

// Loop through the array and print each fruit's properties
for(let i = 0; i < favoriteFruits.length; i++) {
  console.log("Name: " + favoriteFruits[i].name);
  console.log("Color: " + favoriteFruits[i].color);
  console.log("Price: pkr" + favoriteFruits[i].price.toFixed(2));
  console.log("");
}
