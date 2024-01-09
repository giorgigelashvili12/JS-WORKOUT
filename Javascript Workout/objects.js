// objects = A collection of related properties and/or methods. Can represent real world objects.
// syntax:  object = {key:value,
//                    function()}     
const person = {
    firstName: "Gio",
    lastName: "Gelashvili",
    age: 13,
    isEmployed: false,
    sentence: `Hello, my name is ${this.firstName}`
    // two lessons combined!
    // withoiut this. firstName is undefinded.
}
console.log(person.firstName) // . and value to output it