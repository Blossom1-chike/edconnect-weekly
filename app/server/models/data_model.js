class DataModel {
    constructor() {
        this.data = [];
    }

    getAll() {
        return this.data;
    }

    getById(id) {
       for(var i=0;i < this.data.length;i++){
           const index = this.data[i];
            if(index.id === id){
                return index;
            }
        }
       return null;
    }

    save(obj) {
        if (this.validate(obj)) {
            this.data.push(obj);
            return true;
        }
        return false;
    }

    update(obj, id) {
        for(var i=0;i < this.data.length;i++){
            const index = this.data[i];
            if(index.id === id){
                for(var key in obj){
                        index[key] = obj[key];
                }
                return true;
            }
        }
       return false;
    }

    delete(id) {
            for(var i=0;i < this.data.length;i++){
                const index = this.data[i];
                    if(index.id === id){
                       this.data.splice(i,1);
                       return true;
                    }
            }
       return false;
    }

    // this method will be overriden in the sub classes
    validate(obj) {
        return false;
    }
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = DataModel;