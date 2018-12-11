const noArray = [12, 5, 6, 7, 32, 5, 9, -19];

let smallest = noArray[0];
let largest  = noArray[0];

for (let i=0; i<noArray.length;i++) {
    if (noArray[i] > largest) {
        largest = noArray[i];
    }

    if (noArray[i] < smallest) {
        smallest = noArray[i];
    }
}

console.log(`The largest number is ${largest}`);
console.log(`The smallest number is ${smallest}`);