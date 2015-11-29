//http://localhost:58778/Org_maint_service_api.svc
app.service("org_maint_angular_service", function ($http) {
    this.getBudgetStatus = function () {

        return $http.get("http://localhost:58778/Org_maint_service_api.svc/GetBudgetStatus");
    }
});