(function () {
    angular.module('org_maint_budget')
      .service('BudgetStatusService', function ($http,$q) {
         
          this.getBudgetHistory = function () {
              return $http.get("http://localhost:58778/Org_maint_service_api.svc/GetBudgetHistory");
          };
          this.getBudgetStatus = function () {
              return     $http.get("http://localhost:58778/Org_maint_service_api.svc/GetBudgetStatus");//.success(function (response) { return response.value;});
          }
          this.allocateFunds = function (fundsToAllocate) {
              alert(fundsToAllocate);
              var request = $http({
                  method: "put",
                  url: "http://localhost:58778/Org_maint_service_api.svc/AllocateFunds",
                  data: fundsToAllocate
              });
              return request;
          }
        });
     
}());