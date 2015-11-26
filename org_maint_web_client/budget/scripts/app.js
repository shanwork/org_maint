(function() {
    
    var app = angular.module('org_maint_app', ['ngRoute']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/customers', {
                controller: 'CustomersController',
                templateUrl: 'budget/views/customers.html'
            })
            .when('/budgetStatus', {
                controller: 'BudgetStatusController',
                templateUrl: 'budget/views/budgetStatus.html'
            })
            .when('/orders/:customerId', {
                controller: 'OrdersController',
                templateUrl: 'budget/views/orders.html'
            })
            .otherwise({ redirectTo: '/budgetStatus' });
    });
    
}());