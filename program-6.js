// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.
'use strict'
class EmployeeCl {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  annualSalary() {
    return 12 * this.salary;
  }
};

class ManagerCl extends EmployeeCl {
  constructor(name, salary, department, bonus) {
    super(name, salary);
    this.department = department;
    this.bonus = bonus; // yearly bonus only
  }

  annualSalary() {
    return super.annualSalary() + this.bonus;
  }

};

const vivek = new ManagerCl('Vivek', 12000, 'CSE', 2000);
console.log(vivek.annualSalary());
