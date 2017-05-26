console.log('Users Controller');
var mongoose = require('mongoose');
/****************************************
            USERS CONTROLLER
****************************************/
var User = mongoose.model('User');

module.exports = {
  index: function(req,res){
      console.log("index");
    User.find({}).exec(function (err, users) {
        if(err){
            return res.json(err)
        }
        return res.json(users);
    })
  },
  create: function(req,res){
    //your code here
    var user = new User(req.body)
    user.save(function(err, user){
        if(err){
            return res.json(err)
        }
        return res.json(user)
    })
  },
  login: function(req, res) {
      User.findOne({fullname: req.body.fullname}, function(err, user){
        if(err){
            return res.json(err)
        }
        return res.json(user)
    })
  }
}
