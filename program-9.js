// Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.

'use strict';

class BankCl {
  constructor(name, branches) {
    this.name = name;
    this.branches = []; // to store different branches.
  }

  addBranch(value) {
    this.branches.push(value);
    console.log(`Branch ${value} added`);
    return this;
  }

  removeBranch(value) {
    const index = this.branches.indexOf(value);
    if (index !== -1) {
      this.branches.splice(index, 1);
      console.log(`Branch ${value} removed`);

    }
    else {
      console.log(`Branch ${value} not found`);

    }
    return this;
  }

  displayAllBranches() {
    console.log(`Branches of ${this.name}`);

    if (this.branches.length == 0) {
      console.log(`There are no branches of ${this.name}`);
    }
    else {
      this.branches.forEach(branchName => {
        console.log(`- ${branchName}`);
      });
    }
    return this;
  }
};

const bank1 = new BankCl(`SBI`);
bank1.addBranch('Diwan Chowk').addBranch('Jnd Branch').addBranch('Rajkot Branch').removeBranch('Diwan Chowk').displayAllBranches().addBranch('Ahmedabad Branch').displayAllBranches();