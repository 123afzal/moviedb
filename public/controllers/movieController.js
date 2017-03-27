/**
 * Created by Syed Afzal on 3/17/2017.
 */
app.controller("movieController", function ($scope,$rootScope,movieService,localStorageService) {
    console.log("Active user",$rootScope.userName);

    $scope.isEdit = false;
    $scope.movies = [];
    $scope.idToUpdate = null;


    function init() {
        movieService.getMovies().then(function (response) {
            console.log(response);
            setDatatoLocal();
            $scope.movies=movieService._data.movies;
        });
    }

    function setDatatoLocal() {
        movieService.setDatalocal();
    }

    $scope.deleteMovie = function (movie) {
        movieService.deleteMovie(movie);
    }

    $scope.edit = function(movie){
            movieService.updateMovie(movie);
            localStorageService.set('movies',$scope.movies);
    }

    $scope.upadteMovie = function (movie) {
        $scope.searchText = {};
        $scope.newMovie = movie;
    }

    $scope.createMovie = function (movie) {
        movieService.createMovie(movie);
        localStorageService.set('movies',$scope.movies);
        // ls movies.push(newMovie);

    }
        $scope.searchName = function (movieName) {
        movieService.searchName(movieName);
    }

    init();
})