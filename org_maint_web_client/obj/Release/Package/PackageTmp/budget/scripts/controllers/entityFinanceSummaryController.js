/*
 [DataMember]
        public int EntityFinanceSummaryID { get; set; }

        [DataMember]
        public string EntityName { get; set; }

        [DataMember]
        public int Priority { get; set; }

        [DataMember]
        public decimal BudgetRequired { get; set; }

        [DataMember]
        public decimal BudgetAllocated { get; set; }

        [DataMember]
        public string DateUpdatedString { get; set; }

        [DataMember]
        public Nullable<System.DateTime> DateUpdated { get; set; }

        [DataMember]
        public string Comments { get; set; }
        */
(function () {
    var EntityFinanceSummaryController = function ($scope, EntityFinanceSummaryService, EntityItemExpensesService, connectToService, configuration, $localStorage) {
        $scope.sortBy = 'DateUpdated';
        $scope.reverse = true;
        //    if (configuration.verbose == 'yes') {
        if ($localStorage.verbose == 'yes') {
            $scope.readMeOverview = 'This is the entity overview and detail page.<br> ';
            $scope.readMeOverview += 'Allocable is the number of entities awaiting funding and budget is available.<br> ';
            $scope.readMeOverview += 'Allocated is the number of entities which have had budget allocated either fully or partially<br> ';
            $scope.readMeOverview += 'Unallocated  is the number of entities awaiting funding but budget is unavailable<br>';
            $scope.readMeOverview += '"Add Entity with Expense Items" - opens detail page to add an entity and its expense items<br>';
            $scope.readmeAdd = "History - shows the list of contributions (''Credit'') and distributions (''Debit''). <br> "
            $scope.readmeAdd = "When a contribution is added (''Contributors'' page), a ''Credit'' entry is added below. <br> "
            $scope.readmeAdd += "When the ''Allocate'' button (above) is pressed, a number of ''Debit'' entries are added corresponding to the entities whose budgets are fulfilled.<br>"
            $scope.readmeAdd += "(bug - the amount in the allocate edit box should reduce by the total amounts of debits)"
        }

        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
        $scope.doSortFloat = function (propName) {
            $scope.sortBy = parseFloat(propName);
      //      alert(parseFloat(propName));
            $scope.reverse = !$scope.reverse;
        };
        GetAllRecords();
        //To Get All Records  
        function GetAllRecords() {
            if (connectToService == 'true') {
                var promiseGetEntityStatus = EntityFinanceSummaryService.getEntityStatus();
                promiseGetEntityStatus.then(function (entityStatusDb) { $scope.entityStatus = entityStatusDb.data; },
                 function (errorPl) {
                     //   $log.error('Some Error in Getting Records.', errorPl);
                 });
                var promiseGetEntityList = EntityFinanceSummaryService.getEntitiesList();
                promiseGetEntityList.then(function (entityListDb) { $scope.entityList = entityListDb.data; },
                 function (errorPl) {
                     //   $log.error('Some Error in Getting Records.', errorPl);
                 });
            }
            else {
                $scope.entityStatus = EntityFinanceSummaryService.getEntityStatus();
                $scope.entityList = EntityFinanceSummaryService.getEntitiesList();
            }
        }
        $scope.addEntity = function () {
            var Entity = {
                EntityName: $scope.EntityName,
                EntityCategory: $scope.EntityCategory,
                BudgetAllocated: parseFloat($scope.BudgetAllocated),
                BudgetRequired: parseFloat($scope.BudgetRequired),
                BudgetUsed: parseFloat($scope.BudgetUsed),
                
                Priority: parseInt($scope.Priority),
                Comments: $scope.Comments,
                DateUpdated: new Date()
                // will add date later
            };
            if (connectToService == 'true') {
                var promisePost = EntityFinanceSummaryService.addEntity(Entity);
                promisePost.then(function (pl) {
                    $scope.EntityBudgetPriorityID = pl.data.EntityBudgetPriorityID;
                    GetAllRecords();

                    //   ClearModels();
                }, function (err) {
                    console.log("Some error Occured" + err);
                });
            }
            else {
                EntityFinanceSummaryService.addEntity(Entity);
                GetAllRecords();
            }
        };
        $scope.oldEntityIdNewEntityIdList = [];
        $scope.uploadEntitySummariesItems = function () {
            
            var file = entitySummaryItemFileInput.files[0];
            var reader = new FileReader();
            reader.onload = function (e) {
                var lines = reader.result.split('\n');
                if (lines.length > 0) {
                    var newEntitySummaryId = 0;
                    for (eLine = 0; eLine < lines.length; eLine++) {
                        var entityLine = lines[eLine].split(',');
                       
                        if (entityLine[0] == "Entity") {
                            var Entity = {
                                EntityFinanceSummaryID: -1,
                                EntityName: entityLine[1],
                                EntityCategory: entityLine[2],
                                BudgetAllocated: parseFloat(entityLine[3]),
                                BudgetUsed: parseFloat(entityLine[4]),
                                BudgetRequired: parseFloat(entityLine[5]),
                                Priority: parseInt(entityLine[6]),
                                Comments: ''
                            };
                            var newEntitySummaryId = EntityFinanceSummaryService.addEntity(Entity);  
                            if ($localStorage.debugMode == true) alert('new entity id ' + newEntitySummaryId)
                            var oldEntityIdNewEntityId = { OldEntityId: entityLine[0], newEntityId: newEntitySummaryId };
                            if ($localStorage.debugMode == true)  alert('old summary id ' + entityLine[0] + ' replaced by ' + newEntitySummaryId);
                        }
                        else {
                            var EntityItem =
                                    {
                                        EntityFinanceSummaryID: newEntitySummaryId,
                                        EntityItemName: entityLine[2],
                                        EntityItemDetail: entityLine[3],
                                        EntityItemBudgetRequired: entityLine[4],
                                        EntityItemBudgetAllocated: entityLine[5],
                                        EntityItemPriority: entityLine[6],
                                        EntityItemDateUpdated: entityLine[7],
                                        EntityItemComments: entityLine[8],
                                    };
                            if ($localStorage.debugMode == true) {
                                alert('uploading name:' + EntityItem.EntityItemName);
                                alert('uploading detail:' + EntityItem.EntityItemDetail);
                                alert('uploading req:' + EntityItem.EntityItemBudgetRequired);
                                alert('uploading alloc:' + EntityItem.EntityItemBudgetAllocated);
                                alert('uploading pri:' + EntityItem.EntityItemPriority);
                                alert('uploading EntityItemComments:' + EntityItem.EntityItemComments);
                            }
                            EntityItemExpensesService.addEntityItem(EntityItem, newEntitySummaryId);
                            if ($localStorage.debugMode == true) alert('added new item for  ' + newEntitySummaryId)

                        }
                        $scope.oldEntityIdNewEntityIdList.push(oldEntityIdNewEntityId);
                    };


                }
                $localStorage.oldEntityIdNewEntityIdList = $scope.oldEntityIdNewEntityIdList;
                alert('entity data uploaded.. please refresh the page');
            }
            reader.readAsText(file);
            return;
        }
        $scope.uploadEntitySummaries = function () {
            var file = entitySummaryFileInput.files[0];
            var reader = new FileReader();
            reader.onload = function (e) {
                var lines = reader.result.split('\n');
                if (lines.length > 0) {

                    for (eLine = 0; eLine < lines.length; eLine++) {
                        var entityLine = lines[eLine].split(',');
                        var Entity = {
                            EntityFinanceSummaryID: -1,
                            EntityName: entityLine[1],
                            EntityCategory: entityLine[2],
                            BudgetAllocated: parseFloat(entityLine[3]),
                            BudgetUsed: parseFloat(entityLine[4]),
                            BudgetRequired: parseFloat(entityLine[5]),
                            Priority: parseInt(entityLine[6]),
                            Comments: ''
                        };
                        var newEntitySummaryId = EntityFinanceSummaryService.addEntity(Entity);
                        var oldEntityIdNewEntityId = { OldEntityId: entityLine[0], newEntityId: newEntitySummaryId };
                        alert('old summary id ' + entityLine[0] + ' replaced by ' + newEntitySummaryId);
                        $scope.oldEntityIdNewEntityIdList.push(oldEntityIdNewEntityId);
                    };
                   

                }
                $localStorage.oldEntityIdNewEntityIdList = $scope.oldEntityIdNewEntityIdList;
                alert('entity data uploaded.. please refresh the page');
            }
            reader.readAsText(file);
            return;
        };
        $scope.uploadEntityItems = function () {
            if ($localStorage.oldEntityIdNewEntityIdList == null || $localStorage.oldEntityIdNewEntityIdList.length == 0) {
                alert('entity data not loaded');

            }
            else {
                alert($localStorage.oldEntityIdNewEntityIdList.length);
                var file = entityItemFileInput.files[0];
                var reader = new FileReader();
                reader.onload = function (e) {
                    var lines = reader.result.split('\n');
                    if (lines.length > 0) {

                        for (eILine = 0; eILine < lines.length; eILine++) {
                            var entityItemLine = lines[eILine].split(',');

                            var EntityItem =
                                {
                                    EntityFinanceSummaryID: -1,
                                    EntityItemName: entityItemLine[2],
                                    EntityItemDetail: entityItemLine[3],
                                    EntityItemBudgetRequired: entityItemLine[4],
                                    EntityItemBudgetAllocated: entityItemLine[5],
                                    EntityItemPriority: entityItemLine[6],
                                    EntityItemDateUpdated: entityItemLine[7],
                                    EntityItemComments: entityItemLine[8],
                                };
                            var currentEntityFinanceSummaryId = entityItemLine[1];
                            alert('current entity id=' + currentEntityFinanceSummaryId);
                            for (matchIndex = 0 ; matchIndex < $localStorage.oldEntityIdNewEntityIdList.length; matchIndex++) {
                                
                                if ($localStorage.oldEntityIdNewEntityIdList[matchIndex].OldEntityId == currentEntityFinanceSummaryId) {
                                    alert($localStorage.oldEntityIdNewEntityIdList[matchIndex].OldEntityId + ' replaced by ' + $localStorage.oldEntityIdNewEntityIdList[matchIndex].newEntityId);
                                    EntityItem.EntityFinanceSummaryID = $localStorage.oldEntityIdNewEntityIdList[matchIndex].newEntityId;
                                    EntityItemExpensesService.addEntityItem(EntityItem, $localStorage.oldEntityIdNewEntityIdList[matchIndex].newEntityId);
                                }
                            }
                        };


                    }
                    alert('entity data uploaded.. please refresh the page');
                }
                reader.readAsText(file);

            }
            return;
        };

    };



    EntityFinanceSummaryController.$inject = ['$scope', 'EntityFinanceSummaryService', 'EntityItemExpensesService', 'connectToService', 'configuration', '$localStorage'];

    angular.module('org_maint_budget')
      .controller('EntityFinanceSummaryController', EntityFinanceSummaryController);

}());