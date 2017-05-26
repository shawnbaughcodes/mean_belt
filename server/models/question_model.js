console.log('Question model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

/**************************************
            QUESTION SCHEMA
**************************************/

var QuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, 'Please enter a question.']
    },
    description: {
        type: String,
    },
    answer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Answer'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true})

var Question = mongoose.model('Question', QuestionSchema)
