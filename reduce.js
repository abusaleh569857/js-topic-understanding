// reduce = a method which is Popular to Single value return but it can be return anything like value , array , object
const number = [1, 2, 3, 4, 5];

const initialState = 10;

const reducer = (accummulator, itemValue) => accummulator + itemValue;

const result = number.reduce(reducer, initialState);

console.log("Result is :", result);
