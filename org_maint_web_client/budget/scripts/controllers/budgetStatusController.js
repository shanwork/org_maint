(function() {
    var BudgetStatusController = function ($scope, BudgetStatusService, EntityFinanceSummaryService, connectToService, configuration,$localStorage) {
         $scope.sortBy = 'Date';
         $scope.reverse = true;
      //   if (configuration.verbose == 'yes')
             if ($localStorage.verbose == 'yes')
         {
             $scope.readMeOverview = 'This is the budget dashboard page, with budget history.<br> ';
             $scope.readMeOverview += 'Available is total budget that has come in but is not distributed.<br> ';
             $scope.readMeOverview += 'Allocated is total budget that has been distributed.<br> ';
             $scope.readMeOverview += 'Deficit is the amount that is not covered by available budget. The amount is driven by total unallocated budget and the number of entities (Entity Summaries  page) with required budget amount';
             $scope.readmeHistory = "History - shows the list of contributions (''Credit'') and distributions (''Debit''). <br> "
             $scope.readmeHistory = "When a contribution is added (''Contributors'' page), a ''Credit'' entry is added below. <br> "
             $scope.readmeHistory += "When the ''Allocate'' button (above) is pressed, a number of ''Debit'' entries are added corresponding to the entities whose budgets are fulfilled.<br>"
             $scope.readmeHistory += "(bug - the amount in the allocate edit box should reduce by the total amounts of debits)"
         }
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
                 //      alert(entityList.length);
                       for (i = 0; i < entityList.length; i++) {
                           if (parseFloat(entityList[i].BudgetRequired) == 0.0)
                               continue;
                           if (fundToAllocate > 0.0) {
                 //              alert(fundToAllocate);
                //              alert(fundRequired);

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
                                  Date: entityList[i].DateUpdated,
                                  Principal: entityList[i].EntityName,
                                  Comments: entityList[i].Comments
                              }
                               BudgetStatusService.addBudgetHistory(budgetHistoryElement);
                           }
                           else
                               break;
                          

                       }
                       EntityFinanceSummaryService.updateEntityStatus();
                       $localStorage.entityList = entityList;
                         $scope.BudgetAvailable = $scope.budgetStatus.BudgetAvailable;
                   }
                   
              }
         };
        
       
       };
    
    BudgetStatusController.$inject = ['$scope', 'BudgetStatusService', 'EntityFinanceSummaryService', 'connectToService', 'configuration', '$localStorage'];

    angular.module('org_maint_budget')
      .controller('BudgetStatusController', BudgetStatusController);
    
}());