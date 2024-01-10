// Nested Objects = Objects inside of other objects like in html
//                  allows you to represent more complex data structures
//                  child object is enclosed by a parent object

//      Person{Adress(), ContactInfo()}
//      ShoppingCart{Keyboard(), Mouse(), Monitor()} 
const person = {
    fullName: "shalva shavgurashvili",
    age: 60,
    isElder: true,
    hobbies: ["Building", "Drinking", "Fishing"],
    adress: {
        street: "Toris qucha N:22",
        city: "Borjomi",
        country: "Georgia",
    }
}

for(const property in person.adress){
    console.log(person.adress[property]);
}
/////////////////////////////////////////////////////////
class Adress {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

class People {
    constructor(name, age, ...adress) {
        this.name = name;
        this.age = age;
        this.adress = new Adress(...adress);
    }
}

const person1 = new person("Jorjika", 20, "Magari street", "Qutaisi", "Georgia");
const person2 = new person("Mamuka", 17, "Pro street", "Zugdidi", "Georgia");