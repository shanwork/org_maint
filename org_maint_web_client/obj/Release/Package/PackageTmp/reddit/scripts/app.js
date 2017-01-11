/* Word Press module level class app.js */
(function ()
{ 
    'use strict' ;
    var reactjsapi_app = angular.module('reactjsapi_app', ['ngRoute','ngStorage','ngCookies' ]);
    
    var loggedInUsers = [];
    reactjsapi_app.value('loggedIn', loggedInUsers);
    
    
    reactjsapi_app.config(function ($routeProvider) {
        $routeProvider
            /* for future use - if the post page is part of a multi view SPA
             .when('/newFlow', {
                 controller: 'NewFlowController',
                 templateUrl: 'views/newFlow.html'
             })
             ..
             ...
             */
            .when('/subReddits', {
                    controller: 'ReactjsApiController',
                    templateUrl: 'views/subReddits.html'
            })
            .otherwise({ redirectTo: '/subReddits' });
            }), 
            function ($httpProvider) {
                $httpProvider.defaults.headers.common = {};
                $httpProvider.defaults.headers.post = {};
                $httpProvider.defaults.headers.put = {};
            };
})();
 