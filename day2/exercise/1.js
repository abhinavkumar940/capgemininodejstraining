var today = new Date();

var christmas2018 = new Date('2018-12-25');

var noOfDaysInMiliseconds = christmas2018 - today;

var noOfDaysInSeconds = noOfDaysInMiliseconds / 1000;

var noOfDays = noOfDaysInSeconds / 86400; // 86400 is the no of seconds in a day 24 * 60 * 60

console.log(noOfDays);