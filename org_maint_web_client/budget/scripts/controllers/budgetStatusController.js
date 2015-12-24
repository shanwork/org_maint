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
                  alert('hi');
                  var entityList = EntityFinanceSummaryService.getEntitiesSortedList();
                    for (i = 0; i < entityList.length; i++) {
                        alert(entityList[i].EntityName);
                        alert(entityList[i].Priority);
                        alert(entityList[i].BudgetRequired);
                        //if (entityList[i].BudgetAllocated > 0)
                        //    entityStatus.TotalEntitiesAllocated += 1;
                        //else if (budgetAvailable > 0)
                        //    entityStatus.TotalEntitiesAllocable += 1;
                        //budgetAvailable -= entityList[i].BudgetRequired;


                    }
              }
         };
        
       
       };
    
    BudgetStatusController.$inject = ['$scope', 'BudgetStatusService', 'EntityFinanceSummaryService', 'connectToService'];

    angular.module('org_maint_budget')
      .controller('BudgetStatusController', BudgetStatusController);
    
}());