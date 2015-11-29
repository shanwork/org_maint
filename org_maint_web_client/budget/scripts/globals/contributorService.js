(function () {
    angular.module('org_maint_budget')
      .service('ContributorService', function ($http, $q) {

          this.getContributorList = function () {
              return $http.get("http://localhost:58778/Org_maint_service_api.svc/GetContributorList");
          };
      });

}());