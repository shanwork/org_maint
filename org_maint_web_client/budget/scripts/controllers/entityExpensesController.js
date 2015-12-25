(function () {
    var EntityExpensesController = function ($scope, $routeParams, EntityExpensesService, EntityFinanceSummaryService, connectToService) {
        $scope.entityItemList = [];
        if ($routeParams.EntityName != '-1')
            $scope.EntityName = $routeParams.EntityName;
        else
            $scope.EntityName = ' New Entity';
        if ($routeParams.EntityFinanceSummaryID != '-1')
        $scope.entity = EntityFinanceSummaryService.getEntity($routeParams.EntityFinanceSummaryID);
        $scope.addEntityItem = function () {
            /*
             <td class="editCell"><input type="button" id="save" value="Add Item" data-ng-click="addEntityItem()" /> </td>
        <th><input type="text" ng-model="EntityItemName" /></th>
        <th><input type="text" ng-model="EntityItemDetail"> </th>
        <th> <input type="text" ng-model="EntityItemBudgetRequired">  </th>
        <th> <input type="text" ng-model="EntityItemBudgetAllocated">  </th>
        <th> <input type="text" ng-model="EntityItemPriority">  </th>
        <th> <input type="text" ng-model="EntityItemDateUpdated">  </th>
        <th> <input type="text" ng-model="EntityItemComments">  </th>
        <th>  &nbsp; </th>
            */
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