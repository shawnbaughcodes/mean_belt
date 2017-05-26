console.log('Answer model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

/**************************************
            QUESTION SCHEMA
**************************************/

var AnswerSchema = new mongoose.Schema({
    answer: {
        type: String,
        required: [true, 'Please enter a question']
    },
    support: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true})

var Answer = mongoose.model('Answer', AnswerSchema)
