(function () {
    var ContributorController = function ($scope, ContributorService, BudgetStatusService, EntityService, connectToService, configuration, $localStorage) {
    //    if (configuration.verbose == 'yes') {
        if ($localStorage.verbose == 'yes')
            {
            $scope.readMeOverview = 'This is the page for adding and listing contributions.<br> ';
            $scope.readMeOverview += 'Enter Name, amount in decimal, currency and comments (optional) .<br> ';
            $scope.readMeOverview += 'Adding a contributor adds an entry in Budget History as a  "Credit"  and adds to available budget ("Budget Status" page) .<br> ';
       }
        $scope.data =$localStorage.currencyData;
   /*     {
            currencyList:
               [{
                   Name: 'USD',
                   value: 60.00
               }, {
                   Name: 'EUR',
                   value: 75.00

               }, {
                   Name: 'INR',
                   value: 1.00

               }, {
                   Name: 'GBP',
                   value: 101.00

               }], selectedOption: {
                   Name: 'INR',
                   value: 1.00
               }
        };*/
        $scope.sortBy = 'DateReceived';
        $scope.reverse = true;
        $scope.Currency = 'INR';
        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
        GetAllRecords();
        //To Get All Records  
        function GetAllRecords() {
            if (connectToService == 'true') {
                var promiseGetContributor = ContributorService.getContributorList();
                promiseGetContributor.then(function (contributorListDb) { $scope.contributorList = contributorListDb.data; },
                 function (errorPl) {
                     //   $log.error('Some Error in Getting Records.', errorPl);
                 });
            }
            else {
                $scope.contributorList = ContributorService.getContributorList();
            }
         }
        $scope.addContributor = function () {
            var Contributor = {
                ContributorName: $scope.ContributorName,
                OriginalCurrencyAmount: $scope.OriginalCurrencyAmount,
                Currency:   $scope.data.selectedOption.Name + '(' + $scope.data.selectedOption.value + ')',
                ConvertedAmount: 0.0,
                Comments: $scope.Comments,
                // will add date later
            };
            Contributor.ConvertedAmount = Contributor.OriginalCurrencyAmount * parseFloat($scope.data.selectedOption.value);
            
            if (connectToService == 'true') {
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
            }
            else {
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
        
  

    ContributorController.$inject = ['$scope', 'ContributorService', 'BudgetStatusService', 'EntityService', 'connectToService', 'configuration', '$localStorage'];

    angular.module('org_maint_budget')
      .controller('ContributorController', ContributorController);

}());