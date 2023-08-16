/** @format */

const featuredPoster = document.getElementById("featuredPoster");
const featuredMovieName = document.getElementById("featuredMovieName");
const featuredRating = document.getElementById("featuredRating");
const horrorMoviesSection = document.getElementById("horrorMovies");
const animationMoviesSection = document.getElementById("animationMovies");

// Fetch data from db.json
fetch("db.json")
  .then((response) => response.json())
  .then((data) => {
    const movies = data.moviesDB;

    // Render featured movie? need work can delete if better solution.
    //featuredPoster.src = movies[0].poster;
    //featuredMovieName.textContent = movies[0].movieName;
    //featuredRating.textContent = `Rating: ${movies[0].viewRatings}`;

    // Render genre sections
    renderMoviesByGenre(movies, "Horror", horrorMoviesSection);
    renderMoviesByGenre(movies, "Animation", animationMoviesSection);
  });

// Function to render movies by genre
function renderMoviesByGenre(movies, genre, section) {
  const genreMovies = movies.filter((movie) => movie.genre.includes(genre));

  const movieRow = section.querySelector(".movie-row");
  genreMovies.forEach((movie) => {
    const movieBox = document.createElement("div");
    movieBox.className = "movie-box";

    const movieImage = document.createElement("img");
    movieImage.src = movie.poster;
    movieImage.alt = movie.movieName;

    const movieTitle = document.createElement("h3");
    movieTitle.className = "movie-title";
    movieTitle.textContent = movie.movieName;

    const movieRating = document.createElement("p");
    movieRating.className = "movie-rating";
    movieRating.textContent = `Rating: ${movie.viewRatings}`;

    movieBox.appendChild(movieImage);
    movieBox.appendChild(movieTitle);
    movieBox.appendChild(movieRating);

    movieRow.appendChild(movieBox);
  });
}

function addToFavorites(movieTitle) {
  alert('Added "' + movieTitle + '" to Favorites!');
}

function addToWatchList(movieTitle) {
  alert('Added "' + movieTitle + '" to WatchList!');
}

function rateMovie(movieTitle) {
  // You can implement a rating mechanism here
  alert('Rating "' + movieTitle + '"...');
}
