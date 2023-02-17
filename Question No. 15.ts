let guestList: string[] = ['Abdullah', 'Ahmed', 'Ali'];
console.log(`Unfortunately, ${guestList[2]} can't make it to dinner.`);

guestList[2] = 'Anus';

for (let guest of guestList) {
  console.log(`Dear ${guest}, please join me for dinner at my house.`);
}
