const students = ["Kibet", "Babra", "Winnie", "Mark", "Itotia", "Irene", "Jeff"];
console.log(students[3]);
console.log(students.length);

//method is a function that is a property of an object
//array is an object
//pop method removes the last method of an array
console.log(students);
students.pop();
console.log(students);

//push method adds an element to the end of an array
console.log(students);
students.push("Brian", "Joyce", "Kennedy");
console.log(students);

//shift method removes the first element of an array
console.log(students);
students.shift();
console.log(students);

//unshift method adds an element to the beginning of an array
console.log(students);
students.unshift('Jane', 'Hildah');
console.log(students);

//at method returns the element at the specified index
console.log(students);
console.log(students.at(4));

//toString method converts an array to a string


//join method joins all elements of an array into a string
console.log(students);
console.log(students.join('-'));

//concat method merges two or more arrays
const girls = ['Jane', 'Hildah', 'Babra'];
const boys = ['Kibet', 'Mark', 'John', 'Ken'];
const allStudents = girls.concat(boys);
console.log(allStudents);

//indexOf method returns the first iindex at which a given element can be found in the array
console.log(students);
console.log(students.indexOf('Mark'));
console.log(students.indexOf('Denny')); //returns -1 if the element is not found














