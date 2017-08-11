/* Word Press module level class app.js */
(function ()
{ 
    'use strict' ;
    var posts_app = angular.module('posts_app', ['ngRoute','ngStorage','ngCookies' ]);
    
    var loggedInUsers = [];
    posts_app.value('loggedIn', loggedInUsers);
    
    
    posts_app.config(function ($routeProvider) {
        $routeProvider
            /* for future use - if the post page is part of a multi view SPA
             .when('/newFlow', {
                 controller: 'NewFlowController',
                 templateUrl: 'views/newFlow.html'
             })
             ..
             ...
             */
            .when('/bigString', {
                    controller: 'BigStringController',
                    templateUrl: 'views/bigString.html'
            })
            .otherwise({ redirectTo: '/bigString' });
            }), 
            function ($httpProvider) {
                $httpProvider.defaults.headers.common = {};
                $httpProvider.defaults.headers.post = {};
                $httpProvider.defaults.headers.put = {};
            };
})();
 