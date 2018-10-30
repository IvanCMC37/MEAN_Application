angular.module('app').controller('mvCourseDetailCtrl', function($scope, mvCourse, $routeParams) {
    $scope.course = mvCourse.ger({_id:$routeParams.id})
});