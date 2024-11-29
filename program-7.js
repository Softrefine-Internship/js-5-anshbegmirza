// Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.
'use strict';

class BookCl {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }

  displayDetails() {
    console.log(`Title: ${this.title}, Author : ${this.author}, Publication Year : ${this.publicationYear}`);
  }
};

class Ebook extends BookCl {
  constructor(title, author, publicationYear, price) {
    super(title, author, publicationYear);
    this.price = price;
  }
  displayDetails() {
    console.log(`Title: ${this.title}, Author : ${this.author}, Publication Year : ${this.publicationYear}, Price : ${this.price}`);
  }
};

const book1 = new Ebook('The Alchemist', 'Paulo Coelho', '1988', '$200');
book1.displayDetails();

const book2 = new Ebook('Atomic Habits', 'James Clear', '2018', '$399');
book2.displayDetails();