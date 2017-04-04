'use strict'

// var movie = "Manchester By the Sea";
// var link = 'http://www.omdbapi.com/?t=' + movieTitle;

const request = require('request'); 

function getMovie(movieTitle) {
	var result = request('http://www.omdbapi.com/?t=' + movieTitle, function(error, response, body){
	const movieInfo = JSON.parse(body);
	console.log(movieInfo);
  });
} 

module.exports = getMovie;