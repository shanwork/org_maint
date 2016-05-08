(function () {
    var animations_app = angular.module('animations_app', ['ngRoute', 'ngSanitize', 'ngStorage']);
    animations_app.config(function ($routeProvider) {
        $routeProvider
        .when('/basicAnimation', {
         //   controller: '<controller name>',

            templateUrl: 'views/basic.html'
        }).otherwise({ redirectTo: '/basicAnimation' });
    },function ($httpProvider) { // not sure what this is for.. !!
        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};
    });
   });