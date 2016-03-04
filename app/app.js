var app = angular.module('MYMODULE', []);

app.controller('FilmController', function ($scope) {

	// Intentionally leaving the films array alone
	$scope.films = films;

	$scope.addFilm = function (film) {
		$scope.films.push(film);
	}

	$scope.removeFilm = function (i) {
		$scope.films.splice(i, 1);
	}

});