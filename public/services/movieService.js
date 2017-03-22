/**
 * Created by Syed Afzal on 3/17/2017.
 */
app.service("movieService", function ($http,$q) {
    var _data={
        movies: []
    };

    return{
        createMovie: createMovie,
        getMovies : getMovies,
        updateMovie :updateMovie,
        deleteMovie : deleteMovie,
        _data : _data
    };

    function createMovie() {

    }

    function getMovies() {//$http api
        var def = $q.defer();
        $http({
            method:"GET",
            url :"modules/movieJson.json"
        }).then(function (reponse) {

            //Yahan bana hai aap ka reference
            _data.movies=reponse.data;

            def.resolve({
                success :true,
                data : reponse.data
            }),
            def.reject({
                success : false,
                data : "No result found"
            })
        })
        return def.promise;
    }


    function updateMovie(movie, index){
            _data.movies[index].name =  movie.name;
            _data.movies[index].description = movie.description;
            _data.movies[index].releaseDate = movie.releaseDate;
    }

    function deleteMovie(movie) {
        console.log(movie);
        console.log(_data.movies)
        for(var i = 0 ; i < _data.movies.length;i++)    {
            if(_data.movies[i].name == movie.name){
                _data.movies.splice(i,1);
            }
        }

    }

})