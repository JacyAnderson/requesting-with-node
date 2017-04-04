var movie = require("./movie");
var request = require('request');

var threeFavoriteMovies = ["Manchester By the Sea", "Birdman", "Eternal Sunshine of the Spotless Mind"];

threeFavoriteMovies.forEach(function(film){
  movie(film);
});