$(document).ready(function() {
    var randomMovieArray = ['Interstellar', 'Oppenheimer', 'Tenet', 'Inception', 'Dunkirk'];

    function fetchMovieDetails(movie) {
        return $.getJSON(`https://www.omdbapi.com/?apikey=7df915a6&t=${encodeURI(movie)}`);
    }

    function displayMovieDetails(response) {
        var image = response.Poster;
        $('#moviePoster').attr('src', image);
        $('#movieDetails').html(`
            <p><strong>Title:</strong> ${response.Title}</p>
            <p><strong>Released:</strong> ${response.Released}</p>
            <p><strong>Runtime:</strong> ${response.Runtime}</p>
            <p><strong>Ratings:</strong> ${response.imdbRating}</p>
        `);
    }

    function loadRandomMovie() {
        var randomMovie = randomMovieArray[Math.floor(Math.random() * randomMovieArray.length)];
        fetchMovieDetails(randomMovie).then(displayMovieDetails);
    }

    loadRandomMovie();

    $('#generateMovieButton').click(loadRandomMovie);
});
