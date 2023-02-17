const placesToVisit: string[] = ["Saudi Arab", "Dubai", "Brazil", "Egypt", "Thailand"];

// Print array in its original order
console.log("Original order:");
console.log(placesToVisit);

// Print array in alphabetical order without modifying the original array
console.log("Alphabetical order:");
console.log([...placesToVisit].sort());

// Show that the array is still in its original order
console.log("Original order:");
console.log(placesToVisit);

// Print array in reverse alphabetical order without modifying the original array
console.log("Reverse alphabetical order:");
console.log([...placesToVisit].sort().reverse());

// Show that the array is still in its original order
console.log("Original order:");
console.log(placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:");
console.log(placesToVisit);

// Reverse the order of the list again
placesToVisit.reverse();
console.log("Original order:");
console.log(placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Alphabetical order:");
console.log(placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Reverse alphabetical order:");
console.log(placesToVisit);
