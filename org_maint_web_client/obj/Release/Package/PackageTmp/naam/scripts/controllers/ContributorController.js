(function () {

    var ContributorController = function ($scope, $routeParams, $localStorage, $sce, Hub) {
       
        $scope.contributors = Hub.getContributors();
        $scope.convertCashAmount = function () {
            var exchangeRate = $scope.extractExchangeRate($scope.currency);
            $scope.convertedCashAmount = parseFloat($scope.cashAmount) * parseFloat(exchangeRate);
        }
        $scope.extractExchangeRate = function(currencyString)
        {
            var textString = currencyString.split(',');
            return textString[1];
        }
        $scope.addContributor = function () {
            var contributorToAdd =
                 {
                     contributorID: $scope.contributors.length+1,
                     individ_or_groupName: $scope.individ_or_groupName,
                     individualOrGroup :$scope.individualOrGroup,
                     cashOrItem :$scope.cashOrItem,
                     currency: $scope.currency,
                     items: [],
                     totalItemAmount: 0,
                     totalItemConvertedAmount: 0.00,
                     cashAmount:$scope.cashAmount,
                     convertedCashAmount:$scope.convertedCashAmount

                }
            
            Hub.addContributor(contributorToAdd); 
            Hub.getContributors();// $scope.watch?
        }

    };
    
    ContributorController.$inject = ['$scope', '$routeParams', '$localStorage', '$sce', 'Hub'];

    angular.module('org_maint')
      .controller('ContributorController', ContributorController);


}());