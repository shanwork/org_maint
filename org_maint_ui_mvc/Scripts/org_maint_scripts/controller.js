app.controller("org_maint_angular_controller", function ($scope, org_maint_angular_service) {
 getBudgetStatus();
       function getBudgetStatus()
    {
        var budgetStatusData = [
            {
                BudgetAvailable: 10000,
                BudgetAllocated: 2000,
                BudgetRequired: 0
            }
        ];
        $scope.budgetStatus = budgetStatusData;
        var promiseGet = org_maint_angular_service.getBudgetStatus();
        promiseGet.then(function (bs) {
            $scope.budgetStatus = bs.data
        },
        function (errP1) { $log.error('error',errP1); });

    }
});