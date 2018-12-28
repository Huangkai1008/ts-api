class Greeter {
    greeting: string;

    // 构造方法
    constructor(message: string) {
        this.greeting = message;
    }

    greet(): string {
        return `hello, ${this.greeting}`;
    }
}

let greeter = new Greeter('huang');

console.log(greeter.greet());

// 继承
class Animal {
    move(distanceInMeters: number = 0): void {
        console.log(`Animal moved ${distanceInMeters}m`);
    }
}

class Dog extends Animal {
    bark(): void {
        console.log(`Wow~~~`);
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();


class ComplexAnimal {
    name: string;

    constructor(theName: string) {
        this.name = theName;
    }

    move(distance: number): void {
        console.log(`${this.name} moved ${distance}m`);
    }
}


class Snake extends ComplexAnimal {
    constructor(name: string) {
        super(name);
    }

    move(distance: number = 5): void {
        console.log('snake');
        super.move(distance);
    }
}

class Horse extends ComplexAnimal {
    constructor(name: string) {
        super(name);
    }

    move(distance: number = 87): void {
        console.log('horse');
        super.move(distance);
    }
}

// 存取器
let password = 'secret key';

class Employee {
    private _fullName: string;


    get fullName(): string{
        return this._fullName;
    }


    set fullName(value: string) {
        this._fullName = value;
    }
}


// 抽象类
abstract class AbcAnimal {
    abstract makesound: void;

    
}
