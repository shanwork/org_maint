(function () {


    var assignments_app = angular.module('assignments_app', ['ngRoute', 'ngSanitize', 'ngStorage']);
    assignments_app.value('connectToService', 'false');
    assignments_app.value('configuration', { imMemoryData: 'yes', verbose: 'yes' });
    assignments_app.config(function ($routeProvider) {
        $routeProvider
        
             .when('/about', {
                 controller: 'AboutThisSiteController',
                 templateUrl: 'views/aboutThisSite.html'
             })
            .when('/GitAPI', {
                controller: 'GitAPIController',
                templateUrl: 'views/gitApi.html'
            })
            .otherwise({ redirectTo: '/GitAPI' });
    }, function ($httpProvider) {
        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};
    });
    assignments_app.directive('clickLink', ['$location', function ($location) {
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
    assignments_app.directive('clickLinkConfirm', ['$location', function ($location) {
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