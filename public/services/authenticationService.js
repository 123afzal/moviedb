/**
 * Created by Syed Afzal on 3/16/2017.
 */
app.service("authenticationService", function ($http,$q) {

    var dataJson = [
        {userName: "Afzal", email: "saj.afzal@gmail.com", password: "afzal123"},
        {userName: "Minhaj", email: "minahjuddin@gmail.com", password: "minhaj123"},
        {userName: "Rohail", email: "rohail@gmail.com", password: "rohail123"},
        {userName: "Shahnawaz", email: "shahnawaz@gmail.com", password: "shahnawaz123"},
        {userName: "Hasnain", email: "hasnain@gmail.com", password: "hasnain123"},
        {userName: "Sahar", email: "sahar@gmail.com", password: "sahar123"},
        {userName: "Alveena", email: "alveena@gmail.com", password: "alveena"}
    ]

    /* VARIABLE DECLARATION*/
    /*var _data={
        userName: "Afzal"
    };

    return{
        _data: _data,
        getNameLength: getNameLength
    };

    function getNameLength(name) {
        _data.userName=name;
        return name.length;
    }*/

        return {
            login : login,
            signup: signup,
            dataJson : dataJson
        };


    function login(user) {
        var defer = $q.defer();
        $http({
            method : 'GET',
            url : 'modules/user.json'
        }).then(function (response) {
            var users = response.data;
            for(var i=0; i<users.length; i++){
                if(user.name === users[i].userName && user.password === users[i].password) {
                    defer.resolve({
                        success : true,
                        data : users[i]
                    })
                }
            }
            if(i ===  users.length){
                defer.reject({
                    success : false,
                    data : "No user found of that name"
                })
            }
        })
        return defer.promise;
    }


    function signup(user) {
        dataJson.push(user);
    }
});