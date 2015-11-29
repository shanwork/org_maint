(function() {
    
    var BudgetStatusController3 = function ($scope) {
       // $scope.sortBy = 'name';
       // $scope.reverse = false;
        
        //$scope.doSort = function(propName) {
        //   $scope.sortBy = propName;
        //   $scope.reverse = !$scope.reverse;
        //};
        
        $scope.budgetStatus =
            {
                available: 10000,
                allocated: 20000,
                deficit:2000
            };
        $scope.budgetHistory = [
            {
                amount: 5000,
                debitOrCredit: 'Debit',
                date: '2015-11-21',
                comments:'Units 11 - 15'
            },
            {
                amount: 150000,
                debitOrCredit: 'Credit',
                date: '2015-11-12',
                comments: 'From funding meeting on 11/05'
            },
            {
                amount: 10000,
                debitOrCredit: 'Debit',
                date: '2015-11-01',
                comments: 'units 1-4'
            },
            {
                amount: 10000,
                debitOrCredit: 'Credit',
                date: '2015-11-01',
                comments: 'Initial budget allocation'
            }
        ]
    };
    
    BudgetStatusController.$inject = ['$scope'];

    angular.module('org_maint_app')
      .controller('BudgetStatusController3', BudgetStatusController3);
    
}());