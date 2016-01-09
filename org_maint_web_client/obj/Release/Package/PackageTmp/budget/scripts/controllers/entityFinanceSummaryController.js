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
    var EntityFinanceSummaryController = function ($scope, EntityFinanceSummaryService, connectToService, configuration) {
        $scope.sortBy = 'DateUpdated';
        $scope.reverse = true;
        if (configuration.verbose == 'yes') {
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
                Comments: $scope.Comments
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
    };



    EntityFinanceSummaryController.$inject = ['$scope', 'EntityFinanceSummaryService', 'connectToService', 'configuration'];

    angular.module('org_maint_budget')
      .controller('EntityFinanceSummaryController', EntityFinanceSummaryController);

}());