﻿(function () {
    var SettingsController = function ($scope, configuration, connectToService, $localStorage) {
        var today = new Date();
        $scope.suffix = today.getDate() + '_' + (today.getMonth() + 1) + '_' + today.getFullYear() + '.txt'
        $scope.overwriteCurrency = true;
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
                message += ' completely, leaving you with no records, except the default currency of INR.';
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
                    $localStorage.entityItemList = [
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
                    $localStorage.currencyData = {
                        currencyList:
                             [{
                                 Id: 1,
                    Name: 'INR',
                    value: 1.00

                },{
                                Id: 2,
                                Name: 'USD',
                                value: 60.00
                            }, {
                                Id: 3,
                                Name: 'EUR',
                                value: 75.00

                            },   {
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
                }
                else {
                    $localStorage.budgetStatus = {
                        BudgetAvailable: 0.00,
                        BudgetAllocated: 0,
                        BudgetRequired: 0
                    };
                    $localStorage.entityItemList = [{
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
                    $localStorage.currencyData = { currencyList:
                            [{
                                Id: 1,
                                Name: 'INR',
                                value: 1.00

                            }]
                    };

                    }
            }
        };
        $scope.upload = function () {
            var file = fileInput.files[0];
            alert(fileInput.files[0].name);
            var reader = new FileReader();
            reader.onload = function (e) {
                alert( reader.result.split('\n')[0]);
            }

            reader.readAsText(file);
             
        };
        $scope.uploadCurrency = function () {
            var file = currencyFileInput.files[0];
          //  alert(currencyFileInput.files[0].name);
            var reader = new FileReader();
            reader.onload = function (e) {
                var lines = reader.result.split('\n');
                if (lines.length > 0)
                {
                    var overwrite = document.getElementById('overwrite');
                  //  alert(overwrite.value);
                    if ($scope.overwriteCurrency == true) {
                        $scope.currencyData.currencyList = [];
                    }
                    for (i=0; i < lines.length;i++)
                    {

                        var currencyLine = lines[i].split(',');
                        var currencyElement = {
                            Id: currencyLine[0],
                            Name: currencyLine[1],
                            value: currencyLine[2]
                        };
                        $scope.currencyData.currencyList.push(currencyElement);
                    }
                    alert('currency data uploaded.. please refresh the page');
                }
            }

            reader.readAsText(file);

        };
        $scope.uploadBudgetStatus = function(fileObj)
        {

        }
        $scope.saveData = function () {
            var contributorListLink = document.getElementById('contributorListLink');
            
            var contributorListOutput = []
            for (i = 0; i < $localStorage.contributorList.length; i++) {
                contributorListOutput.push($localStorage.contributorList[i].ContributorID + ',' +
                    $localStorage.contributorList[i].ContributorName + ',' +
                    $localStorage.contributorList[i].OriginalCurrencyAmount + ',' +
                    $localStorage.contributorList[i].Currency + ',' +
                    $localStorage.contributorList[i].ConvertedAmount + ',' +
                $localStorage.contributorList[i].Comments + ',' +
                $localStorage.contributorList[i].DateReceivedString + ',' +
                 $localStorage.contributorList[i].DateReceived);
            }
            contributorListLink.href = "data:text/html," + encodeURIComponent(contributorListOutput.join("\r\n"));
            contributorListLink.download = "contributorList" + $scope.suffix;
            contributorListLink.style.display = 'block';
            
            var entityListLink = document.getElementById('entityListLink');
            var entityListOutput = []
            for (i = 0; i < $localStorage.entityList.length; i++) {
                entityListOutput.push( 
                $localStorage.entityList[i].EntityFinanceSummaryID + ',' +
                $localStorage.entityList[i].EntityName + ',' +
                $localStorage.entityList[i].EntityCategory + ',' +
                $localStorage.entityList[i].BudgetAllocated + ',' +
                $localStorage.entityList[i].BudgetUsed + ',' +
                $localStorage.entityList[i].BudgetRequired + ',' +
               $localStorage.entityList[i].Priority );
            }
            entityListLink.href = "data:text/html," + encodeURIComponent(entityListOutput.join("\r\n"));
            entityListLink.download = "entities" + $scope.suffix;
            entityListLink.style.display = 'block';

            var entityItemListLink = document.getElementById('entityItemListLink');
            var entityItemListOutput = []
            for (i = 0; i < $localStorage.entityItemList.length; i++) {
                entityItemListOutput.push(
                $localStorage.entityItemList[i].EntityFinanceSummaryID + ',' +
                $localStorage.entityItemList[i].EntityItemId + ',' +
                $localStorage.entityItemList[i].EntityItemName + ',' +
               $localStorage.entityItemList[i].EntityItemDetail + ',' +
                $localStorage.entityItemList[i].EntityItemBudgetRequired + ',' +
                $localStorage.entityItemList[i].EntityItemBudgetAllocated + ',' +
                $localStorage.entityItemList[i].EntityItemPriority + ',' +
                $localStorage.entityItemList[i].EntityItemDateUpdated + ',' +
                $localStorage.entityItemList[i].EntityItemComments);
            }
            entityItemListLink.href = "data:text/html," + encodeURIComponent(entityItemListOutput.join("\r\n"));
            entityItemListLink.download = "entityItemList" + $scope.suffix;
            entityItemListLink.style.display = 'block';
           
            var budgetHistoryLink = document.getElementById('budgetHistoryLink');
            var budgetHistoryOutput = []
            for (i = 0; i < $localStorage.budgetHistory.length; i++) {
                budgetHistoryOutput.push( 
                $localStorage.budgetHistory[i].Amount + ',' +
                 $localStorage.budgetHistory[i].DebitCredit + ',' +
                  $localStorage.budgetHistory[i].Date + ',' +
                 $localStorage.budgetHistory[i].Principal + ',' +
                 $localStorage.budgetHistory[i].Comments);
            }
            budgetHistoryLink.href = "data:text/html," + encodeURIComponent(budgetHistoryOutput.join("\r\n"));
            budgetHistoryLink.download = "budgetHistory" + $scope.suffix;
            budgetHistoryLink.style.display = 'block';
           
            var budgetStatusLink = document.getElementById('budgetStatusLink');
            
            budgetStatusLink.href = "data:text/html," + encodeURIComponent($localStorage.budgetStatus.BudgetAvailable + ',' +
         $localStorage.budgetStatus.BudgetAllocated + ',' +
        $localStorage.budgetStatus.BudgetRequired );
            budgetStatusLink.download = "budgetStatus" + $scope.suffix;
            budgetStatusLink.style.display = 'block';
          
            var currencyListLink = document.getElementById('currencyListLink');
            var currencyListOutput = []
            for (i = 0; i < $localStorage.currencyData.currencyList.length; i++) {
                currencyListOutput.push(
                $localStorage.currencyData.currencyList[i].Id + ',' +
                $localStorage.currencyData.currencyList[i].Name + ',' +
                 $localStorage.currencyData.currencyList[i].value  );
            }
            currencyListLink.href = "data:text/html," + encodeURIComponent(currencyListOutput.join("\r\n"));
            currencyListLink.download = "currencyList" + $scope.suffix;
            currencyListLink.style.display = 'block';
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
         //   $localStorage.entityItemList = [
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