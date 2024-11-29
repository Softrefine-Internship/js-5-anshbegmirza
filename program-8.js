// Write a JavaScript program that creates a class called 'Animal' with properties for species and sound. Include a method to make the animal's sound. Create a subclass called 'Dog' that inherits from the 'Animal' class and adds an additional property for color. Override the make sound method to include the dog's color. Create an instance of the 'Dog' class and make it make its sound.
'use strict';

class AnimalCl {
  constructor(species, sound) {
    this.species = species;
    this.sound = sound;
  }

  makeSound() {
    console.log(`This animal ${this.species}'s Sound ${this.sound}`);
  }
};

class DogCl extends AnimalCl {
  constructor(species, sound, color) {
    super(species, sound);
    this.color = color;
  }

  makeSound() {
    console.log(`Dog with color ${this.color}, ${this.sound}`);
  }
};

const dog1 = new DogCl('German Shepherd', 'Barking', 'Black');
dog1.makeSound();
