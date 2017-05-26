console.log('Answers Controller');
var mongoose = require('mongoose');
/****************************************
            ANSWERS CONTROLLER
****************************************/
var Answer = mongoose.model('Answer');

module.exports = {
  index: function(req,res){
      console.log("index");
    Answer.find({}).exec(function (err, answers) {
        if(err){
            return res.json(err)
        }
        return res.json(answers);
    })
  },
  create: function(req,res){
    //your code here
    var Answer = new Answer(req.body)
    Answer.save(function(err, answer){
        if(err){
            return res.json(err)
        }
        return res.json(answer)
    })
  }
}
