//This is my first JavaScript code
console.log('Hello World');

// Premitives/ Value Types
let name = 'Gavin'; // Sting Literal
let age = 30;       // Number Literal
let isApproved = false; //Boolean Literal
let firstName = undefined;
let selectedColor = null; 
console.log(name);

// Reference 
let person = {
    name:'Gavin',
    age:36
};

// Dot Notation
person.name = 'Ethan';

// Bracket Notation
let selection = 'name';
person['name'] = 'Ethan';
person[selection] = 'Macy';

console.log(person.name);

let selectColors = ['red', 'blue'];
console.log(selectColors);
selectColors[2] = 'green';
selectColors[3] = 1;
console.log(selectColors[2]);

console.log(selectColors.length);
typeof selectColors[3];

const interestRate = 0.3;
console.log(interestRate);


function greet(name, lastName = null){
    if(lastName == null){
        console.log('Hello ' + name + '!');
    }
    else{
        console.log('Hello ' + name + ' ' + lastName + '!');
    }
}

greet('Gavin');
greet('Elton', 'Huang');

// Calculating a value
function square(number){
    return number*number;
}

console.log(square(2));




