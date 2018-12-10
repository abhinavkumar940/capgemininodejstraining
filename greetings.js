// const { PI } = Math;

const PI = Math.PI;

function sayHelloInEnglish() {
    return "Hello";
};

const sayHelloInFilipino = function() {
    return "Kamusta";
};

const sayHelloInOtherLanguage = function() {
    // nobody cares about it
}

module.exports = {
    sayHelloInEnglish,
    flipino:            sayHelloInFilipino
}