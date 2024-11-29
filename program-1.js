// Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

'use strict';

class PersonCl {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  displayDetails() {
    console.log(`Name : ${this.name}, Age : ${this.age}, Country: ${this.country}`);
  }

};

const ankur = new PersonCl('Ankur', 20, 'India');
const pratik = new PersonCl('Pratik', 21, 'India');
ankur.displayDetails();
pratik.displayDetails();