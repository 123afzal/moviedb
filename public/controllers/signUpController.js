/**
 * Created by Syed Afzal on 3/14/2017.
 */
app.controller("signUpController", function ($scope, authenticationService) {

    $scope.signup = signup;

    $scope.testData=authenticationService.dataJson;




    function signup(user) {
        console.log("cont",user);
        authenticationService.signup(user);
    }
})