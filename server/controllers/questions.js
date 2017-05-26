console.log('Questions Controller');
var mongoose = require('mongoose');
/****************************************
            QUESTIONS CONTROLLER
****************************************/
var Question = mongoose.model('Question');

module.exports = {
  index: function(req,res){
      console.log("index");
    Question.find({}).exec(function (err, questions) {
        if(err){
            return res.json(err)
        }
        return res.json(questions);
    })
  },
  create: function(req,res){
    //your code here
    var question = new Question(req.body)
    console.log(req.body);
    question.save(function(err, question){
        if(err){
            return res.json(err)
        }
        return res.json(question)
    })
  },
  show: function(req,res){
    //your code here
    Question.findById(req.params.id).exec(function(err, question){
        if(err){
            return res.json(err)
        }
        return res.json(question);
    })
  }
}
