(function() {
    
    var app = angular.module('org_maint_app', ['ngRoute']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/customers', {
                controller: 'CustomersController',
                templateUrl: 'app/views/customers.html'
            })
            .when('/budgetStatus', {
                controller: 'BudgetStatusController',
                templateUrl: 'app/views/budgetStatus.html'
            })
            .when('/orders/:customerId', {
                controller: 'OrdersController',
                templateUrl: 'app/views/orders.html'
            })
            .otherwise({ redirectTo: '/budgetStatus' });
    });
    
}());