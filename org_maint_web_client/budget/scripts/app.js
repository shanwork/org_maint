(function() {
    
   
    var budgetApp = angular.module('org_maint_budget', ['ngRoute']);

    budgetApp.config(function ($routeProvider) {
        $routeProvider
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
    });
}());