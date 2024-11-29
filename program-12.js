// Write a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments.

'use strict';

class UniversityCl {
  constructor(name, department) {
    this.name = name;
    this.department = []; // to store different departments
  }

  addDepartment(value) {
    this.department.push(value);
    console.log(`Department : ${value} added`);
    return this;
  }

  removeDepartment(value) {
    const index = this.department.indexOf(value);
    if (index !== -1) {
      this.department.splice(index, 1);
      console.log(`Department : ${value} removed`);
    }
    else {
      console.log(`Department : ${value} Not Found`);
    }
    return this;
  }

  displayAllDepartments() {
    console.log(`Departments of University: ${this.name}`);
    if (this.department.length == 0) {
      console.log(`There are no departments to show`);
    }
    else {
      this.department.forEach(val => {
        console.log(`-${val}`);
      })
    }
    return this;
  }
};

const trial = new UniversityCl('DSU');
trial.addDepartment('CSE').addDepartment('Civil').addDepartment("Mech").removeDepartment('Civil').displayAllDepartments();