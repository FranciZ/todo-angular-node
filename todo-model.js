var mongoose = require('mongoose');

var Schema = new mongoose.Schema({

    title       : String,
    dateTime    : { type:Date, default:Date.now },
    done        : Boolean

});

mongoose.model('Todo', Schema);