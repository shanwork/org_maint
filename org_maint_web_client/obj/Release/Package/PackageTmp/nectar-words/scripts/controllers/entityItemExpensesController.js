(function () {
    var EntityItemExpensesController = function ($scope, $routeParams, EntityItemExpensesService, EntityFinanceSummaryService, connectToService) {
        $scope.entityItemList = [];
        $scope.EntityFinanceSummaryID = parseInt($routeParams.EntityFinanceSummaryID);
        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
         $scope.doSortFloat = function (propName) {
            $scope.sortBy = parseFloat(propName);
            //      alert(parseFloat(propName));
            $scope.reverse = !$scope.reverse;
        };
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
                var promiseGetEntity = EntityFinanceSummaryService.getEntitySummary($routeParams.EntityFinanceSummaryID);
                promiseGetEntity.then(function (entityStatusDb)
                {
                    $scope.entity = entityStatusDb.data; alert($scope.entity.EntityName);
                    var promiseGetEntityItems = EntityItemExpensesService.getEntityItemList($routeParams.EntityFinanceSummaryID);
                    promiseGetEntityItems.then(function (entityItemsDb) {
                        $scope.entityItemList = entityItemsDb.data;

                    },
                    function (errorP2) {

                    });
                },
                 function (errorPl) {
                     //   $log.error('Some Error in Getting Records.', errorPl);
                 });
                
            }
            else {
                $scope.entity = EntityFinanceSummaryService.getEntitySummary($routeParams.EntityFinanceSummaryID);
                $scope.entityItemList = EntityItemExpensesService.getEntityItemList($routeParams.EntityFinanceSummaryID);
               
            }
        }
        $scope.allocateFunds = function () {
            alert($scope.entity.BudgetAllocated);
            if ($scope.entity.BudgetAllocated > 0.0)
            {
                
                var sortedEntityItemList = $scope.entityItemList.sort(EntityItemExpensesService.compareSortedPriorityAAmountD);// EntityItemExpensesService.getEntityItemsSortedPriorityAAmountDList();
                var budgetRequired = 0.0;
                for (var i = 0; i < sortedEntityItemList.length; i++) {
                    if ($scope.entity.BudgetAllocated > sortedEntityItemList[i].EntityItemBudgetRequired) {
                        budgetRequired = sortedEntityItemList[i].EntityItemBudgetRequired;
                    }
                    else
                    {
                        budgetRequired = $scope.entity.BudgetAllocated;
                    }
                    sortedEntityItemList[i].EntityItemBudgetAllocated += budgetRequired;
                    sortedEntityItemList[i].EntityItemBudgetRequired -= budgetRequired;
                    $scope.entity.BudgetAllocated -= budgetRequired;
                    $scope.entity.BudgetUsed += budgetRequired;
                }
                }
        };

        $scope.updateEntity = function () {
            if (connectToService == 'true') {
                // add or update shouldnt matter...
                if ($routeParams.EntityFinanceSummaryID == '-1') {
                    $scope.entity.EntityFinanceSummaryID = -1;
                }
                // later now we will do one by one      var promisePost = EntityFinanceSummaryService.updateEntityDetail($scope.entity, $scope.entityItemList);
                var promisePost = EntityFinanceSummaryService.updateEntity($scope.entity);
                    promisePost.then(function (p1) {
                        //   alert(p1.data);
                        $scope.EntityFinanceSummaryID = p1.data;
                        for (var i = 0; i < $scope.entityItemList.length; i++) {
                            //     alert($scope.entityItemList[i].EntityFinanceSummaryID);
                            if ($scope.entityItemList[i].EntityFinanceSummaryID == -1) {
                                $scope.entityItemList[i].EntityFinanceSummaryID = $scope.EntityFinanceSummaryID;
                             //   alert('add new item');
                                var promisePost2 = EntityItemExpensesService.addEntityItem($scope.entityItemList[i], $scope.EntityFinanceSummaryID);
                                promisePost2.then(function (p2) {
                                    $scope.entityItemList[i].EntityItemID = p2.data;
                                }, function (err2) {
                                    console.log("Some error Occured" + err2);
                                });
                            }
                        }
                        //     GetAllRecords();

                        //   ClearModels();
                    }, function (err) {
                        alert('error');
                        console.log("Some error Occured" + err);
                    });
                 
              
            }
            else // client side
            {
                $scope.entity.DateUpdated = new Date();
                if ($routeParams.EntityFinanceSummaryID == '-1') {
                    var EntityFinanceSummaryId = EntityFinanceSummaryService.addEntity($scope.entity);
                    $scope.EntityFinanceSummaryID = EntityFinanceSummaryService.getEntityListLength();
                    for (var i = 0; i < $scope.entityItemList.length; i++) {
                   //     alert($scope.entityItemList[i].EntityFinanceSummaryID);
                        if ($scope.entityItemList[i].EntityFinanceSummaryID == -1) {
                            $scope.entityItemList[i].EntityFinanceSummaryID = $scope.EntityFinanceSummaryID;
                            $scope.entityItemList[i].EntityItemDateUpdated = new Date();
                            EntityItemExpensesService.addEntityItem($scope.entityItemList[i], $scope.EntityFinanceSummaryID);
                        }

                    }
                }
                else {
                    for (var i = 0; i < $scope.entityItemList.length; i++) {
                        alert($scope.entityItemList[i].EntityFinanceSummaryID);
                        if ($scope.entityItemList[i].EntityFinanceSummaryID == -1) {
                            $scope.entityItemList[i].EntityFinanceSummaryID = $scope.EntityFinanceSummaryID;
                            $scope.entityItemList[i].EntityItemDateUpdated = new Date();

                            EntityItemExpensesService.addEntityItem($scope.entityItemList[i], $scope.EntityFinanceSummaryID);
                        }

                    }
                    EntityFinanceSummaryService.updateEntity($scope.entity);
                }
                //for (var i = 0; i < $scope.entityItemList.length; i++) {
                //    alert($scope.entityItemList[i].EntityFinanceSummaryID);
                //    if ($scope.entityItemList[i].EntityFinanceSummaryID == -1 ) {
                //        $scope.entityItemList[i].EntityFinanceSummaryID = $scope.EntityFinanceSummaryID;
                        
                //        EntityItemExpensesService.addEntityItem($scope.entityItemList[i], $scope.EntityFinanceSummaryID);
                //    }

                //}
            }
        };
        
        $scope.updateEntityOld = function () {
            if ($routeParams.EntityFinanceSummaryID == '-1') {

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

                    var EntityFinanceSummaryId = EntityFinanceSummaryService.addEntity($scope.entity);
                    $scope.EntityFinanceSummaryID = EntityFinanceSummaryService.getEntityListLength();
                    for (var i = 0; i < $scope.entityItemList.length; i++) {
                   //     alert($scope.entityItemList[i].EntityItemName);
                        $scope.entityItemList[i].EntityFinanceSummaryID = $scope.EntityFinanceSummaryID;
                //        alert($scope.entityItemList[i].EntityFinanceSummaryID);
                        EntityItemExpensesService.addEntityItem($scope.entityItemList[i], $scope.EntityFinanceSummaryID);

                    }
                    //      GetAllRecords();
                }

            }
            else {
                EntityFinanceSummaryService.updateEntity($scope.entity);
            }

        };
        $scope.addEntityItem = function()
        {
            var EntityItem = {
                EntityFinanceSummaryID:-1,
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
            //if ($routeParams.EntityFinanceSummaryID != -1)
            //{
            //    EntityItem.EntityFinanceSummaryID = $routeParams.EntityFinanceSummaryID;
            //}
            
       //     $scope.entityItemList = EntityItemExpensesService.getEntityItemList($routeParams.EntityFinanceSummaryID);
            $scope.entityItemList.push(EntityItem);
        }

    };



    EntityItemExpensesController.$inject = ['$scope', '$routeParams', 'EntityItemExpensesService', 'EntityFinanceSummaryService','connectToService'];

    angular.module('nectar_words_app')
      .controller('EntityItemExpensesController', EntityItemExpensesController);

}());