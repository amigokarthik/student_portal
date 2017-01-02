var app = angular.module('studentPortal', ['ngResource','ngRoute','firstmodule','secondmodule','thirdmodule'])
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "one.html",
        controller : 'first'
    })
    .when("/home", {
        templateUrl : "second.html",
		controller : 'second'
    })
    .when("/admin", {
        templateUrl : "third.html",
		controller : 'third'
    });
});