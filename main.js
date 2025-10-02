// return the sum of two numbers
function addition (num1, num2) {
    return num1 + num2;
}
let sum = addition(15, 27);
console.log(sum);

//function expression
const addition2 = function (numb1, numb2) {
    return numb1 + numb2;
}

//arrow function
const add = (x, y) => x+y;

//Convert minutes to Seconds
function convert (valueMinutes) {
    return valueMinutes * 60;
}
console.log(convert(10));

//Convert hours to minutes
function convertHours (valueHours) {
    return valueHours * 60;
}
console.log(convertHours(3));

//Convert days to hours
function convertDays (valueDays) {
    return valueDays * 24;
}
console.log((convertDays(14)));
