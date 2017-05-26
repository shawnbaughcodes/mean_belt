var app = angular.module('app', ['ngRoute', 'ngCookies'])

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'partials/index.html',
        controller: 'UsersController as UC'
    })
    .when('/dashboard', {
        templateUrl: 'partials/dashboard.html',
        controller: 'UsersController as UC'
    })
    .when('/new_question', {
        templateUrl: 'partials/new_question.html',
        controller: 'UsersController as UC'
    })
    .when('/question/:id', {
        templateUrl: 'partials/question.html',
        controller: 'UsersController as UC'
    })
    .when('/question/:id/new_answer', {
        templateUrl: 'partials/new_answer.html',
        controller: 'UsersController as UC'
    })
    .otherwise({ redirectTo: '/' });
})
