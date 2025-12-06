// Callback with arguments

function calculate(a, b, callback) {
  const result = a + b;
  callback(result);
}

calculate(5, 7, function (res) {
  console.log("Result:", res);   // output : 12 
});
