(function () {
    var EntityExpensesController = function ($scope, $routeParams, EntityExpensesService, EntityFinanceSummaryService, connectToService) {
        $scope.entityItemList = [];
        $scope.EntityFinanceSummaryID  = parseInt($routeParams.EntityFinanceSummaryID)
        if ($routeParams.EntityName != '-1')
            $scope.EntityName = $routeParams.EntityName;
        else
            $scope.EntityName = ' New Entity';
        if ($routeParams.EntityFinanceSummaryID != '-1')
        $scope.entity = EntityFinanceSummaryService.getEntity($routeParams.EntityFinanceSummaryID);
        $scope.addEntityItem = function () {
            if ($routeParams.EntityFinanceSummaryID == '-1')
            {
                var Entity = {
                    EntityName: $scope.EntityName,
                    BudgetAllocated: parseFloat($scope.BudgetAllocated),
                    BudgetRequired: parseFloat($scope.BudgetRequired),
                    Priority: parseInt($scope.Priority),
                    Comments: $scope.Comments
                    // will add date later
                };
                if (connectToService == 'true') {
                    var promisePost = EntityFinanceSummaryService.addEntity(Entity);
                    promisePost.then(function (pl) {
                        $scope.EntityBudgetPriorityID = pl.data.EntityBudgetPriorityID;
                   //     GetAllRecords();

                        //   ClearModels();
                    }, function (err) {
                        console.log("Some error Occured" + err);
                    });
                }
                else {
                    EntityFinanceSummaryService.addEntity(Entity);
              //      GetAllRecords();
                }
                $scope.EntityFinanceSummaryID = EntityFinanceSummaryService.getEntityListLength();
            }
            var EntityItem = {
                EntityItemName: $scope.EntityItemName,
                EntityItemDetail: $scope.EntityItemDetail,
                EntityItemName: $scope.EntityItemName,
                EntityItemBudgetAllocated: parseFloat($scope.EntityItemBudgetAllocated),
                EntityItemBudgetRequired: parseFloat($scope.EntityItemBudgetRequired),
                EntityItemPriority: parseInt($scope.EntityItemPriority),
                EntityItemDateUpdated: parseInt($scope.EntityItemDateUpdated),
                EntityItemComments: $scope.EntityItemComments
                // will add date later
            };
            alert($scope.entityItemList.length);
            //if (connectToService == 'true') {
            //    var promisePost = EntityFinanceSummaryService.addEntity(Entity);
            //    promisePost.then(function (pl) {
            //        $scope.EntityBudgetPriorityID = pl.data.EntityBudgetPriorityID;
            //        GetAllRecords();

            //        //   ClearModels();
            //    }, function (err) {
            //        console.log("Some error Occured" + err);
            //    });
            //}
            //else {
            EntityItem.EntityItemID = $scope.entityItemList.length + 1;
                $scope.entityItemList.push(EntityItem);
          //  }
        };
    };



    EntityExpensesController.$inject = ['$scope', '$routeParams', 'EntityExpensesService', 'EntityFinanceSummaryService','connectToService'];

    angular.module('org_maint_budget')
      .controller('EntityExpensesController', EntityExpensesController);

}());