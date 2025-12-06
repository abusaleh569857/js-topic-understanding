// anonymous function = No name of this function
// purpose : pass as a callback function / use to create arrow function

const add = function(a,b){
    return a*b;
}

result = add(7,9);
console.log(result);

// callback function = it uses as a urgument of another function & executes later

function greet(name, callback) {
    console.log("Hello " + name);
    callback(); // function ke call kora holo
}

greet("Rahim", function() {
    console.log("How are you?");
});
