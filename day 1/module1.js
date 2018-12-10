const { PI } = Math;

function sayHelloInEnglish() {
    return "Hello";
};

const sayHelloInFilipino = function() {
    return "Kamusta";
};

module.exports = {
    first: sayHelloInEnglish,
    second: sayHelloInFilipino
}