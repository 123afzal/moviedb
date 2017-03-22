/**
 * Created by Syed Afzal on 3/17/2017.
 */
app.controller("movieController", function ($scope,movieService) {
    console.log("chal raha movie ka");

    $scope.isEdit = false;
    $scope.movies = [];
    $scope.index = null;

    function init() {
        movieService.getMovies().then(function (response) {
            console.log(response);
            $scope.movies=movieService._data.movies;
        });

    }
    init();

    $scope.deleteMovie = function (movie) {
        movieService.deleteMovie(movie);
    }


    $scope.upadteMovie = function (movie,index) {
        if($scope.isEdit ){
            console.log('already updated.. now send to service');
            /* call service to update data.*/
            movieService.updateMovie(movie,index);
            $scope.isEdit= false;
            $scope.index = null;
        } else{
            $scope.isEdit =true;
            $scope.index = index;
        }

    }
})