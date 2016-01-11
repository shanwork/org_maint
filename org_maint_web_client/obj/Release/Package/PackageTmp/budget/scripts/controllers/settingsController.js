﻿(function () {
    var SettingsController = function ($scope, configuration, connectToService, $localStorage) {
        $scope.CurrencyId = -1;
            $scope.currencyData =  {
            currencyList:
                [{
                    Id:1,
                    Name: 'USD',
                    value: 60.00
                }, {
                    Id: 2,
                    Name: 'EUR',
                    value: 75.00

                }, {
                    Id: 3,
                    Name: 'INR',
                    value: 1.00

                }, {
                    Id: 4,
                    Name: 'GBP',
                    value: 101.00

                }, {
                    Id: 5,
                    Name: 'DIR',
                    value: 22.00

                }], selectedOption: {
                Name: 'INR',
                value: 1.00
                }
            };
            if ($localStorage.currencyData == null || $localStorage.currencyData.currencyList==null)
                $localStorage.currencyData = $scope.currencyData;
            else
                $scope.currencyData = $localStorage.currencyData;
     //   $localStorage.verbose = 'false';
        configuration.verbose = 'false';
        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
        $scope.doSortFloat = function (propName) {
            $scope.sortBy = parseFloat(propName);
            //      alert(parseFloat(propName));
            $scope.reverse = !$scope.reverse;
        };
        $scope.updateSettings = function () {
            $localStorage.verbose = $scope.data.verbose;
            $localStorage.showTestData = $scope.data.showTestData;
            configuration.verbose = $scope.data.verbose;
        };
        $scope.updateTestData= function()
        {
            var message = 'You will be wiping out existing data';
            if ($localStorage.showTestData == 'yes')
                message += ' and it will be replaced by sample data.';
            else
                message += ' completely, leaving you with no records.';
            message += 'Proceed?';
            if (confirm(message)) {
                if ($localStorage.showTestData == 'yes') {

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
                    $localStorage.contributorList = [{
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
                }
                else {
                    $localStorage.budgetStatus = {
                        BudgetAvailable: 0.00,
                        BudgetAllocated: 0,
                        BudgetRequired: 0
                    };
                    $localStorage.localEntityItemList = [{
                        EntityFinanceSummaryID: -1,
                        EntityItemId: -1,
                        EntityItemName: '',
                        EntityItemDetail: '',
                        EntityItemBudgetRequired: 0.0,
                        EntityItemBudgetAllocated: 0.0,
                        EntityItemPriority: -1,
                        EntityItemDateUpdated: '',
                        EntityItemComments: ''
                    }, ];
                    $localStorage.entityList = [];
                    $localStorage.budgetHistory = [];
                    $localStorage.contributorList = [];

                }
            }
        };
        $scope.saveData = function () {
            var link = document.getElementById('file1Link');
            var myArray = [
                {
                    Name: 'test1',
                    value: 23
                },
                {
                    Name: 'test2',
                    value: 23
                }
                ,
                {
                    Name: 'test3',
                    value: 23
                }
            ];
            var write = '';
            var streamedOutput = []
            for (i = 0; i < myArray.length; i++) {
                streamedOutput.push( myArray[i].Name + ',' + myArray.value );
            }
            link.href = "data:text/html," + encodeURIComponent(streamedOutput.join("\r\n"));
            link.download = "inventory.txt";

           // downloadURI("data:text/html," + encodeURIComponent(myArray.join("\r\n"), "inventory.txt"));
            //for (i = 0; i < myArray.length; i++) {
            //    write += myArray[i].Name + ',' + myArray.value + '\n\r';
            //}
            //link.href = $scope.makeTextFile(write);
            //link.style.display = 'block';
        };
        $scope.textFile=null;
        $scope.makeTextFile = function (text) {
            var data = new Blob([text], { type: 'text/plain' });

            // If we are replacing a previously generated file we need to
            // manually revoke the object URL to avoid memory leaks.
            if ($scope.textFile !== null) {
                window.URL.revokeObjectURL($scope.textFile);
            }

            $scope.textFile = window.URL.createObjectURL(data);
            alert($scope.textFile);
            //   $scope.textFile = null;
            return $scope.textFile;
        };
        $scope.update = function (currencyDetail) {
            var editCurrency = currencyDetail.split(",");
            $scope.CurrencyName = editCurrency[0];
            $scope.CurrencyValue = editCurrency[1];
            $scope.CurrencyId = editCurrency[2];

        };
        $scope.updateCurrency = function () {
            for(var i =0; i< $scope.currencyData.currencyList.length;i++)
            {
                alert($scope.currencyData.currencyList[i].value);
            }
                // will add date later
             
        };
        $scope.addCurrency = function () {
            if ($scope.CurrencyId == -1) {
                var Currency = {
                    Id: $scope.currencyData.currencyList.length + 1,
                    Name: $scope.CurrencyName,
                    value: $scope.CurrencyValue
                    // will add date later
                };
                $scope.currencyData.currencyList.push(Currency);
            }
            else
            {
               
                for (var i = 0; i < $scope.currencyData.currencyList.length; i++) {
                    //alert($scope.currencyData.currencyList[i].Id);
                    //alert($scope.CurrencyId);
                    if ($scope.currencyData.currencyList[i].Id == $scope.CurrencyId)
                    {
                       
                        $scope.currencyData.currencyList[i].Name = $scope.CurrencyName;
                        $scope.currencyData.currencyList[i].value = $scope.CurrencyValue;
                       
                    }
                }

            }
            $scope.CurrencyId = -1;
            $scope.CurrencyName = '';
            $scope.CurrencyValue = '';
            $localStorage.currencyData.currencyList = $scope.currencyData.currencyList;
        };
        $scope.flushData = function () {
            $scope.updateTestData();
         //   $localStorage.budgetStatus = {
         //       BudgetAvailable: 1000.00,
         //       BudgetAllocated: 0,
         //       BudgetRequired: 0
         //   };
         //   $localStorage.budgetHistory = [
         //     {
         //         Amount: 1000,
         //         DebitCredit: 'Credit',
         //         DateString: 'Nov 1, 2015',
         //         Date: '2015-11-01',
         //         Principal: 'Ganesha',
         //         Comments: 'Initial Thrust'
         //     }
         //   ];
         //   $localStorage.contributorList =[ {
         //                    ContributorID: 1,
         //                    ContributorName: 'Ganesha',
         //                    OriginalCurrencyAmount: 1000,
         //                    Currency: 'INR',
         //                    ConvertedAmount: 1000,
         //                    Comments: 'Initial Thrust',
         //                    DateReceivedString: 'Nov 1 2015',
         //                    DateReceived: '2015-11-01'
         //   }];
         //   $localStorage.entityList = [
         //{
         //    EntityFinanceSummaryID: 1,
         //    EntityName: 'Gaon1',
         //    EntityCategory: 'Village',
         //    BudgetAllocated: 0.0,
         //    BudgetUsed: 0.0,
         //    BudgetRequired: 70000.0,
         //    Priority: 1,
         //},
         //{
         //    EntityFinanceSummaryID: 2,
         //    EntityName: 'Gaon2',
         //    EntityCategory: 'Village',
         //    BudgetAllocated: 0.0,
         //    BudgetUsed: 0.0,
         //    BudgetRequired: 102000.0,
         //    Priority: 2,
         //}];
         //   $localStorage.localEntityItemList = [
         //       {
         //           EntityFinanceSummaryID: 1,
         //           EntityItemId: 1,
         //           EntityItemName: 'Tube Well Boring',
         //           EntityItemDetail: 'Using Water Sensing, fine a suitable spot and dril for the water',
         //           EntityItemBudgetRequired: 10000,
         //           EntityItemBudgetAllocated: 0,
         //           EntityItemPriority: 1,
         //           EntityItemDateUpdated: 'Dec 31, 2015',
         //           EntityItemComments: 'Tankers are scarce, water situation approaching criticality'
         //       },
         //       {
         //           EntityFinanceSummaryID: 1,
         //           EntityItemId: 2,
         //           EntityItemName: 'Vitamin Supplies',
         //           EntityItemDetail: 'Mitigating onset of scurvy, etc',
         //           EntityItemBudgetRequired: 5000,
         //           EntityItemBudgetAllocated: 0,
         //           EntityItemPriority: 1,
         //           EntityItemDateUpdated: 'Dec 31, 2015',
         //           EntityItemComments: 'As critical as water for health and survival'

         //       },
         //       {
         //           EntityFinanceSummaryID: 1,
         //           EntityItemId: 3,
         //           EntityItemName: 'Hygene Supplies',
         //           EntityItemDetail: 'Building toilets, washing material, etc',
         //           EntityItemBudgetRequired: 55000,
         //           EntityItemBudgetAllocated: 0,
         //           EntityItemPriority: 3,
         //           EntityItemDateUpdated: 'Dec 31, 2015',
         //           EntityItemComments: 'Not immediately critical but will become so, because of disease coming from bad hygene habit'

         //       },
         //        {
         //            EntityFinanceSummaryID: 2,
         //            EntityItemId: 4,
         //            EntityItemName: 'Tube Well Boring',
         //            EntityItemDetail: 'Using Water Sensing, fine a suitable spot and dril for the water',
         //            EntityItemBudgetRequired: 19000,
         //            EntityItemBudgetAllocated: 0,
         //            EntityItemPriority: 1,
         //            EntityItemDateUpdated: 'Dec 31, 2015',
         //            EntityItemComments: 'Tankers are scarce, water situation approaching criticality'
         //        },
         //       {
         //           EntityFinanceSummaryID: 2,
         //           EntityItemId: 5,
         //           EntityItemName: 'Vitamin Supplies',
         //           EntityItemDetail: 'Mitigating onset of scurvy, etc',
         //           EntityItemBudgetRequired: 8000,
         //           EntityItemBudgetAllocated: 0,
         //           EntityItemPriority: 1,
         //           EntityItemDateUpdated: 'Dec 31, 2015',
         //           EntityItemComments: 'As critical as water for health and survival'

         //       },
         //       {
         //           EntityFinanceSummaryID: 2,
         //           EntityItemId: 6,
         //           EntityItemName: 'Hygene Supplies',
         //           EntityItemDetail: 'Building toilets, washing material, etc',
         //           EntityItemBudgetRequired: 75000,
         //           EntityItemBudgetAllocated: 0,
         //           EntityItemPriority: 3,
         //           EntityItemDateUpdated: 'Dec 31, 2015',
         //           EntityItemComments: 'Not immediately critical but will become so, because of disease coming from bad hygene habit'

         //       }
         //   ];
        };
       
    };
    SettingsController.$inject = ['$scope', 'configuration', 'connectToService', '$localStorage'];
    angular.module('org_maint_budget')
     .controller('SettingsController', SettingsController);

}());