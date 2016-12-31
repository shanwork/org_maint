(function () {

    var BudgetStatusController = function ($scope, $routeParams, $localStorage, $sce, Hub ) {
        $scope.budgetStatus = Hub.getBudgetStatus();
        $scope.budgetStatusHistory = Hub.getBudgetStatusHistory();
        $scope.budgetHistory = Hub.getBudgetHistory();
        document.getElementById('allocate').className = ($scope.budgetStatus.BudgetAvailable > 0.0) ? "btn btn-primary active" : "btn btn-primary disabled";
        $scope.allocateFunds = function()
        {
            Hub.allocateFunds();
        }
        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };

    };



    BudgetStatusController.$inject = ['$scope', '$routeParams', '$localStorage', '$sce','Hub' ];

    angular.module('org_maint')
      .controller('BudgetStatusController', BudgetStatusController);
   

}());