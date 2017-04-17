class Person{
    private _firstName:string='';
    get firstName(){
        return this._firstName;
    }
    set firstName(newName:string){
        this._firstName=newName.toUpperCase();
    }
}

let person=new Person();
console.log(person.firstName);
person.firstName='Asaad';
console.log(person.firstName);