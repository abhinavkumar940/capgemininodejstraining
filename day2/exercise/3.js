const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"    
];

const currentDate = new Date();

const dayIndex = currentDate.getDay();

const dayName = days[dayIndex];

console.log(`Today is: ${dayName}`);