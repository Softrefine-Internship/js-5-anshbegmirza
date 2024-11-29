// Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts. Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.

'use strict';

class BankAccountCl {
  constructor(accNumber, accHolder, accBalance) {
    this.accNumber = accNumber;
    this.accHolder = accHolder;
    this.accBalance = accBalance;
  }

  depositMoney(amt) {
    if (amt > 0) {
      this.accBalance += amt;
      console.log(`Deposited $${amt} to ${this.accHolder}'s account , new balance : $${this.accBalance}`);
    }
    else {
      console.log(`Invalid amount, please enter a positive amount.`);
    }
    return this;
  }

  withdrawMoney(amt) {
    if (amt > 0 && amt <= this.accBalance) {
      this.accBalance -= amt;
      console.log(`Withdrawn $${amt} from ${this.accHolder}' account , current balance : $${this.accBalance}`);
    }
    else if (amt > this.accBalance) {
      console.log(`Insufficient balance, availble : ${this.accBalance}`);
    }
    else {
      console.log(`Invalid withdrawn amount, add a positive amount.`);

    }
    return this;
  }

  transferMoney(amt, toAccount) {
    if (amt > 0 && amt <= this.accBalance) {
      this.accBalance -= amt;
      toAccount.accBalance += amt;

      console.log(`Transferred ${amt} to ${toAccount.accHolder} from ${this.accHolder}`);
      console.log(`Your new balance is ${this.accBalance}`);
    }
    else if (amt > this.accBalance) {
      console.log(`Insufficient balance, availble : ${this.accBalance}`);
    }
    else {
      console.log(`Invalid withdrawn amount, add a positive amount.`);

    }
    return this;
  }
};

const ankurAccount = new BankAccountCl(123, 'Ankur', 20000);
const pratikAccount = new BankAccountCl(456, 'Pratik', 6000);

ankurAccount.depositMoney(2000).withdrawMoney(1000).transferMoney(6000, pratikAccount);
pratikAccount.transferMoney(2000, ankurAccount);