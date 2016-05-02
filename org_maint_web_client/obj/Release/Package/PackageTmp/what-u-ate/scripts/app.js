(function() {
    
   
    var what_u_ate_app = angular.module('what_u_ate_app', ['ngRoute', 'ngSanitize', 'ngStorage']);
    what_u_ate_app.value('connectToService', 'false');
    what_u_ate_app.value('configuration', { imMemoryData: 'yes', verbose: 'yes' });
    what_u_ate_app.config(function ($routeProvider) {
        $routeProvider
         .when('/about', {
                 controller: 'AboutThisSiteController',
                 templateUrl: 'views/aboutThisSite.html'
         })
        .when('/data', {
            controller: 'WhatUAteCRUDController',
            templateUrl: 'views/WhatUAteCRUD.html'
        })
            .otherwise({ redirectTo: '/about' });
    },function ($httpProvider) {
        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};
    });
    what_u_ate_app.directive('clickLink', ['$location', function ($location) {
        return {
            link: function (scope, element, attrs) {
                element.on('click', function () {
                    scope.$apply(function () {
                        $location.path(attrs.clickLink);
                    });
                });
            }
        }
    }]);
    what_u_ate_app.directive('clickLinkConfirm', ['$location', function ($location) {
        return {
            link: function (scope, element, attrs) {
                element.on('click', function () {
                    scope.$apply(function () {
                        if (confirm("are you sure you want to return?"))
                            $location.path(attrs.clickLinkConfirm);
                    });
                });
            }
        }
    }]);
    //budgetApp.config(function ($routeProvider) {
    //    $routeProvider
    //        .when('/contributors', {
    //            controller: 'ContributorController',
    //            templateUrl: 'views/contributorList.html'
    //        })
    //        .when('/budgetStatus', {
    //            controller: 'BudgetStatusController',
    //            templateUrl: 'views/budgetStatus.html'
    //        })
    //        .when('/home', {
    //            templateUrl: '../../index.html'
    //        })
    //        .otherwise({ redirectTo: '/budgetStatus' });
    //});
}());