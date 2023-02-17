let name: string = "Abdul Bari";
console.log(name.toLowerCase());

console.log(name.toUpperCase());

function toTitleCase(str: string): string {
  return str.replace(/\w\S*/g, (txt: string) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
console.log(toTitleCase(name));
