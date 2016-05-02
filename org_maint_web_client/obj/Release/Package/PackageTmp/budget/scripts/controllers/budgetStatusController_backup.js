(function () {
    var BudgetStatusController = function ($scope, BudgetStatusService) {

        GetAllRecords();
        //To Get All Records  
        function GetAllRecords() {
            var promiseGetBudgetStatus = BudgetStatusService.getBudgetStatus();
            promiseGetBudgetStatus.then(function (budgetStatusDb) { $scope.budgetStatus = budgetStatusDb.data; },
             function (errorPl) {
                 //   $log.error('Some Error in Getting Records.', errorPl);
             });
            var promiseGetBudgetHistory = BudgetStatusService.getBudgetHistory();
            promiseGetBudgetHistory.then(function (budgetHistoryDb) { $scope.budgetHistory = budgetHistoryDb.data; },
             function (errorPl) {
                 //   $log.error('Some Error in Getting Records.', errorPl);
             });
            //    $scope.budgetHistory = BudgetStatusService.getBudgetHistoryList();
        }
        //$scope.budgetStatus = {
        //       BudgetAvailable: 10000,
        //       BudgetAllocated: 20000,
        //       BudgetRequired: 2000
        //   };
        // $scope.budgetHistory = BudgetStatusService.getBudgetHistoryList();

    };

    BudgetStatusController.$inject = ['$scope', 'BudgetStatusService'];

    angular.module('org_maint_app')
      .controller('BudgetStatusController', BudgetStatusController);

}());