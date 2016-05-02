(function () {


    var hmvc_app = angular.module('hmvc_app', ['ngRoute', 'ngSanitize', 'ngStorage']);
    hmvc_app.value('connectToService', 'false');
    hmvc_app.value('configuration', { imMemoryData: 'yes', verbose: 'yes' });
    hmvc_app.config(function ($routeProvider) {
        $routeProvider
          //.when('/Principals', {
          //    controller: 'PrincipalsController',
          //    templateUrl: 'views/principals.html'
          //}).when('/Amrutvani', {
          //    //controller: 'CaseStudyAmrutvaniController',
          //    templateUrl: 'views/caseStudyAmrutvani.html'
          //}).when('/WhatUAte', {
          //  //  controller: 'WhatUAteController',
          //    templateUrl: 'views/caseStudyWhatUAte.html'
          //})
             .when('/about', {
                 controller: 'AboutThisSiteController',
                 templateUrl: 'views/aboutThisSite.html'
             })
            .otherwise({ redirectTo: '/about' });
    }, function ($httpProvider) {
        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};
    });
    hmvc_app.directive('clickLink', ['$location', function ($location) {
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
    hmvc_app.directive('clickLinkConfirm', ['$location', function ($location) {
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