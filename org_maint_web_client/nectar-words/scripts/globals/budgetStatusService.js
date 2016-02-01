(function () {
    angular.module('org_maint_budget')
      .service('BudgetStatusService', function ($http, $q, connectToService, $localStorage) {
        //  var budgetStatus = {};
          var budgetStatus = 
              {
                  BudgetAvailable: 0.00,
                  BudgetAllocated: 0,
                  BudgetRequired: 0,
                  DateUpdated : new Date()
              } ;
          var budgetHistory = [];
          var budgetStatusHistory = [];
          //if ($localStorage.budgetStatusHistory != null)
          //    budgetStatusHistory = $localStorage.budgetStatusHistory

          this.getBudgetHistory = function () {
              if (connectToService == 'true') {

                  return $http.get("http://localhost:58778/Org_maint_service_api.svc/GetBudgetHistory");
              }
              else
              {
                  if ($localStorage.budgetHistory != null)
                      budgetHistory = $localStorage.budgetHistory;
                  else
                      $localStorage.budgetHistory = budgetHistory;
                  return budgetHistory;
              }
          };
          this.getBudgeStatustHistory = function () {
              if (connectToService == 'true') {

            //      return $http.get("http://localhost:58778/Org_maint_service_api.svc/GetBudgetHistory");
              }
              else {
                  if ($localStorage.budgetHistory != null)
                      budgetHistory = $localStorage.budgetHistory;
                  else
                      $localStorage.budgetHistory = budgetHistory;
                  return budgetStatusHistory;
              }
          };
          this.addBudgetHistory = function (budgetHistoryElement) {
              if (connectToService == 'false') {
                  budgetHistoryElement.BudgetHistoryId = budgetHistory.length + 1;
                  budgetHistory.push(budgetHistoryElement);
                  if (budgetHistoryElement.DebitCredit == 'Credit')
                  {
                      budgetStatus.BudgetAvailable += parseFloat(budgetHistoryElement.Amount);
                      budgetStatus.BudgetRequired -= parseFloat(budgetHistoryElement.Amount);
                      if (budgetStatus.BudgetRequired < 0)
                          budgetStatus.BudgetRequired = 0;
                  }
                  budgetStatusHistory.push(budgetStatus);
                  $localStorage.budgetStatusHistory.push(budgetStatus);//= budgetStatusHistory;
              }
              $localStorage.budgetHistory = budgetHistory;
          };
          this.updateBudgetStatus = function (newBudgetStatus) {
              if (connectToService == 'false') {
                  budgetStatus.BudgetAvailable = newBudgetStatus.BudgetAvailable;
                  budgetStatus.BudgetAllocated = newBudgetStatus.BudgetAllocated;
                  budgetStatus.BudgetRequired = newBudgetStatus.BudgetRequired;
                  budgetStatus.DateUpdated = new Date();
              }
              budgetStatusHistory.push(budgetStatus);
              $localStorage.budgetStatusHistory.push(budgetStatus);//= budgetStatusHistory;
          //    alert($localStorage.budgetStatusHistory.length);
              $localStorage.budgetStatus = budgetStatus;
          };
          this.getBudgetStatus = function () {
              if (connectToService == 'true') {

                  return $http.get("http://localhost:58778/Org_maint_service_api.svc/GetBudgetStatus");//.success(function (response) { return response.value;});
              }
              else
              {
                  if ($localStorage.budgetStatus != null)
                      budgetStatus = $localStorage.budgetStatus;
                  else
                      $localStorage.budgetStatus = budgetStatus;
                  return budgetStatus;
             }
          };
          this.allocateFunds = function (fundsToAllocateBox) {
              var request = $http({
                  method: "post",
                  url: "http://localhost:58778/Org_maint_service_api.svc/AllocateFunds2",
                  data: fundsToAllocateBox
              });
              return request;
          };
          this.allocateFunds3 = function (fundsToAllocateBox) {
              var request = $http({
                  method: "post",
                  url: "http://localhost:58778/Org_maint_service_api.svc/AllocateFunds2"
              });
              return request;
          }
        });
     
}());