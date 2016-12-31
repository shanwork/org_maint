(function () {

    var RequirementsController = function ($scope, $routeParams, $localStorage, $sce, Hub) {
        $scope.fundsAllocated = 0.0;
        $scope.fundsRequired = 0.0;
        $scope.requirementItems = [];
        $scope.requirements = Hub.getRequirements();
        $scope.addItem = function()
        {
            var newItem =
                {
                     RequirementItemID: parseInt(0),
                    ItemName: '',
                    ItemCategory: '',
                    Quantity: 0.00,
                    UnitPrice: 0.00,
                    FundsRequired: 0.00
                };
            $scope.requirementItems.push(newItem);
        }
        $scope.calculateFundsRequired = function(item)
        {
            item.FundsRequired = parseInt(item.Quantity) * parseFloat(item.UnitPrice);
            $scope.rollUpItemCosts();
        }
        $scope.rollUpItemCosts = function()
        {
            $scope.fundsRequired = 0.0; $scope.fundsOutstanding = 0.0;
            $scope.requirementItems.forEach(function (item) { $scope.fundsRequired += parseFloat(item.FundsRequired); $scope.fundsOutstanding += parseFloat(item.FundsRequired); });
        }
        $scope.addRequirement = function()
        {
       /*     RequirementID: 2,
            Name: 'test2',
            Type: 'Village',
            FundsRequired: 240000.00,
            FundsAllocated: 0.0,
            RequirementItems:
            [
               {
                   RequirementItemID: 1,
                   ItemName: 'item2_1',
                   ItemCategory: 'Cat2_1',
                   FundsRequired: 220000.00,
                   FundsAllocated: 0.0
               },
                {
                    RequirementItemID: 2,
                    ItemName: 'item2_2',
                    ItemCategory: 'Cat2_2',
                    FundsRequired: 20000.00,
                    FundsAllocated: 0.0
                }

            ]
        }
        */
            var newRequirement =
                {
                    RequirementID: parseInt(0),
                    Name: $scope.requirementName,
                    Type: $scope.requirementType,
                    FundsRequired: $scope.fundsRequired,
                    FundsOutstanding: $scope.fundsRequired,
                    FundsAllocated: $scope.fundsAllocated,
                    FundsDistributed: 0.00,
                    RequirementItems: $scope.requirementItems
                };
            Hub.addRequirement(newRequirement);
            $scope.requirements = Hub.getRequirements();
            
        }
        $scope.distributeFunds = function (index) {
            Hub.distributeRequirementFunds(parseInt(index));
            $scope.requirements = Hub.getRequirements();
       //     $scope.$digest();
        }
    };
    RequirementsController.$inject = ['$scope', '$routeParams', '$localStorage', '$sce', 'Hub'];

    angular.module('org_maint')
      .controller('RequirementsController', RequirementsController);


}());