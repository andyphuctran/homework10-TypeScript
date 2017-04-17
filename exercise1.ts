class BankAccount {
    constructor(public money: number) { }
    deposit(value: number): void {
        this.money += value;
    };
}
type Hobbies = string[];
class Person {
    constructor(public name: string, public bankAccount: BankAccount, public hobbies: Hobbies) { }
}

const bankAccount = new BankAccount(2000);
const myself = new Person('Asaad', bankAccount, ['Violin', 'Cooking']);
myself.bankAccount.deposit(3000);
console.log(myself);