const DataModel = require('./data_model');

class User {
    constructor(id, firstname, lastname, email, password, matricNumber, program, graduationYear) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.matricNumber = matricNumber;
        this.program = program;
        this.graduationYear = graduationYear;
    }

    getFullName() {
        return this.firstname + " "+ this.lastname;
    }
}

class Users extends DataModel {
    authenticate(email, password) {
        for(let i =  0; i < this.data.length; i++){
            let index = this.data[i];
            if(index.email === email && index.password === password){
                return true;
            }
        }
        return false;
    }

    getByEmail(email) {
       for(let i = 0;i < this.data.length; i++){
           let index = this.data[i];
           if(index.email === email){
               return index;
           }
       }
       return null;
    }

    getByMatricNumber(matricNumber) {
        for(let i = 0;i < this.data.length; i++){
           let index = this.data[i];
           if(index.matricNumber === matricNumber){
               return index;
           }
       }
       return null;
    }
    emptyProperties(obj){
        for(var key in obj){
            if(obj[key] === ""){
            return true;}
        }
        return false;
    }
    validate(obj) {
        if(this.emptyProperties(obj) === false){
            console.log(this.getByEmail(obj.email));
            if(this.getByEmail(obj.email) === null){
                console.log(11);
                if(this.getByMatricNumber(obj.matricNumber) === null){
                    console.log(12);
                    if(obj.password.length >= 7){
                        console.log(13);
                    return true;
                    }
                }
            }
        }
        return false;
    }
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = {
    User,
    Users
};