/**************************************
    ANGULAR USERS CONTROLLER
**************************************/
app.controller('UsersController', function(UserFactory, $cookies, $location){
    console.log('Loading Users Controller');
    // GLOBAL SHIT
    var self = this
    self.registration_errors = []
    self.login_errors = []

    // SESSION SHIT
    self.session = function(){
		UserFactory.session(function(user){
			console.log('user: ', user);
			if(user){
				self.current_user = user;
			} else {
				$location.url('/');
			}
		})
	}

    // LOGIN SHIT
    self.login = function(loginUser) {
        self.login_errors = []
        UserFactory.login(loginUser, function(res){
            // if(res.data.errors){
            //     for(key in res.data.errors){
            //         var error = res.data.errors[key];
            //         self.login_errors.push(error.message)
            //     }
            // } else {
                $cookies.put('user_id');
                $location.url('/dashboard')
            // }
        })
    }

    // LOGOUT SHIT
    self.logout = function(){
        $cookies.remove('user_id')
        $location.url('/')
    }

    // CREATE SHIT
    self.create = function(newUser){
        self.registration_errors = [];
        // console.log('Heres your new user... ' + newUser);
        UserFactory.create(newUser, function(res){
            console.log(res);
            if(res.data.errors){
                for(key in res.data.errors){
                    var error = res.data.errors[key];
                    self.registration_errors.push(error.message)
                }
            } else {
                var user_id = res.data._id;
                $cookies.put('user_id', user_id)
                $location.url('/dashboard')
            }
        })
    }
})

/**************************************
    ANGULAR Questions CONTROLLER
**************************************/
app.controller('QuestionsController', function(QuestionFactory, $location){
    var self = this

    // GET USER SHIT
    self.index = function(){
        QuestionFactory.index(function(res){
            console.log(res);
            self.questions = res.data;
        })
    }

    self.create = function(newQuestion){
        QuestionFactory.create(newQuestion, function(res){
            console.log(res);
            $location.url('/dashboard')
        })
    }

    self.show = function(question_id){
        // console.log(question_id);
        QuestionFactory.show(question_id, function(res){
            // console.log(res);
            $location.url('/question/' + question_id)
            self.show
        })
    }
    self.answer = function(question_id){
        // console.log(question_id);
        QuestionFactory.show(question_id, function(res){
            // console.log(res);
            $location.url('/question/' + question_id + '/new_answer')
            self.answer
        })
    }
})

/**************************************
    ANGULAR ANSWERS CONTROLLER
**************************************/
app.controller('AnswersController', function(AnswerFactory, $location){
    var self = this
    self.create = function(newAnswer){
        AnswerFactory.create(newAnswer, function(res){
            console.log(res);
        })
    }
})
