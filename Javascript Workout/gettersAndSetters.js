// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writng a property
//////////////////////////////////////////////////////////////
class Rectangle {
    // constructor(width, height) {
    //     this.width = width;
    //     this.height = height;
    // } 
    // commented because of the second example
    // setters
    set width(newWidth) {
        if(newWidth > 0) {
            this._width = newWidth;
            // tells other developers that it is a
            // private property and you shouldn't touch it,
            // this property _width is different from the standart
        } else {
            console.error("Width must be a positibe number!");
            // .error sends an error text
        }
    }
    set height(newHeight) {
        if(newHeight > 0) {
            this._height = newHeight;
        } else {
            console.error("Height must be a positive number!");
        }
    }
    // getters
    get width() {
        // return this._width.toFixed(1);
        return `${this._width.toFixed(1)}cm`;
    }

    get height() {
        // return this._height.toFixed(1);
        return `${this._height.toFixed(1)}cm`;
    }

    get area() {
        // return (this._width * this._height).toFixed(1);
        // area is 20
        return `${this._area.toFixed(1)}cm`;
    }
}

const rectangle = new Rectangle(-100, "pizza");
rectangle.width = 5;
rectangle.height = 4;
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
// second example
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set firstName(newFirstName) {
        if(typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstName = newFirstName;
        } else {
            console.error("First name must be a non-empty string");
        }
    }
    set lastName(newLastName) {
        if(typeof newLastName === "string" && newLastName.length > 0) {
            this._lastName = newLastName;
        } else {
            console.error("First name must be a non-empty string");
        }
    }
    set age(newAge) {
        if(typeof newAge === "number" && newAge >= 0) {
            this._age = newAge;
        } else {
            console.error("Age must be a non-negative number");
        }
    }
    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }
    get fullName() {
        return this._firstName + " " + this._lastName;
    }
    get age() {
        return this._age;
    }
}

const person = new Person(420, 69, "pizza");
// without getters setters are undefined, but with getters they are defined