(function () {
    angular.module('org_maint_budget')
         .service('EntityItemExpensesService', function ($http, $q, connectToService) {
             var entityItemList = [];
             this.getEntityItemList = function () {
                 if (connectToService == 'true') {
                     // No operation contract
                     // no table created in dB
                 }
                 else
                 {
                     return this.entityItemList;
                 }
             }
         });
}());