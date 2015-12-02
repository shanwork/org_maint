(function () {
    angular.module('org_maint_budget')
      .service('EntityService', function ($http, $q) {

          this.getEntitiesList = function () {
              return $http.get("http://localhost:58778/Org_maint_service_api.svc/GetEntitiesList");
          };
          this.getEntityStatus = function () {
              return $http.get("http://localhost:58778/Org_maint_service_api.svc/GetEntityStatus");//.success(function (response) { return response.value;});
          }
      });


}());