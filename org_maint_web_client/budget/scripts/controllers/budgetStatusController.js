(function() {
     var BudgetStatusController = function ($scope, BudgetStatusService) {
       
         GetAllRecords();
         //To Get All Records  
         function GetAllRecords() {
             var promiseGet = BudgetStatusService.getBudgetStatus();
             promiseGet.then(function (pl) { alert(pl.data); },
              function (errorPl) {  
               //   $log.error('Some Error in Getting Records.', errorPl);
              });  
         }
         $scope.budgetStatus = {
                BudgetAvailable: 10000,
                BudgetAllocated: 20000,
                BudgetRequired: 2000
            };
        $scope.budgetHistory = BudgetStatusService.getBudgetHistoryList();
       
       };
    
   BudgetStatusController.$inject = ['$scope','BudgetStatusService'];

    angular.module('org_maint_app')
      .controller('BudgetStatusController', BudgetStatusController);
    
}());