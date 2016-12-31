( function() 
{ 
    'use strict' ;
    var posts_app = angular.module('posts_app', ['ngRoute','ngStorage','ngCookies' ]);
    
    var loggedInUsers = [];
    posts_app.value('loggedIn', loggedInUsers);
    
    
    posts_app.config(function ($routeProvider) {
        $routeProvider
             .when('/login', {
                 controller: 'SessionController',
                 templateUrl: 'views/login.html'
             })
            .when('/wordPressPosts', {
                    controller: 'WordPressPostController',
                    templateUrl: 'views/wordPressPosts.html'
            })
            .when('/otherPosts', {
              //      controller: 'WordPressPostController',
              //        templateUrl: 'views/wordPressPosts.html'
                })
                .otherwise({ redirectTo: '/wordPressPosts' });
            }), 
            function ($httpProvider) {
                $httpProvider.defaults.headers.common = {};
                $httpProvider.defaults.headers.post = {};
                $httpProvider.defaults.headers.put = {};
            };
})();
 