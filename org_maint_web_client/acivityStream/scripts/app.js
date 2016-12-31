(function () {


    var activityStreamApp = angular.module('activityStreamApp', ['ngRoute' ]);
     
    activityStreamApp.config(function ($routeProvider) {
        $routeProvider
          .when('/About', {
             
              templateUrl: 'views/about.html'
          })
             .when('/quickImplementation', {
                 controller: 'QuickImplementationController',
                 templateUrl: 'views/quickImplementation.html'
             })
            .when('/realLife', {
            //    controller: 'ContributorController',
                templateUrl: 'views/realLife.html'
            })
            .otherwise({ redirectTo: '/About' });
    });
    
}());