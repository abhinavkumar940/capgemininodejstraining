const year = 2018;

const remainder = year % 4;

let isLeapYear;

if (remainder == 0) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year`);
}