// Array destructuring with rest operator
const numbers = [1, 2, 3, 4, 5];

const [first, second, ...restNumbers] = numbers;

console.log(first);
console.log(second);
console.log(restNumbers);

// Object Destructuring with rest operator
const meal = {
  name: "Pasta",
  category: "Italian",
  price: 10,
  rating: 4.5
};

const { name, ...details } = meal;

console.log(name);     
console.log(details); 
console.log(Array.isArray(details)); 

