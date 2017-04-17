class Car {
    public acceleration = 0;
    constructor(public name: string) { }
    honk() {
        console.log(`${this.name} is saying : Tooooooooot!`);
    }
    accelerate(speed: number) {
        this.acceleration += speed;
    }
}
const car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);