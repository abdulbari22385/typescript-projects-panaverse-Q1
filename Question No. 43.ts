function show_magicians(magicians: string[]): void {
  magicians.forEach(magician => console.log(magician));
}

function make_great(magicians: string[]): string[] {
  return magicians.map(magician => `${magician} the Great`);
}

const magicians: string[] = ["Abdullah", "Ali", "Ahmed", "Anus"];
const great_magicians: string[] = make_great([...magicians]);

console.log("Original magicians:");
show_magicians(magicians);

console.log("Great magicians:");
show_magicians(great_magicians);
