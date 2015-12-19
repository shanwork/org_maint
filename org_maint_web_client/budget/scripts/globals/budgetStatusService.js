(function () {
    angular.module('org_maint_budget')
      .service('BudgetStatusService', function ($http,$q,connectToService) {
          var budgetStatus = 
              {
                  BudgetAvailable: 1000.00,
                  BudgetAllocated: 0,
                  BudgetRequired: 0
              } ;
          var budgetHistory = [
              {
                  Amount: 1000,
                  DebitCredit: 'Credit',
                  DateString: 'Nov 1, 2015',
                  Date: '2015-11-01',
                  Principal: 'Ganesha',
                  Comments:'Initial Thrust'
              }
          ];
          this.getBudgetHistory = function () {
              if (connectToService == 'true') {

                  return $http.get("http://localhost:58778/Org_maint_service_api.svc/GetBudgetHistory");
              }
              else
              {
                  return budgetHistory;
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
              }
          };
          this.updateBudgetStatus = function (newBudgetStatus) {
              if (connectToService == 'false') {
                  budgetStatus.BudgetAvailable = newBudgetStatus.BudgetAvailable;
                  budgetStatus.BudgetAllocated = newBudgetStatus.BudgetAllocated;
                  budgetStatus.BudgetRequired = newBudgetStatus.BudgetRequired;
              }
          };
          this.getBudgetStatus = function () {
              if (connectToService == 'true') {

                  return $http.get("http://localhost:58778/Org_maint_service_api.svc/GetBudgetStatus");//.success(function (response) { return response.value;});
              }
              else
              {
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