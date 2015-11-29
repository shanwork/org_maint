(function () {
    var ContributorController = function ($scope, ContributorService) {

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