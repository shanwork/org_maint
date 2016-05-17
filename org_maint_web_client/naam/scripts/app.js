(function () {


    var budgetApp = angular.module('org_maint', ['ngRoute', 'ngSanitize', 'ngStorage']);
    budgetApp.value('connectToService', 'false');
    budgetApp.value('configuration', { imMemoryData: 'yes', verbose: 'yes' });
    budgetApp.config(function ($routeProvider) {
        $routeProvider
          .when('/requirements', {
              controller: 'RequirementsController',

              templateUrl: 'views/requirements.html'
          })
             .when('/entityExpenses/:EntityFinanceSummaryID/:EntityName', {
              // controller: 'EntityItemExpensesController',
                 templateUrl: 'views/entityItemExpenses.html'
             })
            .when('/contributors', {
                controller: 'ContributorController',
                templateUrl: 'views/contributorList.html'
            })
            .when('/budgetStatus', {
                controller: 'BudgetStatusController',
                templateUrl: 'views/budgetStatus.html'
            })
             .when('/about', {
             //    controller: 'AboutThisSiteController',
                 templateUrl: 'views/aboutThisSite.html'
             })
            .when('/home', {
                templateUrl: '../../index.html'
            })
            .when('/settings', {
            //    controller: 'SettingsController',
                templateUrl: 'views/settings.html'

            }).when('/charting', {
                // controller: 'SettingsController',
                templateUrl: 'views/charting.html'

            })
            .otherwise({ redirectTo: '/budgetStatus' });
    }, function ($httpProvider) {
        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};
    });
    budgetApp.directive('clickLink', ['$location', function ($location) {
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
    budgetApp.directive('clickLinkConfirm', ['$location', function ($location) {
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