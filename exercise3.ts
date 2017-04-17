class BaseObject {
    width = 0;
    length = 0;
}
class Shape extends BaseObject {
    calcSize() {
        return this.width * this.length;
    }
}

let rectangle = new Shape();
rectangle.width = 5;
rectangle.length = 2;
console.log(rectangle.calcSize());