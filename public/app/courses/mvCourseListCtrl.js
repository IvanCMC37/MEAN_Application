angular.module('app').controller('mvCourseListCtrl', function($scope, mvCourse) {
    $scope.courses = mvCourse.query();

    // define sort order
    $scope.sortOptions = [{value:"title",text: "Sort by Title"},
      {value: "published",text: "Sort by Publish Date"}];
    $scope.sortOrder = $scope.sortOptions[0].value;
  });