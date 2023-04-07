const moment = require('moment');

// Display the current date
const currentDate = moment().format('dddd, MMMM Do YYYY');
console.log(`Current date: ${currentDate}`);

// Compute the number of years since 1976, November 26th
const targetDate = moment('1976-11-26');
const yearsSince = moment().diff(targetDate, 'years');
console.log(`${yearsSince} years ago`);