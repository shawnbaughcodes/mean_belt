console.log('Users model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

/**************************************
            USER SCHEMA
**************************************/

var UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, 'please enter valid name']
    },
    question: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }],
    answer: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Answer'
    }],},
    {timestamps: true})

var User = mongoose.model('User', UserSchema)
