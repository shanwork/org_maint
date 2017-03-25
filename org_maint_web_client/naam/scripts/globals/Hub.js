(function () {
     
    angular.module('org_maint')
      .service('Hub', function ($http, $q,$localStorage)
      {
          /* Budget */
          /* hard coded values for requirements
             hard wired requirement 1 and requirement 2
             all other updates using  functions
          */
          var budgetStatus =
             {
                 BudgetAvailable: 0.00,
                 BudgetLiquidAvailable: 0.00,
                 BudgetItemsAvailable:0.00,
                 BudgetAllocated: 0.00,
                 BudgetRequired: 480000.00,
                 DateUpdated: new Date()
             };

          var budgetHistory = [{
              BudgetHistoryID: 1,
              Name:'test1 (village)',
              Amount: 240000.00,
              DebitCredit: 'Outstanding', //Debit for allocation, Credit for contribution, Oustanding for new requirement
              DateUpdated: new Date()
          }, {
              BudgetHistoryID: 2,
              Name: 'test2 (village)',
              Amount: 240000.00,
              DebitCredit: 'Outstanding',
              DateUpdated: new Date()
          }];
          // budget snapshot
          var budgetStatusHistory = [{
              BudgetStatusHistoryID:1,
              BudgetAvailable: 0.00,
              BudgetLiquidAvailable: 0.00,
              BudgetItemsAvailable: 0.00,
              BudgetAllocated: 0.00,
              BudgetRequired: 240000.00,
              DateUpdated: new Date()
          },{
              BudgetStatusHistoryID:2,
              BudgetAvailable: 0.00,
              BudgetLiquidAvailable: 0.00,
              BudgetItemsAvailable: 0.00,
              BudgetAllocated: 0.00,
              BudgetRequired: 480000.00,
              DateUpdated: new Date()
      }];
          this.getBudgetStatus = function () {
              if ($localStorage.persistData != null && $localStorage.persistData == true) {
                  if ($localStorage.budgetStatus == null)
                      $localStorage.budgetStatus = budgetStatus;
                  else
                      budgetStatus = $localStorage.budgetStatus;
              }
              //this.updateBudgetStatus();
              return budgetStatus;
          };
          this.getBudgetStatusHistory = function () {
              if ($localStorage.persistData != null && $localStorage.persistData == true) {
                  if ($localStorage.budgetStatusHistory == null)
                      $localStorage.budgetStatusHistory = budgetStatusHistory;
                  else
                      budgetStatusHistory = $localStorage.budgetStatusHistory;
              }
              return budgetStatusHistory;
          };
          this.getBudgetHistory = function () {
              if ($localStorage.persistData != null && $localStorage.persistData == true) {
                  if ($localStorage.budgetHistory == null)
                      $localStorage.budgetHistory = budgetHistory;
                  else
                      budgetHistory = $localStorage.budgetHistory;
              }
              return budgetHistory;
          };
          // called 3 places - by budget allocation, contributor, or requirement, additions
          this.updateBudgetStatus = function (requiredAmount, availableAmount, allocatedAmount, entityName) {
              var budgetHistoryID = budgetHistory.length + 1;
              var budgetStatusHistoryID = budgetStatusHistory.length + 1;
              var name = entityName;
              budgetStatus.BudgetAvailable = parseFloat(budgetStatus.BudgetAvailable) + parseFloat(availableAmount);
              //   budgetStatus.BudgetLiquidAvailable,
              //     BudgetItemsAvailable: budgetStatus.BudgetItemsAvailable,
              budgetStatus.BudgetAllocated = parseFloat(budgetStatus.BudgetAllocated) + parseFloat(allocatedAmount);
              budgetStatus.BudgetRequired = parseFloat(budgetStatus.BudgetRequired) + parseFloat(requiredAmount);
              var budgetHistoryElement =
                     {
                         BudgetHistoryID: budgetHistoryID++,
                         Name: entityName,
                         Amount:0.00,
                         DebitCredit:'',
                         DateUpdated: new Date()
                     }
              if (requiredAmount > 0.0) {
                  budgetHistoryElement.Amount = requiredAmount;
                  budgetHistoryElement.DebitCredit = 'Outstanding';
              
              }
              if (availableAmount > 0.0) {
                  budgetHistoryElement.Amount = availableAmount;
                  budgetHistoryElement.DebitCredit = 'Credit' ;
               }
              if (allocatedAmount > 0.0) {
                  budgetHistoryElement.Amount = allocatedAmount ;
                  budgetHistoryElement.DebitCredit = 'Debit';
              }
              budgetHistory.push(budgetHistoryElement);

              var budgetUpdatedStatusHistory =
                {
                    BudgetStatusHistoryID: budgetStatusHistoryID++,
                    BudgetAvailable: budgetStatus.BudgetAvailable,
                    BudgetLiquidAvailable: budgetStatus.BudgetLiquidAvailable,
                    BudgetItemsAvailable: budgetStatus.BudgetItemsAvailable,
                    BudgetAllocated: budgetStatus.BudgetAllocated,
                    BudgetRequired: budgetStatus.BudgetRequired,
                    DateUpdated: new Date()
                }
              budgetStatusHistory.push(budgetUpdatedStatusHistory);
              if ($localStorage.persistData != null && $localStorage.persistData == true) {
                  $localStorage.budgetStatus = budgetStatus;
                  if ($localStorage.budgetStatusHistory == null)
                      $localStorage.budgetStatusHistory = [];
                  if ($localStorage.budgetStatusHistory.length < budgetStatusHistory.length)
                      $localStorage.budgetStatusHistory.push(budgetUpdatedStatusHistory);
                  if ($localStorage.budgetHistory == null)
                      $localStorage.budgetHistory = [];
                  if ($localStorage.budgetHistory.length < budgetHistory.length)
                      $localStorage.budgetHistory.push(budgetHistoryElement);
              }
          }

          this.updateBudgetStatusUnoptimized = function (requiredAmount, availableAmount, allocatedAmount, entityName) {
            var budgetHistoryID = budgetHistory.length + 1;
            var budgetStatusHistoryID = budgetStatusHistory.length + 1;
            var name = entityName;
             budgetStatus.BudgetAvailable   = parseFloat(budgetStatus.BudgetAvailable) + parseFloat(availableAmount);
         //   budgetStatus.BudgetLiquidAvailable,
         //     BudgetItemsAvailable: budgetStatus.BudgetItemsAvailable,
              budgetStatus.BudgetAllocated =  parseFloat(budgetStatus.BudgetAllocated) + parseFloat(allocatedAmount);
              budgetStatus.BudgetRequired =  parseFloat(budgetStatus.BudgetRequired) + parseFloat(requiredAmount);

            if (requiredAmount > 0.0)
            {
                var budgetRequiredHistory=
                    {
                        BudgetHistoryID: budgetHistoryID++,
                        Name: entityName,
                        Amount: requiredAmount,
                        DebitCredit: 'Outstanding',
                        DateUpdated: new Date()
                    }
                budgetHistory.push(budgetRequiredHistory);
                
            }
            if (availableAmount > 0.0) {
                var budgetAvailableHistory =
                    {
                        BudgetHistoryID: budgetHistoryID++,
                        Name: entityName,
                        Amount: availableAmount,
                        DebitCredit: 'Credit',
                        DateUpdated: new Date()
                    }
                budgetHistory.push(budgetAvailableHistory);
                 
            }
            if (allocatedAmount > 0.0) {
                var budgetAllocatedHistory =
                    {
                        BudgetHistoryID: budgetHistoryID++,
                        Name: entityName,
                        Amount: allocatedAmount,
                        DebitCredit: 'Debit',
                        DateUpdated: new Date()
                    }
                budgetHistory.push(budgetAllocatedHistory);
                 
            }
            var budgetUpdatedStatusHistory =
              {
                  BudgetStatusHistoryID: budgetStatusHistoryID++,
                  BudgetAvailable: budgetStatus.BudgetAvailable,
                  BudgetLiquidAvailable: budgetStatus.BudgetLiquidAvailable,
                  BudgetItemsAvailable: budgetStatus.BudgetItemsAvailable,
                  BudgetAllocated: budgetStatus.BudgetAllocated,
                  BudgetRequired: budgetStatus.BudgetRequired,
                  DateUpdated: new Date()
              }
            budgetStatusHistory.push(budgetUpdatedStatusHistory);
              DateUpdated: new Date()
          }
          // The allocate funds function is different in that all budget money fields are affected
          // and we need only one entry each in the budget snapshot and budget history lists
          // so we update the budget status object  available and required fields specifically here
          this.allocateFunds = function () {
              var availableBudget = parseFloat(budgetStatus.BudgetAvailable) ;
              var allocatedBudget = parseFloat(budgetStatus.BudgetAllocated) ;
              var requiredBudget = parseFloat(budgetStatus.BudgetRequired);
              var thisallocation = parseFloat(0.0);
              while (availableBudget > 0.0 && requiredBudget > 0.0)
              {
                  var i = 0;
                  for (; i < requirements.length; i++)
                  {
                      if (requirements[i].FundsOutstanding > 0.0) {
                          if (availableBudget > requirements[i].FundsOutstanding) {
                              availableBudget -= requirements[i].FundsOutstanding;
                              thisallocation += requirements[i].FundsOutstanding;
                              allocatedBudget += requirements[i].FundsOutstanding;
                              requiredBudget -= requirements[i].FundsOutstanding;
                              requirements[i].FundsAllocated += requirements[i].FundsOutstanding;
                              requirements[i].FundsOutstanding = 0.0;
                          }
                          else {
                              thisallocation += availableBudget;
                              allocatedBudget += availableBudget;
                              requiredBudget -= availableBudget;
                              requirements[i].FundsAllocated += availableBudget;
                              requirements[i].FundsOutstanding -= availableBudget;
                              availableBudget = 0.00;
                          }
                      }
                  }
                  //requirements.forEach(function (requirement) {
                  //    console.log('before:' + requirement.FundsOutstanding);
                  //    if (requirement.FundsOutstanding > 0.0) {
                  //        if (availableBudget > requirement.FundsOutstanding) {
                  //            availableBudget -= requirement.FundsOutstanding;
                  //            thisallocation += requirement.FundsOutstanding;
                  //            allocatedBudget += requirement.FundsOutstanding;
                  //            requiredBudget -= requirement.FundsOutstanding;
                  //            requirement.FundsAllocated += requirement.FundsOutstanding;
                  //            requirement.FundsOutstanding = 0.0;
                  //        }
                  //        else
                  //        {
                  //            thisallocation += availableBudget;
                  //            allocatedBudget += availableBudget;
                  //            requiredBudget -= availableBudget;
                  //            requirement.FundsAllocated += availableBudget;
                  //            requirement.FundsOutstanding -= availableBudget;
                  //            availableBudget = 0;
                  //        }
                  //    }
                  //    console.log('after:' + requirement.FundsOutstanding);
                  //    i++;
                  //    if (i > requirements.length)
                  //    {
                  //        console.log('error');
                  //        availableBudget=0.0;
                  //    }

                  //});
                  if (requiredBudget < 0.0)
                      requiredBudget = 0.0;
                  budgetStatus.BudgetRequired = requiredBudget;
                  budgetStatus.BudgetAvailable = availableBudget;
                  this.updateBudgetStatus(0.00, 0.00, thisallocation, 'Allocation');
              }
          };
          var contributors = [];
          /*
          var contributor = 
          { 
              individ_or_groupName:
              individualOrGroup :
              cashOrItem :
              currency:
              conversion:
              items: [],
              totalItemAmount,
              totalItemConvertedAmount,
              cashAmount:
              convertedCashAmount

          }
          */
          this.addContributor = function (contributor) {
              contributors.push(contributor);
              if (contributor.cashOrItem == 'cash' || contributor.cashOrItem == 'both') {
                  this.updateBudgetStatus(0, parseInt(contributor.convertedCashAmount), 0, contributor.individ_or_groupName);
                  //if ($localStorage.autoAllocate == true)
                 //this.allocateFunds();
                  //if($localStorage.autoDistribute==true)
                 // this.distributeAllRequirementFunds();
              }
              if ($localStorage.persistData != null && $localStorage.persistData == true ) {
                  if ($localStorage.contributors == null)
                      $localStorage.contributors = [];
                 if( $localStorage.contributors.length < contributors.length)
                  $localStorage.contributors.push(contributor);
              }
          };
          this.getContributors = function()
          {
              if ($localStorage.persistData != null && $localStorage.persistData == true) {
                  if ($localStorage.contributors == null)
                      $localStorage.contributors = contributors;
                  else
                      contributors = $localStorage.contributors;

              }
              return contributors;
          }
    //      requirements
          var requirements =
              [
                  {
                      RequirementID:1,
                      Name: 'test1',
                      Type: 'Village',
                      FundsRequired: 240000.00,
                      FundsOutstanding: 240000.00,
                      FundsDistributed: 0.0,
                      FundsAllocated: 0.0,
                      FundsDistributed: 0.00,
                      RequirementItems:
                          [
                             {

                                 RequirementItemID: 1,
                                 ItemName: 'item1_1',
                                 ItemCategory: 'Cat1_1',
                                 FundsRequired: 120000.00,
                                 FundsAllocated: 0.0
                             },
                              {
                                  RequirementItemID: 2,
                                  ItemName: 'item1_2',
                                  ItemCategory: 'Cat1_2',
                                  FundsRequired: 120000.00,
                                  FundsAllocated: 0.0
                              }

                          ]
                  },
              {
                  RequirementID: 2,
                  Name: 'test2',
                  Type: 'Village',
                  FundsRequired: 240000.00,
                  FundsOutstanding: 240000.00,
                  FundsAllocated: 0.0,
                  FundsDistributed: 0.0,
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

              ];
          this.getRequirements = function()
          {
              if ($localStorage.persistData != null && $localStorage.persistData == true) {
                  if ($localStorage.requirements == null)
                      $localStorage.requirements = requirements;
                  else
                      requirements = $localStorage.requirements;

              }
              return requirements;
          }
          this.addRequirement = function(requirement)
          {
              requirement.requirementId = requirements.length + 1;
              var initialRequirementItemID = 1;
              requirement.RequirementItems.forEach(function (requirementItem) {
                  requirementItem.RequirementItemID = initialRequirementItemID++;
               });
              this.updateBudgetStatus(parseFloat(requirement.FundsRequired), 0, 0, requirement.Name + '(' + requirement.Type + ')');
              //if ($localStorage.autoAllocate == true)
             // this.allocateFunds();
              //if($localStorage.autoDistribute==true)
            //  this.distributeAllRequirementFunds();
              requirements.push(requirement);
              if ($localStorage.persistData != null && $localStorage.persistData == true){
                  if ($localStorage.requirements == null)
                      $localStorage.requirements = [];
                      if( $localStorage.requirements.length < requirements.length) {
                          $localStorage.requirements.push(requirement);
                      }
              }
          }
          this.distributeRequirementFunds = function (requirementId) {
              var fundsAllocated = parseFloat(requirements[requirementId].FundsAllocated);
              var fundsDistributed = parseFloat(requirements[requirementId].FundsDistributed);
              requirements[requirementId].RequirementItems.forEach(function (requirementItem) {
                  if (requirementItem.FundsRequired > 0.0) {
                      if (fundsAllocated > requirementItem.FundsRequired) {
                          requirementItem.FundsAllocated = requirementItem.FundsRequired;
                          fundsDistributed += requirementItem.FundsRequired;
                          fundsAllocated -= requirementItem.FundsRequired;
                      //    requirementItem.FundsRequired = 0.0;
                      }
                      else
                      {
                          requirementItem.FundsAllocated += fundsAllocated;
                          fundsDistributed += fundsAllocated;
                   //       requirementItem.FundsRequired -= fundsAllocated;
                          fundsAllocated = 0.0;
                           
                      }
                  }
                  requirements[requirementId].FundsDistributed = fundsDistributed;
                  if ($localStorage.persistData != null && $localStorage.persistData == true)
                  {
                      $localStorage.requirements[requirementId] = requirements[requirementId];
                  }
              });
          }
          this.distributeAllRequirementFunds = function()
          {
             
              for (var i = 0; i < requirements.length; i++)
                  this.distributeRequirementFunds(i);
          }
          this.clearCache = function()
          {
              $localStorage.requirements = null;
              $localStorage.contributors = null;
              $localStorage.budgetHistory = null;
              $localStorage.budgetStatusHistory = null;
              $localStorage.budgetStatus = null;
          }
      })

}());