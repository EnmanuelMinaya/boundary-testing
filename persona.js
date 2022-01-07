//nombre 2 hasta 64 no empty or full spaces or start or finish with spaces
//apellido 2 hasta 128
//edad

const { COMPARISON_BINARY_OPERATORS } = require("@babel/types");




class Person {
    constructor(name, lastName, age) {

        if (name.length < 2 || name.length > 64) throw new Error("invalid name error")
        else if (name[0] == ' ') throw new Error("name starting with spaces error")
        else if (name[name.length - 1] == ' ') throw new Error("name ending with spaces error")
        else {
            this.name = name;
        }


        if (lastName.length < 2 || lastName.length > 64) throw new Error("invalid lastname error")
        else if (lastName[0] == ' ') throw new Error("lastname starting with spaces error")
        else if (lastName[lastName.length - 1] == ' ') throw new Error("lastname ending with spaces error")
        else {
            this.lastName = lastName;
        }
        this.age = age;
        Object.freeze(this);
    }
}



module.exports = Person;