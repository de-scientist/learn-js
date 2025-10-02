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

//Find the perimeter of a rectangle
function perimeter (length, width) {
    return 2 * (length + width);
}
console.log(perimeter(15, 25));

//Find the area of a rectangle
function area (length, width) {
    return length * width;
}
console.log(area(25, 35));

//Check if Negative
function isNegative (number) {
    if (number < 0)  {
        return true;
    } else {
        return false;
    }
}
console.log(isNegative(-25));
console.log(isNegative(35));

//Check if positive
function isPositive (number) {
    if (number > 0) {
         return true;
    } else {
        return false;
    }
}
console.log(isPositive(50));

//Check if I can drive
function canIDrive (username, age) {
    if (age >= 18) {
        return `Yes, ${username}, is old enough to drive`;
    } else {
        return `No, ${username}, is not old enough to drive`;
    }
}
console.log(canIDrive('Mark', 23));
console.log(canIDrive('Jane', 15));
;

//Find largest of three numbers
function findLargest (num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    }
    else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}
console.log(findLargest(25, 35, 15));


//Find the smallest of three numbers
function findSmallest (num1, num2, num3) {
    if (num1 <= num2 && num1 <= num3) {
        return num1;
    } else if (num2 <= num1 && num2 <= num3) {
        return num2;
    } else {
        return num3
    }
} 
console.log (findSmallest(25, 35, 15));


//BMI Calculator
function bmiCalculator (weight, height) {
    let bmi = weight / (height * height);
    return Math.round(bmi);

    if (bmi < 18.5) {
        return `Your BMI is ${bmi}, so you are underweight.`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return `Your BMI is ${bmi}, so you have a normal weight.`;
    } else {
        return `Your BMI is ${bmi}, so you are obese 🫂🫂.`;
    }

}
console.log(bmiCalculator(65, 1.8));
console.log(bmiCalculator(54, 1.6));

