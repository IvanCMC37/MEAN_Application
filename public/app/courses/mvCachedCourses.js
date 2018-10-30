angular.module('app').factory('mvCachedCourses', function(mvCourse) {
    var courseList;
    
    // check if courselist had been populated
    return {
      query: function() {
        if(!courseList) {
          courseList = mvCourse.query();
        }
  
        return courseList;
      }
    }
  })