(function() {
    var BudgetStatusController = function ($scope, BudgetStatusService, EntityFinanceSummaryService, connectToService) {
         $scope.sortBy = 'Date';
         $scope.reverse = true;

         $scope.doSort = function (propName) {
             $scope.sortBy = propName;
             $scope.reverse = !$scope.reverse;
         };
         GetAllRecords();
         //To Get All Records  
         function GetAllRecords() {
             if (connectToService == 'true') {
                 
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
             else {
                 $scope.budgetStatus = BudgetStatusService.getBudgetStatus();
                 $scope.budgetHistory = BudgetStatusService.getBudgetHistory();
                 $scope.BudgetAvailable = $scope.budgetStatus.BudgetAvailable;
             }
         }
         $scope.allocateFunds = function () {
              var fundsToAllocateBox =
                 {
                     marc: "Wrapped",
                     fundsToAllocate: $scope.BudgetAvailable
                 };
              if (connectToService == 'true') {
                  var promisePost = BudgetStatusService.allocateFunds(fundsToAllocateBox);
                  promisePost.then(function (pl) {
                      GetAllRecords();

                      //   ClearModels();
                  }, function (err) {
                      console.log("Some error Occured" + err);
                  });
              }
              else 
              {
                   var fundToAllocate = parseFloat($scope.budgetStatus.BudgetAvailable);
                   if (fundToAllocate > 0.0) {
                      
                       var entityList = EntityFinanceSummaryService.getEntitiesSortedPriorityAAmountDList();
                       alert(entityList.length);
                       for (i = 0; i < entityList.length; i++) {
                           if (parseFloat(entityList[i].BudgetRequired) == 0.0)
                               continue;
                           if (fundToAllocate > 0.0) {
                               alert(fundToAllocate);
                               alert(fundRequired);

                               var fundRequired = parseFloat(entityList[i].BudgetRequired);
                               if (fundToAllocate <= fundRequired)
                                   fundRequired = fundToAllocate;
                               entityList[i].BudgetRequired -= fundRequired;
                               entityList[i].BudgetAllocated += fundRequired;

                               $scope.budgetStatus.BudgetAvailable -= fundRequired;
                               $scope.budgetStatus.BudgetAllocated += fundRequired;

                               fundToAllocate -= fundRequired;
                              var budgetHistoryElement =
                              {
                                  Amount: fundRequired,
                                  DebitCredit: 'Debit',
                                  DateString: 'Nov 1, 2015',
                                  Date: '2015-11-01',
                                  Principal: entityList[i].EntityName,
                                  Comments: entityList[i].Comments
                              }
                               BudgetStatusService.addBudgetHistory(budgetHistoryElement);
                           }
                           else
                               break;
                          

                       }
                       EntityService.updateEntityStatus();
                       $scope.BudgetAvailable = $scope.budgetStatus.BudgetAvailable;
                   }
                   
              }
         };
        
       
       };
    
    BudgetStatusController.$inject = ['$scope', 'BudgetStatusService', 'EntityFinanceSummaryService', 'connectToService'];

    angular.module('org_maint_budget')
      .controller('BudgetStatusController', BudgetStatusController);
    
}());