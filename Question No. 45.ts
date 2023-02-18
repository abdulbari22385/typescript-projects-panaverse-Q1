interface Car {
  manufacturer: string;
  modelName: string;
  [key: string]: any;
}

function createCar(manufacturer: string, modelName: string, ...args: any[]): Car {
  const car: Car = { manufacturer, modelName };
  args.forEach(arg => {
    const [key, value] = Object.entries(arg)[0];
    car[key] = value;
  });
  return car;
}

// Call the function with required information and additional name-value pairs
const myCar = createCar("Honda", "Civic", { color: "black" }, { hasSunroof: true });

console.log(myCar);
