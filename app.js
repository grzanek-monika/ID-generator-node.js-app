/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const fs = require('fs');

const genders = ['F', 'M'];
const maleNames = ['Adam', 'Michael', 'Peter', 'John', 'Tom', 'Martin'];
const femaleNames = ['Monica', 'Eveline', 'Emily', 'Miley', 'Bella', 'Diana'];
const lastNames = ['Smith', 'Jordan', 'Pollo', 'Doe', 'Wilson', 'Rayan', 'Parker', 'Kingston'];
const phoneNumbers = ['607-690-543', '696-592-002', '607-892-345', '789-065-231', '510-765-390'];

const randChoice = arr => {
    return arr[Math.floor(Math.random() * arr.length)]
}

const people = [];

for(let i = 0; i < 20; i++) {
    const person = {};
    person.gender = randChoice(genders);
    if(person.gender === 'F') {
        person.firstName = randChoice(femaleNames);
    } else {
        person.firstName = randChoice(maleNames);
    }
    person.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    person.age = Math.floor((Math.random() * 60) + 18);
    person.phone = phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)];
    person.email = person.firstName.toLowerCase() + '.' + person.lastName.toLowerCase() + '@example.com';

    people.push(person);
}

fs.writeFile('people.json', JSON.stringify(people), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });     