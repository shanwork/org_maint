(function () {
    angular.module('org_maint_budget')
      .service('BudgetStatusService', function ($http,$q,connectToService) {
          var budgetStatus = 
              {
                  BudgetAvailable: 0,
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