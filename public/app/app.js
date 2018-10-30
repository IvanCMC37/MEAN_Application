// define angular module
angular.module('app', ['ngResource', 'ngRoute']);

// define clientside route
angular.module('app').config(function($routeProvider, $locationProvider) {
    var routeRoleChecks = {
        admin: {auth: function(mvAuth) {
          return mvAuth.authorizeCurrentUserForRoute('admin')
        }}
      }

    // turn on html5 mode for routing
    $locationProvider.html5Mode(true);

    // define route
    $routeProvider
        .when('/', { templateUrl: '/partials/main/main', controller: 'mvMainCtrl'})
        .when('/admin/users', { templateUrl: '/partials/admin/user-list', 
        controller: 'mvUserListCtrl', resolve: routeRoleChecks.admin
        })
        .when('/signup', { templateUrl: '/partials/account/signup', 
        controller: 'mvSignupCtrl'
        })
});

angular.module('app').run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
      if(rejection === 'not authorized') {
        $location.path('/');
      }
    })
})