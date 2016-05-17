(function () {
     
    angular.module('org_maint')
      .service('Hub', function ($http, $q)
      {
          /* Budget */
          /* hard coded values for requirements
             hard wired requirement 1 and requirement 2
             all other updates using functions
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

              //this.updateBudgetStatus();
              return budgetStatus;
          };
          this.getBudgetStatusHistory = function () {

              return budgetStatusHistory;
          };
          this.getBudgetHistory = function () {

              return budgetHistory;
          };
          // called 3 places - by budget allocation, contributor, or requirement, additions
          this.updateBudgetStatus = function (requiredAmount, availableAmount, allocatedAmount, entityName) {
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
          };
          this.allocateFunds = function () {
              var availableBudget = parseFloat(budgetStatus.BudgetAvailable) ;
              var allocatedBudget = parseFloat(budgetStatus.BudgetAllocated) ;
              var thisallocation = parseFloat(0.0) ;
              while (availableBudget > 0.0)
              {
                  requirements.forEach(function (requirement) {
                      if (requirement.FundsRequired > 0.0) {
                          if (availableBudget > requirement.FundsRequired) {
                              availableBudget -= requirement.FundsRequired;
                              thisallocation += requirement.FundsRequired;
                              allocatedBudget += requirement.FundsRequired;
                              requirement.FundsAllocated += requirement.FundsRequired;
                              requirement.FundsRequired = 0.0;
                          }
                          else
                          {
                              thisallocation += availableBudget;
                              allocatedBudget += availableBudget;
                              requirement.FundsAllocated += availableBudget;
                              requirement.FundsRequired -= availableBudget;
                              availableBudget = 0;
                          }
                      }
                  });
                  this.updateBudgetStatus(0, 0, thisallocation, 'Allocation');
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
              }
              //if (contributor.contributionType == 'items' || contributor.contributionType == 'both') {
                 
              //}
          };
          this.getContributors = function()
          {
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
                      FundsAllocated: 0.0,
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

              ];
          this.getRequirements = function()
          {
              return requirements;
          }
          this.addRequirement = function(requirement)
          {
              requirement.requirementId = requirements.length + 1;
              var initialRequirementItemID = 1;
              requirement.RequirementItems.forEach(function requirementItem() {
                  requirementItem.RequirementItemID = initialRequirementItemID++;
               });
              this.updateBudgetStatus(parseFloat(requirement.FundsRequired), 0, 0, requirement.Name + '(' + requirement.Type + ')');

              requirements.push(requirement);
          }
      })

}());