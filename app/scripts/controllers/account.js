'use strict';
/**
 * @ngdoc function
 * @name silverOctoTestApp.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Provides rudimentary account management functions.
 */
angular.module('silverOctoTestApp')
  .controller('AccountCtrl', function ($scope, user, Auth, Ref, $firebaseObject, $timeout, $log) {
    $scope.user = user;
    $scope.logout = function() { Auth.$unauth(); };
    $scope.messages = [];

    var validateProfileData = function validateProfileData() {
      if (!profile.email) {
        profile.email = user[user.provider].email;
        profile.image = user[user.provider].profileImageURL;
        profile.$save();
        $log.debug("Update user's email and profle image in profile.", profile.email);
      }
    };

    var profile = $firebaseObject(Ref.child('users/'+user.uid));
    profile.$bindTo($scope, 'profile').then(validateProfileData);

    $scope.changePassword = function(oldPass, newPass, confirm) {
      $scope.err = null;
      if( !oldPass || !newPass ) {
        error('Please enter all fields');
      }
      else if( newPass !== confirm ) {
        error('Passwords do not match');
      }
      else {
        Auth.$changePassword({email: profile.email, oldPassword: oldPass, newPassword: newPass})
          .then(function() {
            success('Password changed');
          }, error);
      }
    };

    $scope.changeEmail = function(pass, newEmail) {
      $scope.err = null;
      Auth.$changeEmail({password: pass, newEmail: newEmail, oldEmail: profile.email})
        .then(function() {
          profile.email = newEmail;
          profile.$save();
          success('Email changed');
        })
        .catch(error);
    };

    function error(err) {
      alert(err, 'danger');
    }

    function success(msg) {
      alert(msg, 'success');
    }

    function alert(msg, type) {
      var obj = {text: msg+'', type: type};
      $scope.messages.unshift(obj);
      $timeout(function() {
        $scope.messages.splice($scope.messages.indexOf(obj), 1);
      }, 10000);
    }
  });
