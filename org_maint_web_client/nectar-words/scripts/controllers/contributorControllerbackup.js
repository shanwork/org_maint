(function () {
    var ContributorController = function ($scope, ContributorService, BudgetStatusService, EntityService, connectToService) {
        $scope.sortBy = 'DateReceived';
        $scope.reverse = true;

        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
        GetAllRecords();
        //To Get All Records  
        function GetAllRecords() {
            if (connectToService == 'true') {
                var promiseGetContributor = ContributorService.getContributorList();
                promiseGetContributor.then(function (contributorListDb) { alert('error'); $scope.contributorList = contributorListDb.data; },
                 function (errorPl) {
                   
                     //   $log.error('Some Error in Getting Records.', errorPl);
                 });
            }
            else
            {
                $scope.contributorList = ContributorService.getContributorList();
            }
         }
        $scope.addContributor = function () {
            var Contributor = {
                ContributorName: $scope.ContributorName,
                OriginalCurrencyAmount: $scope.OriginalCurrencyAmount,
                Currency: $scope.Currency,
                ConvertedAmount: 0.0,
                Comments:$scope.Comments,
                // will add date later
            };
            switch ($scope.Currency)
            {
                case 'INR':
                    Contributor.ConvertedAmount = Contributor.OriginalCurrencyAmount;
                    break;
                case 'USD': Contributor.ConvertedAmount = Contributor.OriginalCurrencyAmount * 60.0; break;
                case 'EUR': Contributor.ConvertedAmount = Contributor.OriginalCurrencyAmount * 75.0; break;
                default : Contributor.ConvertedAmount = Contributor.OriginalCurrencyAmount * 15.0; break;
            }
           
            if (connectToService == 'true') {

                var promisePost = ContributorService.addContributor(Contributor);
                promisePost.then(function (pl) {
                    $scope.ContributorID = pl.data.ContributorID;
                    GetAllRecords();

                    //   ClearModels();
                }, function (err) {
                    console.log("Some error Occured" + err);
                });
            }
            else
            {
                ContributorService.addContributor(Contributor);
                     var budgetHistoryElement =
                {
                    Amount: Contributor.ConvertedAmount,
                    DebitCredit: 'Credit',
                    DateString: 'Nov 1, 2015',
                    Date: '2015-11-01',
                    Principal: Contributor.ContributorName,
                    Comments: Contributor.Comments
                }
                     BudgetStatusService.addBudgetHistory(budgetHistoryElement);
                     EntityService.updateEntityStatus();
                GetAllRecords();
            }

        };
     };
        
  

    ContributorController.$inject = ['$scope', 'ContributorService','BudgetStatusService', 'connectToService'];

    angular.module('org_maint_budget')
      .controller('ContributorController', ContributorController);

}());