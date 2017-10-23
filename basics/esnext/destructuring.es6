/**
 * @author Sven Koelpin
 */

const person = {
    firstName: "Max",
    lastName: "Mustermann",
    age: 54
};

//1. destructure the firstName and the age and log them to console
let {firstName, age} = person;
console.log(firstName);
console.log(age);
//2. destructure the lastName but give the variable a different name.
let {lastName: nachname} = person;
console.log(nachname);


//array destructuring
const arr = [1, 2, 3];
//1. destructure only the second value from the array and log it to console
let [, second,] = arr;
console.log(second);
