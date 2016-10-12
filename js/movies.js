var startrekImg = document.querySelector("#tt0796366");

startrekImg.addEventListener("click", getMovie);

var vImg = document.querySelector("#tt0434409");

vImg.addEventListener("click", getMovie);

var fantasiaImg = document.querySelector("#tt0032455");

fantasiaImg.addEventListener("click", getMovie);

var spiritedImg = document.querySelector("#tt0245429");

spiritedImg.addEventListener("click", getMovie);

var totoroImg = document.querySelector("#tt0096283");

totoroImg.addEventListener("click", getMovie);

function getMovie(event) {
  var clickedMovie = event.target;
  var imbdID = clickedMovie.id;
  var url = "https://omdbapi.com?i=" + imbdID;
  console.log(imbdID);
  $.get(url, displayMovieDetails);

}


function displayMovieDetails(results) {
  document.querySelector("#movie-title").textContent=results.Title;
  document.querySelector("#movie-year").textContent=results.Year;
  document.querySelector("#movie-rating").textContent=results.imdbRating;
  document.querySelector("#movie-runtime").textContent=results.Runtime;
  document.querySelector("#movie-plot").textContent=results.Plot;
  }


// var startrekImg = document.querySelector("#tt0796366");
//
// startrekImg.addEventListener("click", getstarTrek);
//
// function getstarTrek(event) {
//   $.get("https://omdbapi.com?i=tt0796366", displayMovieDetails);
// }
//
// var vImg = document.querySelector("#tt0434409");
//
// vImg.addEventListener("click", getV);
//
// function getV(event) {
//   $.get("https://omdbapi.com?i=tt0434409", displayMovieDetails);
// }
//
// var fantasiaImg = document.querySelector("#tt0032455");
//
// fantasiaImg.addEventListener("click", getFantasia);
//
// function getFantasia(event) {
//   $.get("https://omdbapi.com?i=tt0032455", displayMovieDetails);
// }
//
// var spiritedImg = document.querySelector("#tt0245429");
//
// spiritedImg.addEventListener("click", getSpirited);
//
// function getSpirited(event) {
//   $.get("https://omdbapi.com?i=tt0245429", displayMovieDetails);
// }
//
// var totoroImg = document.querySelector("#tt0096283");
//
// totoroImg.addEventListener("click", getTotoro);
//
// function getTotoro(event) {
//   $.get("https://omdbapi.com?i=tt0096283", displayMovieDetails);
// }
//
//
// function displayMovieDetails(results) {
//   document.querySelector("#movie-title").textContent=results.Title;
//   document.querySelector("#movie-year").textContent=results.Year;
//   document.querySelector("#movie-rating").textContent=results.imdbRating;
//   document.querySelector("#movie-runtime").textContent=results.Runtime;
//   document.querySelector("#movie-plot").textContent=results.Plot;
//   }
