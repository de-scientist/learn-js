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


//Greeting Based on Time
function greetUser (username, hour) {
    if (hour >= 5 && hour <= 11) {
        console.log(`Good morning, ${username}`);
    } else if (hour >= 12 && hour <= 17) {
        console.log(`Good afternoon, ${username}`);
    } else if (hour >= 18 && hour <= 21) {
        console.log(`Good evening, ${username}`);
    } else if (hour >= 22 || hour <= 4) {
        console.log(`Good night, ${username}`);
    }
}
greetUser('Mark', 10);


//FizzBuzz
function fizzBuzzCheck (number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return 'FizzBuzz';
    } else if (number % 3 === 0) {
        return 'Fizz';
    } else if (number % 5 === 0) {
        return 'Buzz';
    } else {
        return String(number)
    }
}
console.log(fizzBuzzCheck(6));;
console.log(fizzBuzzCheck(10));
console.log(fizzBuzzCheck(30));
console.log(fizzBuzzCheck(31));



//Another Perimeter
function perimeter2 (shape, value) {
    if (shape === 's') {
        return 4 * value;
    } else if (shape === 'c') {
        return 2 * Math.PI * value;
    }
}
console.log(perimeter2('s', 5));
console.log(perimeter2('c', 7));


//Sum of Even Numbers
function sumEvenNumbers (num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            sum += i;
        } 
    }
    return sum;
}
console.log(sumEvenNumbers(10));
console.log(sumEvenNumbers(15));


//Multiply by itself without using math.pow using a for loop
function powerUp (num, power) {
    let result = 1;
    for (let i = 1; i <= power; i++) {
        result *= num;
    }
    return result;
}
console.log(powerUp(2,0));


//Multiply by itself without using math.pow using a while loop

function powerUpWhile (num, power) {
    let result = 1;
    let i = 1;

    while (i <= power) {
        result *= num;
        i++;
    } 
    return result;
}
console.log(powerUpWhile(2, 3));
console.log(powerUpWhile(3, 4));



//Factorial Calculator using a for loop
function factorial(numb) {
    let result = 1;
    for (let i = 1; i <= numb; i++) {
        result *= i
    }
    return result;
}
console.log(factorial(6));


//Factorial Calculator using a while loop
