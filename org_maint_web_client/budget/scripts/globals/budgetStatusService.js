(function () {
    angular.module('org_maint_app')
      .service('BudgetStatusService', function () {
          var budgetHistoryList =  
               [
              {
                  amount: 5000,
                  debitOrCredit: 'Debit',
                  date: '2015-11-21',
                  comments: 'Units 11 - 15 (Service)'
              },
              {
                  amount: 150000,
                  debitOrCredit: 'Credit',
                  date: '2015-11-12',
                  comments: 'From funding meeting on 11/05'
              },
              {
                  amount: 10000,
                  debitOrCredit: 'Debit',
                  date: '2015-11-01',
                  comments: 'units 1-4'
              },
              {
                  amount: 10000,
                  debitOrCredit: 'Credit',
                  date: '2015-11-01',
                  comments: 'Initial budget allocation'
              }
               ];
          this.getBudgetHistoryList = function () {
              return budgetHistoryList;
          };
          this.getHi = function()
          {
              return 'HIII';
          }
        });
     
}());