(function () {
    angular.module('org_maint_budget')
      .service('BudgetStatusService', function ($http,$q) {
         
          this.getBudgetHistory = function () {
              return $http.get("http://localhost:58778/Org_maint_service_api.svc/GetBudgetHistory");
          };
          this.getBudgetStatus = function () {
              return $http.get("http://localhost:58778/Org_maint_service_api.svc/GetBudgetStatus");//.success(function (response) { return response.value;});
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
              alert(fundsToAllocateBox.fundsToAllocate);
              var request = $http({
                  method: "post",
                  url: "http://localhost:58778/Org_maint_service_api.svc/AllocateFunds3"
              });
              return request;
          }
        });
     
}());