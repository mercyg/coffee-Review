var app = angular.module("myApp", ["ngRoute", "ui.bootstrap"])

.config(function($routeProvider){
    $routeProvider.when('/', {
        controller: 'homeController',
        templateUrl: '../template/home.html'
    }).when('/about',{
        controller: 'homeController',
        templateUrl: '../template/about.html'
    })
})



