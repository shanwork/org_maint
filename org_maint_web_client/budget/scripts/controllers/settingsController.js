(function () {
    var SettingsController = function ($scope, configuration, connectToService, $localStorage) {
        
       
     //   $localStorage.verbose = 'false';
        configuration.verbose = 'false';
        
      //  $scope.data.verbose = 'yes';
        $scope.updateVerbose = function () {
            $localStorage.verbose = $scope.data.verbose;
            configuration.verbose = $scope.data.verbose;
        };
        $scope.flushData = function () {
            $localStorage.budgetStatus = {
                BudgetAvailable: 1000.00,
                BudgetAllocated: 0,
                BudgetRequired: 0
            };
            $localStorage.budgetHistory = [
              {
                  Amount: 1000,
                  DebitCredit: 'Credit',
                  DateString: 'Nov 1, 2015',
                  Date: '2015-11-01',
                  Principal: 'Ganesha',
                  Comments: 'Initial Thrust'
              }
            ];
            $localStorage.contributorList =[ {
                             ContributorID: 1,
                             ContributorName: 'Ganesha',
                             OriginalCurrencyAmount: 1000,
                             Currency: 'INR',
                             ConvertedAmount: 1000,
                             Comments: 'Initial Thrust',
                             DateReceivedString: 'Nov 1 2015',
                             DateReceived: '2015-11-01'
            }];
            $localStorage.entityList = [
         {
             EntityFinanceSummaryID: 1,
             EntityName: 'Gaon1',
             EntityCategory: 'Village',
             BudgetAllocated: 0.0,
             BudgetUsed: 0.0,
             BudgetRequired: 70000.0,
             Priority: 1,
         },
         {
             EntityFinanceSummaryID: 2,
             EntityName: 'Gaon2',
             EntityCategory: 'Village',
             BudgetAllocated: 0.0,
             BudgetUsed: 0.0,
             BudgetRequired: 102000.0,
             Priority: 2,
         }];
            $localStorage.localEntityItemList = [
                {
                    EntityFinanceSummaryID: 1,
                    EntityItemId: 1,
                    EntityItemName: 'Tube Well Boring',
                    EntityItemDetail: 'Using Water Sensing, fine a suitable spot and dril for the water',
                    EntityItemBudgetRequired: 10000,
                    EntityItemBudgetAllocated: 0,
                    EntityItemPriority: 1,
                    EntityItemDateUpdated: 'Dec 31, 2015',
                    EntityItemComments: 'Tankers are scarce, water situation approaching criticality'
                },
                {
                    EntityFinanceSummaryID: 1,
                    EntityItemId: 2,
                    EntityItemName: 'Vitamin Supplies',
                    EntityItemDetail: 'Mitigating onset of scurvy, etc',
                    EntityItemBudgetRequired: 5000,
                    EntityItemBudgetAllocated: 0,
                    EntityItemPriority: 1,
                    EntityItemDateUpdated: 'Dec 31, 2015',
                    EntityItemComments: 'As critical as water for health and survival'

                },
                {
                    EntityFinanceSummaryID: 1,
                    EntityItemId: 3,
                    EntityItemName: 'Hygene Supplies',
                    EntityItemDetail: 'Building toilets, washing material, etc',
                    EntityItemBudgetRequired: 55000,
                    EntityItemBudgetAllocated: 0,
                    EntityItemPriority: 3,
                    EntityItemDateUpdated: 'Dec 31, 2015',
                    EntityItemComments: 'Not immediately critical but will become so, because of disease coming from bad hygene habit'

                },
                 {
                     EntityFinanceSummaryID: 2,
                     EntityItemId: 4,
                     EntityItemName: 'Tube Well Boring',
                     EntityItemDetail: 'Using Water Sensing, fine a suitable spot and dril for the water',
                     EntityItemBudgetRequired: 19000,
                     EntityItemBudgetAllocated: 0,
                     EntityItemPriority: 1,
                     EntityItemDateUpdated: 'Dec 31, 2015',
                     EntityItemComments: 'Tankers are scarce, water situation approaching criticality'
                 },
                {
                    EntityFinanceSummaryID: 2,
                    EntityItemId: 5,
                    EntityItemName: 'Vitamin Supplies',
                    EntityItemDetail: 'Mitigating onset of scurvy, etc',
                    EntityItemBudgetRequired: 8000,
                    EntityItemBudgetAllocated: 0,
                    EntityItemPriority: 1,
                    EntityItemDateUpdated: 'Dec 31, 2015',
                    EntityItemComments: 'As critical as water for health and survival'

                },
                {
                    EntityFinanceSummaryID: 2,
                    EntityItemId: 6,
                    EntityItemName: 'Hygene Supplies',
                    EntityItemDetail: 'Building toilets, washing material, etc',
                    EntityItemBudgetRequired: 75000,
                    EntityItemBudgetAllocated: 0,
                    EntityItemPriority: 3,
                    EntityItemDateUpdated: 'Dec 31, 2015',
                    EntityItemComments: 'Not immediately critical but will become so, because of disease coming from bad hygene habit'

                }
            ];
        };
       
    };
    SettingsController.$inject = ['$scope', 'configuration', 'connectToService', '$localStorage'];
    angular.module('org_maint_budget')
     .controller('SettingsController', SettingsController);

}());