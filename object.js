const school = {
    nameOfSchool: "Mark II Academy",
    location: "New York",
    established: 2030,
    principal: "Jane Wanjiru",

}

school.population = 5000;
school.motto = "Learn, Earn, Return";

console.log(school);

/*school.form1.classTeacher = "Mr. Isaac";
school.form2.classTeacher = "Ms. Hildah";
school.form3.classTeacher = "Mr. Ndegwa";
school.form4.classTeacher = "Mrs. Joan";*/

//To access a property of an object we use the dot notation
console.log(school.nameOfSchool);

//object.freeze() method freezes an object. A frozen object can no longer be changed or modified.
const simpleObject = {
    nameJ: "John",
    age: 25
}
Object.freeze(simpleObject);
simpleObject.age = 30; // This will not change the age property