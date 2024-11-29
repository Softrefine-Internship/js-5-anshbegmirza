// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

'use strict';

class BankAccountCl {
  constructor(accNumber, accBalance) {
    this.accNumber = accNumber;
    this.accBalance = accBalance;
  }

  depositMoney(amount) {
    this.accBalance += amount;
    return this;
  }

  withdrawMoney(amount) {
    this.accBalance -= amount;
    return this;
  }

  displayAccBalance() {
    console.log(`Account Number: ${this.accNumber}, Account Balance : ${this.accBalance}`);
  }
};

const myAccount = new BankAccountCl(69789, 1000);
myAccount.depositMoney(2000).depositMoney(2500).withdrawMoney(3000).displayAccBalance();

const savingsAccount = new BankAccountCl(123456, 5000);
savingsAccount.depositMoney(1000).depositMoney(1500).depositMoney(600).withdrawMoney(900).displayAccBalance();