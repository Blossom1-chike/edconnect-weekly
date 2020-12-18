const DataModel = require('./data_model');

class Project {
    constructor(id, name, abstract, authors, tags, createdBy) {
        this.id = id;
        this.name = name;
        this.abstract = abstract;
        this.authors = authors;
        this.tags = tags;
        this.createdBy = createdBy;
    }
}

class Projects extends DataModel {
     emptyProperties(obj){
        for(var key in obj){
            if(obj[key] === ""){
            return false;}
        }
        return true;
    }
    validate(obj) {
        if(Array.isArray(obj.authors) && Array.isArray(obj.tags)){
            if(this.emptyProperties(obj) === true){
                return true;
            }
        }
        return false;
    }
}


// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = {
    Project,
    Projects
};