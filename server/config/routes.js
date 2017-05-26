console.log('Seeing routes');
/**********************************************
        USERS, MESSAGES,COMMENTS ROUTES
**********************************************/
var Users = require('./../controllers/users.js')
var Questions = require('./../controllers/questions.js')
var Answers = require('./../controllers/answers.js')

module.exports = function(app){
    // USERS
    app.get('/users', Users.index);
    app.post('/users', Users.create);
    app.post('/sessions', Users.login);
    // QUESTIONS
    app.get('/questions', Questions.index);
    app.get('/questions/:id', Questions.show);
    app.get('/questions/:id/answer', Questions.show);
    app.post('/questions', Questions.create);
    // ANSWERS
    app.get('/answers', Answers.index);
    app.post('/answers', Answers.create);
}
