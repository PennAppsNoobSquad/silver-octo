angular.module('firebase.config', [])
  .constant('FBURL', 'https://silver-octo.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password'])

  .constant('loginRedirectPath', '/login');
