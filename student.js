var mongoose = require('mongoose');
//Defining Schema
var studentSchema = mongoose.Schema({


    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    mob: {
        type: String,
        required: true
    },

    quantity: {
        type: String,
        required: true
    },

    price: {
        type: String,
        required: true
    }
});

var stupackage = module.exports = mongoose.model('StudentCollection', studentSchema); //Binding schema

module.exports.addStudent = function(data, callback) {
    stupackage.create(data, callback);
}
module.exports.getStudentByField = function(ret, callback) {
    stupackage.find({name:ret}, callback);
}
module.exports.updateStudent = function(name, data, options, callback) {
    var query = {
        name: name
    };
    var update = {
        name: data.name,
        email: data.email,
        mob: data.mob,
        quantity: data.quantity,
        price: data.price
    }
    stupackage.findOneAndUpdate(query, update, options, callback);
}
module.exports.removeStudent = function (name, callback) {
    var query = {
        name: name
    };
    stupackage.remove(query, callback);
}
module.exports.getDetails = function(callback) {
    stupackage.find(callback);
}
