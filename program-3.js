// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.

'use strict';

class VehicleCl {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayDetails() {
    console.log(`Make : ${this.make}, Model : ${this.model}, Year : ${this.year}`);
  }
};


class CarCl extends VehicleCl {
  constructor(make, model, year, noOfDoors) {
    super(make, model, year);
    this.noOfDoors = noOfDoors;
  }

  displayDetails() {
    console.log(`Make : ${this.make}, Model : ${this.model}, Year : ${this.year}, No. of Doors : ${this.noOfDoors}`);
  }
}

const mahindra = new VehicleCl('Mahindra', 'Scorpio S11', 2017);
mahindra.displayDetails();

const ford = new CarCl('Ford', 'Endeavour', 2024, 4);
ford.displayDetails();