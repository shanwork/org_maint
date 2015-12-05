(function() {
     var BudgetStatusController = function ($scope, BudgetStatusService) {
         $scope.sortBy = 'Date';
         $scope.reverse = true;

         $scope.doSort = function (propName) {
             $scope.sortBy = propName;
             $scope.reverse = !$scope.reverse;
         };
         GetAllRecords();
         //To Get All Records  
         function GetAllRecords() {
             var promiseGetBudgetStatus = BudgetStatusService.getBudgetStatus();
             promiseGetBudgetStatus.then(function (budgetStatusDb) { $scope.budgetStatus = budgetStatusDb.data; $scope.BudgetAvailable = $scope.budgetStatus.BudgetAvailable; },
              function (errorPl) {  
               //   $log.error('Some Error in Getting Records.', errorPl);
              });  
             var promiseGetBudgetHistory = BudgetStatusService.getBudgetHistory();
             promiseGetBudgetHistory.then(function (budgetHistoryDb) { $scope.budgetHistory = budgetHistoryDb.data; },
              function (errorPl) {
                  //   $log.error('Some Error in Getting Records.', errorPl);
              });
         }
         $scope.allocateFunds = function () {
              var fundsToAllocateBox =
                 {
                     marc: "Wrapped",
                     fundsToAllocate: $scope.BudgetAvailable
                 };
             var promisePost = BudgetStatusService.allocateFunds(fundsToAllocateBox);
             promisePost.then(function (pl) {
                 GetAllRecords();

                 //   ClearModels();
             }, function (err) {
                 console.log("Some error Occured" + err);
             });
         };
        
       
       };
    
   BudgetStatusController.$inject = ['$scope','BudgetStatusService'];

    angular.module('org_maint_budget')
      .controller('BudgetStatusController', BudgetStatusController);
    
}());