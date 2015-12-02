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
             alert(  $scope.BudgetAvailable);
             //    OriginalCurrencyAmount: $scope.OriginalCurrencyAmount,
             //    Currency: $scope.Currency,
             //    Comments: $scope.Comments,
             //    // will add date later
             //};
             //alert($scope.ContributorName);
             //alert(Contributor.ContributorName);
             //var promisePost = ContributorService.post(Contributor);
             //promisePost.then(function (pl) {
             //    $scope.ContributorID = pl.data.ContributorID;
             //    GetAllRecords();

             //    //   ClearModels();
             //}, function (err) {
             //    console.log("Some error Occured" + err);
             //});
         };
        
       
       };
    
   BudgetStatusController.$inject = ['$scope','BudgetStatusService'];

    angular.module('org_maint_budget')
      .controller('BudgetStatusController', BudgetStatusController);
    
}());