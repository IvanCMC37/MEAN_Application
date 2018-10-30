angular.module('app').factory('mvIdentity', function($window) {
    var currentUser;
    // check session if object exist and store it
    if(!!$window.bootstrappedUserObject) {
      // angular.extend(currentUser, $window.bootstrappedUserObject);
      currentUser = $window.bootstrappedUserObject;
    }

    return {
      currentUser: currentUser,
      isAuthenticated: function() {
        return !!this.currentUser;
      }
    }
})