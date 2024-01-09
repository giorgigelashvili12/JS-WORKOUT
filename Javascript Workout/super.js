// super = Keyword is used in classes to call the constructoror access the properties and methods of a parent
// this - this object
// super - this parent
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }
}
class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}
class Hawk extends Animal {
    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }
}
const rabbit = new Rabbit("Rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);
const hawk = new Hawk("hawk", 3, 50)