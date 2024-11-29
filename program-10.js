// Write a JavaScript program that creates a class called Product with properties for product ID, name, and price. 
//Include a method to calculate the total price by multiplying the price by the quantity.
//Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period.Override the total price calculation method to include the warranty period.Create an instance of the PersonalCareProduct class and calculate its total price.
'use strict';

class ProductCl {
  constructor(Id, name, price) {
    this.Id = Id;
    this.name = name;
    this.price = price;
  }

  totalPrice(qty) {
    return this.price * qty;
  }
};

class PersonalCareProductCl extends ProductCl {
  constructor(Id, name, price, warrantyPeriod) {
    super(Id, name, price);
    this.warrantyPeriod = warrantyPeriod;
  }

  totalPrice(qty, warrantyCostPerPeriod) {
    const basePrice = super.totalPrice(qty);
    const warrantyCost = this.warrantyPeriod * warrantyCostPerPeriod;
    // 5 rupees per period (for example)
    return basePrice + warrantyCost;
  }
};

const product1 = new PersonalCareProductCl(1, 'Soap', 120, 20);
console.log(`Name : ${product1.name} Total Price, : ${product1.totalPrice(30, 5)}`);