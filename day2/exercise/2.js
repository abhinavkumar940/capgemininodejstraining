function calculateArea(radius) {
    // area of a circle is PI * R * R

    const PI = Math.PI;

    return PI * radius * radius;
}

const area1 = calculateArea(3);

console.log(area1);