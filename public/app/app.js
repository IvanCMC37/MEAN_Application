// define angular module
angular.module('app', ['ngResource', 'ngRoute']);

// define clientside route
angular.module('app').config(function($routeProvider, $locationProvider) {
    // turn on html5 mode for routing
    $locationProvider.html5Mode(true);

    // define route
    $routeProvider
        .when('/', { templateUrl: '/partials/main/main', controller: 'mvMainCtrl'});
});