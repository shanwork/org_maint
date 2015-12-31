/*
 <th><input type="text" ng-model="entityFilter.EntityItemID" /></th>
        <th><input type="text" ng-model="entityFilter.EntityItemName" /></th>
        <th><input type="text" ng-model="entityFilter.EntityItemDetail"> </th>
        <th> <input type="text" ng-model="entityFilter.EntityItemBudgetRequired">  </th>
        <th> <input type="text" ng-model="entityFilter.EntityItemBudgetAllocated">  </th>
        <th> <input type="text" ng-model="entityFilter.EntityItemPriority">  </th>
        <th> <input type="text" ng-model="entityFilter.EntityItemDateUpdated">  </th>
        <th> <input type="text" ng-model="entityFilter.EntityItemComments">  </th>
*/
(function () {
    angular.module('org_maint_budget')
         .service('EntityItemExpensesService', function ($http, $q, connectToService) {
             var localEntityItemList = [
                 {
                     EntityFinanceSummaryID: 1,
                     EntityItemId:1,
                     EntityItemName:'Tube Well Boring',
                     EntityItemDetail:'Using Water Sensing, fine a suitable spot and dril for the water',
                     EntityItemBudgetRequired:10000,
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
             this.getEntityItemList = function (EntityFinanceSummaryID) {
                 if (connectToService == 'true') {
                     // No operation contract
                     // no table created in dB
                     //  var entityItemList = Webservice;
                 }
                 else {
                     var matches = [];

                     for (var i = 0; i < localEntityItemList.length; i++) {
                         if (localEntityItemList[i].EntityFinanceSummaryID == EntityFinanceSummaryID) {

                             matches.push(localEntityItemList[i]);
                         }
                     }
                     return (matches);
                 }
             };
             this.addEntityItem = function (entityItem) {
                 alert(localEntityItemList.length);
                 entityItem.EntityItemId = localEntityItemList.length + 1;
                 localEntityItemList.push(entityItem);
             };
         });
}());