(function () {
    angular.module('org_maint_app')
      .service('BudgetStatusService', function ($http, $q) {
         
          this.getBudgetHistory = function () {
              return $http.get("http://localhost:58778/Org_maint_service_api.svc/GetBudgetHistory");
          };
          this.getBudgetHistoryList = function () {
              return budgetHistoryList;
          };
          this.getBudgetStatus = function () {
              return $http.get("http://localhost:58778/Org_maint_service_api.svc/GetBudgetStatus");//.success(function (response) { return response.value;});
          }
         
      });

}());