/**
 * Created by Syed Afzal on 3/14/2017.
 */
var app = angular.module("myApp",['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl:"public/views/login.html",
            controller : "loginController"
        })

        .when("/signUp",{
            templateUrl:"public/views/signUp.html",
            controller : "signUpController"
        })

        .when("/blog", {
            templateUrl:"public/views/blog.html",
            controller:"blogController"
        })

        .otherwise({
            templateUrl:"public/views/login.html",
            controller : "loginController"
        })

    $locationProvider.html5Mode(true);
});