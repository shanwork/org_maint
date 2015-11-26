(function() {
     var BudgetStatusController = function ($scope, BudgetStatusService) {
       
        $scope.budgetStatus =
            {
                available: 10000,
                allocated: 20000,
                deficit:2000
            };
        $scope.budgetHistory = BudgetStatusService.getBudgetHistoryList();
       
       };
    
   BudgetStatusController.$inject = ['$scope','BudgetStatusService'];

    angular.module('org_maint_app')
      .controller('BudgetStatusController', BudgetStatusController);
    
}());