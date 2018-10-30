angular.module('app').controller('mvCourseDetailCtrl', function($scope, mvCachedCourses, $routeParams) {
    // need to make sure we have cache beforehead in order to prevent excessive loading (async)
    mvCachedCourses.query().$promise.then(function(collection) {
        // loop though data and find the course details
        collection.forEach(function(course) {
            if(course._id === $routeParams.id) {
                $scope.course = course;
            }
        })
    })
});