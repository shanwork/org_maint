(function () {
    var EntityItemExpensesController = function ($scope, $routeParams, EntityItemExpensesService, EntityFinanceSummaryService, connectToService) {
        $scope.entityItemList = [];
        $scope.EntityFinanceSummaryID  = parseInt($routeParams.EntityFinanceSummaryID)
        if ($routeParams.EntityName != '-1')
            $scope.EntityName = $routeParams.EntityName;
        else
        {
            $scope.EntityName = ' New Entity';
            $scope.entity =
              {
                  EntityName: 'New entity',
                  EntityCategory: 'New Cat',
                  BudgetAllocated: 0,
                  BudgetUsed: 0,
                  BudgetRequired: 0,
                  Priority: 1

              };
      //      $scope.entity = entity;
      //      alert($scope.entity.EntityCategory);
     //      $scope.entity.EntityCategory = 'Entity Cat';
            //$scope.entity.BudgetAllocated = $scope.entity.BudgetUsed = $scope.entity.BudgetRequired =parseFloat(0);
            //$scope.entity.Priority = parseInt(1) ; 
        }
        if ($routeParams.EntityFinanceSummaryID != '-1') {
          
            if (connectToService == 'true') {
                var promiseGetEntity = EntityFinanceSummaryService.getEntity($routeParams.EntityFinanceSummaryID);
                promiseGetEntity.then(function (entityStatusDb) { $scope.entity = entityStatusDb.data; },
                 function (errorPl) {
                     //   $log.error('Some Error in Getting Records.', errorPl);
                 });
                
            }
            else {
                $scope.entity = EntityFinanceSummaryService.getEntity($routeParams.EntityFinanceSummaryID);
               
            }
        }
        $scope.updateEntity = function () {
            if ($routeParams.EntityFinanceSummaryID == '-1')
            {
                
                if (connectToService == 'true') {
                    var promisePost = EntityFinanceSummaryService.addEntity($scope.entity);
                    promisePost.then(function (pl) {
                        $scope.EntityBudgetPriorityID = pl.data.EntityBudgetPriorityID;
                   //     GetAllRecords();

                        //   ClearModels();
                    }, function (err) {
                        console.log("Some error Occured" + err);
                    });
                }
                else {
                    EntityFinanceSummaryService.addEntity($scope.entity);
              //      GetAllRecords();
                }
                $scope.EntityFinanceSummaryID = EntityFinanceSummaryService.getEntityListLength();
            }
            else 
            {
                EntityFinanceSummaryService.updateEntity($scope.entity);
            }
          
        };
        $scope.addEntityItem = function()
        {
            var EntityItem = {
                EntityItemName: $scope.EntityItemName,
                EntityItemDetail: $scope.EntityItemDetail,
                EntityItemName: $scope.EntityItemName,
                EntityItemBudgetAllocated: parseFloat($scope.EntityItemBudgetAllocated),
                EntityItemBudgetRequired: parseFloat($scope.EntityItemBudgetRequired),
                EntityItemBudgetRequired: parseFloat($scope.EntityItemBudgetRequired),
                EntityItemPriority: parseInt($scope.EntityItemPriority),
                EntityItemDateUpdated: parseInt($scope.EntityItemDateUpdated),
                EntityItemComments: $scope.EntityItemComments
                // will add date later
            };
            $scope.entity.BudgetRequired += parseFloat($scope.EntityItemBudgetRequired);
            if ($scope.entity.BudgetAllocated > 0) {
                if ($scope.entity.BudgetAllocated >= $scope.EntityItemBudgetAllocated) {
                    $scope.entity.BudgetAllocated -= parseFloat($scope.EntityItemBudgetAllocated);
                    $scope.entity.BudgetUsed += parseFloat($scope.EntityItemBudgetUsed);
                }
                else {

                    $scope.entity.BudgetUsed += $scope.entity.BudgetAllocated;
                    $scope.entity.BudgetAllocated = 0;
                }
            }
            EntityItem.EntityItemID = $scope.entityItemList.length + 1;
            $scope.entityItemList.push(EntityItem);
        }

    };



    EntityItemExpensesController.$inject = ['$scope', '$routeParams', 'EntityItemExpensesService', 'EntityFinanceSummaryService','connectToService'];

    angular.module('org_maint_budget')
      .controller('EntityItemExpensesController', EntityItemExpensesController);

}());