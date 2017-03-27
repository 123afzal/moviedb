/**
 * Created by Syed Afzal on 3/17/2017.
 */
app.service("movieService", function ($http,$q,localStorageService) {
    var _data={
        movies: []
    };

    return{
        createMovie: createMovie,
        getMovies : getMovies,
        updateMovie :updateMovie,
        deleteMovie : deleteMovie,
        searchName : searchName,
        setDatalocal :setDatalocal,
        _data : _data
    };

    function setDatalocal() {
        if(localStorageService.get('movies')===null)
            localStorageService.set('movies', _data.movies);
        else
            _data.movies = localStorageService.get('movies');
    }

    function searchName(movieName) {
        for(var i =0; i<_data.movies.length; i++){
            if(_data.movies[i].name=== movieName){ console.log(_data.movies[i].name); break; }
        }
        if(i===_data.movies.length)
            console.log("Sorry we didn't find movie of that name");
    }

    function createMovie(movie) {
        movie.id = _data.movies.length;
        _data.movies.push(movie);
    }

    function getMovies() {//$http api
        var def = $q.defer();
        $http({
            method : "GET",
            url : "modules/movieJson.json"
        }).then(function (response) {
            _data.movies = response.data;

            def.resolve({
                success : true,
                data : _data.movies
            })
            def.reject({
                success : false,
                data : "Sorry we didn't find the file of that nam"
            })
        })
        return def.promise;
    }


    function updateMovie(movie){
            _data.movies[movie.id].name =  movie.name;
            _data.movies[movie.id].description = movie.description;
            _data.movies[movie.id].releaseDate = movie.releaseDate;
    }

    function deleteMovie(movie) {
        for(var i = 0 ; i < _data.movies.length;i++)    {
            if(_data.movies[i].name == movie.name){
                _data.movies.splice(i,1);
                localStorageService.set('movies', _data.movies)
            }
        }
    }

})