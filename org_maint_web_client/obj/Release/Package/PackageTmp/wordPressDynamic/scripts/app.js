( function() 
{ 
    'use strict' ;
    var posts_app = angular.module('posts_app', ['ngRoute','ngStorage','ngCookies' ]);
    
    var loggedInUsers = [];
    posts_app.value('loggedIn', loggedInUsers);
    
    
    posts_app.config(function ($routeProvider) {
        $routeProvider
            /* for future use - if the post page is part of a multi view SPA
             .when('/<view tag>', {
                 controller: '<Controller class Name>',
                 templateUrl: 'views/<view html markup>'
             })
             ..
             ...
             */
            .when('/wordPressPosts', {
                    controller: 'WordPressPostController',
                    templateUrl: 'views/wordPressPosts.html'
            })
            .otherwise({ redirectTo: '/wordPressPosts' });
            }), 
            function ($httpProvider) {
                $httpProvider.defaults.headers.common = {};
                $httpProvider.defaults.headers.post = {};
                $httpProvider.defaults.headers.put = {};
            };
})();
 