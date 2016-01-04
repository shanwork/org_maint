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
                     / / / alert(EntityFinanceSummaryID);
                     if (connectToService == 'true') {
                         return $http.get("http://localhost:58778/Org_maint_service_api.svc/GetEntityItems/" + EntityFinanceSummaryID);//.success(function (response) { return response.value;});

                     }
                 }
                 else {
                     var matches = [];

                     for (var i = 0; i < localEntityItemList.length; i++) {
                         //alert(localEntityItemList[i].EntityFinanceSummaryID);
                         if (localEntityItemList[i].EntityFinanceSummaryID == EntityFinanceSummaryID) {

                             matches.push(localEntityItemList[i]);
                         }
                     }
                     return (matches);
                 }
             };
             this.getEntityItemsSortedPriorityAAmountDList = function () {
                 if (connectToService == 'true') {
                     // No operation contract
                     // Maybe this whole logic needs to shift to the controller
                     // down the line, add one more global as utility
                 }
                 return localEntityItemList.sort(compareSortedPriorityAAmountD);
             };
             function compareSortedPriorityAAmountD(ent1, ent2) {
                 var ret = 0;
                 if (parseInt(ent1.Priority) > parseInt(ent2.Priority)) {
                     ret = 1;
                 }
                 else if (parseInt(ent1.Priority) < parseInt(ent2.Priority)) {
                     ret = -1
                 }
                 else {
                     if (parseFloat(ent1.BudgetRequired) < parseFloat(ent2.BudgetRequired)) {
                         ret = 1;
                     }
                     else if (parseFloat(ent1.BudgetRequired) > parseFloat(ent2.BudgetRequired)) {
                         ret = -1
                     }
                 }
                 return ret;
             }
             this.addEntityItem = function (entityItem, EntityFinanceSummaryID) {
                 //alert(localEntityItemList.length);
                 //alert(entityItem.EntityFinanceSummaryID);
                 if (connectToService == 'true') {
                     //    alert('hi');
                     var request = $http({
                         method: "post",
                         url: "http://localhost:58778/Org_maint_service_api.svc/UpdateEntityItem",
                         data: entityItem
                     });
                     return request;

                 }
                 else
                 {
                     //alert(EntityFinanceSummaryID);
                     entityItem.EntityItemId = localEntityItemList.length + 1;
                     localEntityItemList.push(entityItem);
                 }
                
                
             };
         });
}());