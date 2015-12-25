(function () {
    var EntityExpensesController = function ($scope, $routeParams, EntityExpensesService,EntityFinanceSummaryService, connectToService) {
        
        $scope.EntityName = $routeParams.EntityName;
        $scope.entity = EntityFinanceSummaryService.getEntity($routeParams.EntityFinanceSummaryID);
        //function init()
        //{
        //    alert('hi');
        //    alert($routeParams.EntityName);
        //}
        //init();
    };



    EntityExpensesController.$inject = ['$scope', '$routeParams', 'EntityExpensesService', 'EntityFinanceSummaryService','connectToService'];

    angular.module('org_maint_budget')
      .controller('EntityExpensesController', EntityExpensesController);

}());