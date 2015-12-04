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
        $scope.addContributor = function () {
            var Contributor = {
                ContributorName: $scope.ContributorName,
                OriginalCurrencyAmount: $scope.OriginalCurrencyAmount,
                Currency: $scope.Currency,
                Comments:$scope.Comments,
                // will add date later
            };
           //alert($scope.ContributorName);
          //  alert(Contributor.ContributorName);
            var promisePost = ContributorService.addContributor(Contributor);
            promisePost.then(function (pl) {
                $scope.ContributorID = pl.data.ContributorID;
                GetAllRecords();

                //   ClearModels();
            }, function (err) {
                console.log("Some error Occured" + err);
            });
        };
     };
        
  

    ContributorController.$inject = ['$scope', 'ContributorService'];

    angular.module('org_maint_budget')
      .controller('ContributorController', ContributorController);

}());