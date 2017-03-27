/**
 * Created by Syed Afzal on 3/14/2017.
 */
var app = angular.module("myApp",[ 'ui.router','LocalStorageModule']);

app.config(function ($stateProvider, $urlRouterProvider, localStorageServiceProvider) {
    $urlRouterProvider.otherwise("/login");

    localStorageServiceProvider.setStorageType('localStorage');


    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('login', {
            url: '/login',
            templateUrl: 'public/views/login.html',
            controller : "loginController"
        })
        .state('signup', {
            url: '/signup',
            templateUrl: 'public/views/signUp.html',
            controller : "signUpController"
        })

        .state('movielist', {
            url : '/movielist',
            templateUrl:'public/views/movie.html',
            controller : 'movieController'
        })

});