/* Word Press module level class app.js */
(function ()
{ 
    'use strict' ;
    var test_app = angular.module('test_app', ['ngRoute','ngStorage','ngCookies' ]);
    
    var loggedInUsers = [];
    test_app.value('loggedIn', loggedInUsers);
    
    
    test_app.config(function ($routeProvider) {
        $routeProvider
            /* for future use - if the post page is part of a multi view SPA
             .when('/newFlow', {
                 controller: 'NewFlowController',
                 templateUrl: 'views/newFlow.html'
             })
             ..
             ...
             */
            .when('/css_basic', {
                 //   controller: 'WordPressPostController',
                    templateUrl: 'views/css_basic.html'
            })
            .when('/css_basic_to_intermediate', {
                //   controller: 'WordPressPostController',
                templateUrl: 'views/css_basic_to_intermediate.html'
            })
            .otherwise({ redirectTo: '/css_basic' });
            }), 
            function ($httpProvider) {
                $httpProvider.defaults.headers.common = {};
                $httpProvider.defaults.headers.post = {};
                $httpProvider.defaults.headers.put = {};
            };
})();
 