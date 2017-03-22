/**
 * Created by Syed Afzal on 3/14/2017.
 */
app.controller("loginController", function ($scope,authenticationService, $state) {

    /*variables*/


    /*functions declaration*/
    $scope.login = login;


    function login(user) {


        console.log('logging ',user);
        var result = authenticationService.login(user).then( success,reject);
        function success(response) {
            $state.go('movielist');
            console.log("Success",response);
        }

        function  reject(err) {
            console.log("err",err);
        }
    }


})