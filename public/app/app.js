// define angular module
angular.module('app', ['ngResource', 'ngRoute']);

// define clientside route
angular.module('app').config(function($routeProvider, $locationProvider) {
    // turn on html5 mode for routing
    $locationProvider.html5Mode(true);

    // define route
    $routeProvider
        .when('/', { templateUrl: '/partials/main', controller: 'mainCtrl'});
});

// main ctrl
angular.module('app').controller('mainCtrl', function($scope) {
    $scope.myVar = "Hello Angular";
});