angular.module('trainingApp', [
  'ngRoute',
  'ngStorage'
])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/views/home/index.html'
  })
  .otherwise({
    template: 'no template'
  })


});
