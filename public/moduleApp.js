/**
 * Created by Syed Afzal on 3/14/2017.
 */
var app = angular.module("myApp",[ 'ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");

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




    // $routeProvider
    //     .when("/", {
    //         templateUrl:"public/views/login.html",
    //         controller : "loginController"
    //     })
    //
    //     .when("/signUp",{
    //         templateUrl:"public/views/signUp.html",
    //         controller : "signUpController"
    //     })
    //
    //     .when("/blog", {
    //         templateUrl:"public/views/blog.html",
    //         controller:"blogController"
    //     })
    //
    //     .otherwise({
    //         templateUrl:"public/views/login.html",
    //         controller : "loginController"
    //     })
    //
    // $locationProvider.html5Mode(true);
});