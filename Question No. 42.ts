function show_magicians(magicians: string[]): void {
  magicians.forEach(magician => console.log(magician));
}

function make_great(magicians: string[]): string[] {
  return magicians.map(magician => `${magician} the Great`);
}

let magicians: string[] = ["Abdullah", "Ali", "Ahmed", "Anus"];

magicians = make_great(magicians);
show_magicians(magicians);
