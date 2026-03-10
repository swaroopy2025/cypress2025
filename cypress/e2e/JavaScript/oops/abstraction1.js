class BankAccount {

    #balance = 0; // private variable 
    deposit(amount) {
        this.#balance += amount;

    }
    getBalance() {
        return this.#balance;

    }
}

let account = new BankAccount();
account.deposit(-500);
console.log(account.getBalance()); 
