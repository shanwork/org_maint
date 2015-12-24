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
    var EntityFinanceSummaryController = function ($scope, EntityFinanceSummaryService, connectToService) {
        $scope.sortBy = 'DateUpdated';
        $scope.reverse = true;

        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
        $scope.doSortFloat = function (propName) {
            $scope.sortBy = parseFloat(propName);
            alert(parseFloat(propName));
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



    EntityFinanceSummaryController.$inject = ['$scope', 'EntityFinanceSummaryService', 'connectToService'];

    angular.module('org_maint_budget')
      .controller('EntityFinanceSummaryController', EntityFinanceSummaryController);

}());