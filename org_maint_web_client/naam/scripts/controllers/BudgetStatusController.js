(function () {

    var BudgetStatusController = function ($scope, $routeParams, $localStorage, $sce, Hub ) {
        $scope.budgetStatus = Hub.getBudgetStatus();
        $scope.budgetStatusHistory = Hub.getBudgetStatusHistory();
        $scope.budgetHistory = Hub.getBudgetHistory();
        $scope.allocateFunds = function()
        {
            Hub.allocateFunds();
        }
    };



    BudgetStatusController.$inject = ['$scope', '$routeParams', '$localStorage', '$sce','Hub' ];

    angular.module('org_maint')
      .controller('BudgetStatusController', BudgetStatusController);
   

}());