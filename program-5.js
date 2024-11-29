// Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

'use strict';

class ShapeCl {
  constructor(pi) {
    this.pi = pi = 3.14;
  }
  area() {
    return 0;
  }
};

class CircleCl extends ShapeCl {
  constructor(radius, pi) {
    super(pi);
    this.radius = radius;
  }

  area() {
    console.log(`Area of circle with radius ${this.radius} is ${this.pi * this.radius ** 2}`);
  }
};

class TriangleCl extends ShapeCl {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  area() {
    console.log(`Area of Tirangle with Base : ${this.base} and Height : ${this.height} is ${0.5 * this.base * this.height}`);
  }
}


const circle1 = new CircleCl(12);
const circle2 = new CircleCl(10);

circle1.area();
circle2.area();

const rightAngleTriangle = new TriangleCl(12, 30);
rightAngleTriangle.area();