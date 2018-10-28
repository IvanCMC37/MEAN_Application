// define angular module
angular.module('app', ['ngResource', 'ngRoute']);

// define clientside route
angular.module('app').config(function($routeProvider, $locationProvider){
    // turn on html5 mode for routing
    $locationProvider.html4Mode(true);

    // define route
    $routeProvider
        .when('/', {templateUrl: '/partials/main', controller: 'mainCtrl'});
});

// main ctrl
angular.module('app').controller('mainCtrl', function($scope) {
    // proof that angular application is working
    $scope.myVar = "Hello Angular";
});