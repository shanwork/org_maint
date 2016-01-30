﻿(function() {
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
         $scope.showGraph = function () {
             var budgetAvailable = [];
             var budgetAllocated = [];
             var budgetRequired = [];
             var periodOne = [];//'2013-01-01', '2013-01-04', '2013-01-07', '2013-01-11', '2013-01-15'];
             var periodTwo = [];//['2013-01-02', '2013-01-04', '2013-01-06', '2013-01-08', '2013-01-10', '2013-01-13', '2013-01-15', '2013-01-18', '2013-01-22'];
             var periodThr = [];//['2013-01-05', '2013-01-10', '2013-01-15', '2013-01-20', '2013-01-25'];
             if ($localStorage.budgetStatusHistory != null && $localStorage.budgetStatusHistory.length > 0)
             {
                 for (k = 0; k < $localStorage.budgetStatusHistory.length; k++) {
                     budgetAvailable.push(parseFloat($localStorage.budgetStatusHistory[k].BudgetAvailable));
                     budgetAllocated.push(parseFloat($localStorage.budgetStatusHistory[k].BudgetAllocated));
                     budgetRequired.push(parseFloat($localStorage.budgetStatusHistory[k].BudgetRequired));
                     alert($localStorage.budgetStatusHistory[k].Date);
                     periodOne.push($localStorage.budgetStatusHistory[k].Date);
                     periodTwo.push($localStorage.budgetStatusHistory[k].Date);
                     periodThr.push($localStorage.budgetStatusHistory[k].Date);
                 }
             }
             var xOne = [12, 31, 14, 13, 34];
             var xTwo = [11, 13, 14, 23, 63, 27, 21, 19, 15];
             var xThr = [12, 32, 13, 13, 23];

             $scope.chart =   c3.generate({
                 data: {
                     xs: {
                         //Declare the axes
                         'Available': 'x1',
                         'Allocated': 'x2',
                         'Required': 'x3'
                     },
                     columns: [
                         ['x1'].concat(periodOne),
                         ['x2'].concat(periodTwo),
                         ['x3'].concat(periodThr),
                         ['Available'].concat(budgetAvailable),
                         ['Allocated'].concat(budgetAllocated),
                         ['Required'].concat(budgetRequired)
                     ]
                 },
                 axis: {
                     x: {
                         type: 'timeseries'
                     }
                 }
             });
             //$scope.chart = c3.generate({
             //    bindto: '#chart',
             //    data: {
             //        columns: [
             //          ['data1', 30, 200, 100, 400, 150, 250],
             //          ['data2', 50, 20, 10, 40, 15, 25]
             //        ]
             //    }
             //});
         }
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
                        if ($localStorage.debugMode == true) alert(entityList.length);
                 //       if ($localStorage.debugMode == true) alert(entityList.length);
                       for (i = 0; i < entityList.length; i++) {
                           if (parseFloat(entityList[i].BudgetRequired) == 0.0)
                               continue;
                           if (fundToAllocate > 0.0) {
                 //               if ($localStorage.debugMode == true) alert(fundToAllocate);
                //               if ($localStorage.debugMode == true) alert(fundRequired);

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