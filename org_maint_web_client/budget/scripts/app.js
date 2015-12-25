(function() {
    
   
    var budgetApp = angular.module('org_maint_budget', ['ngRoute']);
    budgetApp.value('connectToService', 'false');
    budgetApp.config(function ($routeProvider) {
        $routeProvider
            .when('/entities', {
                controller: 'EntityController',
                templateUrl: 'views/entityList.html'
            })
            .when('/entityFinanceSummaries', {
                controller: 'EntityFinanceSummaryController',
                templateUrl: 'views/entityFinanceSummaries.html'
            })
             .when('/entityExpenses/:EntityFinanceSummaryID/:EntityName', {
                 controller: 'EntityExpensesController',
                 templateUrl: 'views/entityExpenses.html'
             })
            .when('/contributors', {
                controller: 'ContributorController',
                templateUrl: 'views/contributorList.html'
            })
            .when('/budgetStatus', {
                controller: 'BudgetStatusController',
                templateUrl: 'views/budgetStatus.html'
            })
            .when('/home', {
                templateUrl: '../../index.html'
            })
            .otherwise({ redirectTo: '/budgetStatus' });
    },function ($httpProvider) {
        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};
    });
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