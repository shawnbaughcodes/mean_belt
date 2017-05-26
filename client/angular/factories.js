/******************************************
            USER FACTORY
******************************************/
app.factory('UserFactory', function($http, $cookies) {
    console.log('loading factories');

    var factory = {}

    // USERS INDEX
    factory.index = function(callback){
        $http.get('/users').then(callback)
    }
    // USERS CREATE
    factory.create = function(newUser, callback){
        $http.post('/users', newUser).then(callback)
    }
    // USERS SESSION
    factory.session = function(callback) {
        var user_id = $cookies.get('user_id');
    		if(!user_id){
    			return callback(false);
    		}
    		$http.get('/users/' + user_id).then(function(res){
    			if(res.data.errors){
    				return callback(false)
    			}
    			return callback(res.data);
    		})
    	}
    // USERS LOGIN
    factory.login = function(loginUser, callback){
        $http.post('/sessions', loginUser).then(callback);
    }

    return factory;
})
/******************************************
            QUESTIONS FACTORY
******************************************/
app.factory('QuestionFactory', function($http, $cookies) {
    console.log('loading factories');

    var factory = {}


    factory.index = function(callback){
        $http.get('/questions').then(callback)
    }
    factory.create = function(newQuestion, callback){
        $http.post('/questions', newQuestion).then(callback)
    }
    factory.show = function(question_id, callback){
        $http.get('/questions/' + question_id + '/answer').then(callback)
    }

    return factory
})

/******************************************
            ANSWER FACTORY
******************************************/
app.factory('AnswerFactory', function($http, $cookies) {
    console.log('loading factories');

    var factory = {}

    factory.index = function(callback){
        $http.get('/answers').then(callback)
    }
    factory.create = function(newAnswer, callback){
        $http.post('/answers', newAnswer).then(callback)
    }

    return factory
})
