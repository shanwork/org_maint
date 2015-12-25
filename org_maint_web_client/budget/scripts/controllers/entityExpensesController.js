(function () {
    var EntityExpensesController = function ($scope, $routeParams, EntityExpensesService, connectToService) {
        
        $scope.EntityName = $routeParams.EntityName;
        //function init()
        //{
        //    alert('hi');
        //    alert($routeParams.EntityName);
        //}
        //init();
    };



    EntityExpensesController.$inject = ['$scope', '$routeParams', 'EntityExpensesService', 'connectToService'];

    angular.module('org_maint_budget')
      .controller('EntityExpensesController', EntityExpensesController);

}());