(function () {
    var ContributorController = function ($scope, ContributorService) {
        $scope.sortBy = 'DateReceived';
        $scope.reverse = true;

        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
        GetAllRecords();
        //To Get All Records  
        function GetAllRecords() {
            var promiseGetContributor = ContributorService.getContributorList();
            promiseGetContributor.then(function (contributorListDb) { $scope.contributorList = contributorListDb.data; },
             function (errorPl) {
                 //   $log.error('Some Error in Getting Records.', errorPl);
             });
         }
    

    };

    ContributorController.$inject = ['$scope', 'ContributorService'];

    angular.module('org_maint_budget')
      .controller('ContributorController', ContributorController);

}());