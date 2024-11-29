//  Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

'use strict';

class RectangleCl {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return (this.width + this.height) * 2;
  }
}

const bigRect = new RectangleCl(30, 10);
const smallRect = new RectangleCl(6, 12)

console.log(`The area of Big Rectangle is ${bigRect.area()}`);
console.log(`The area of Small Rectangle is ${smallRect.area()}`);

console.log(`The perimeter of Big Rectangle is ${bigRect.perimeter()}`);
console.log(`The perimeter of Small Rectangle is ${smallRect.perimeter()}`);

