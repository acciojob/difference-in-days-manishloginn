 
let dateDiffInDays = function (dateOne, dateTwo) {
  // Write your code here
 
  const oneDay = 24 * 60 * 60 * 1000; // Hours in a day * minutes in an hour * seconds in a minute * milliseconds in a second
  const firstDate = new Date(dateOne);
  const secondDate = new Date(dateTwo);
 
  const diffInTime = secondDate.getTime() - firstDate.getTime();
  const diffInDays = Math.round(diffInTime / oneDay);
  return diffInDays;
};
 
// Do not change the code below.
 
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
