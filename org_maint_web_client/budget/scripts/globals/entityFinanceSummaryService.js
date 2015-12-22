(function () {
    /*
     <th><input type="text" ng-model="entityFilter.EntityBudgetPriorityID" /></th>
        <th><input type="text" ng-model="entityFilter.EntityName" /></th>
        <th><input type="text" ng-model="entityFilter.BudgetAllocated"> </th>
        <th> <input type="text" ng-model="entityFilter.BudgetRequired">  </th>
        <th> <input type="text" ng-model="entityFilter.Priority">  </th>
        <th> <input type="text" ng-model="entityFilter.DateUpdatedString">  </th>
        <th> <input type="text" ng-model="entityFilter.Comments">  </th>
    */
    angular.module('org_maint_budget')
      .service('EntityFinanceSummaryService', function ($http, $q, connectToService, BudgetStatusService) {
          var entityList = [];
          var entityStatus = {
              TotalEntities: 0,
              TotalEntitiesAllocable: 0,
              TotalEntitiesAllocated: 0,
              TotalEntitiesUnallocated: 0
          };
          this.getEntitiesList = function () {
              if (connectToService == 'true')
                  return $http.get("http://localhost:58778/Org_maint_service_api.svc/GetEntitySummaryList");
              else {
                  return entityList;
              }
          };
          this.getEntityStatus = function () {
              if (connectToService == 'true') {
                  return $http.get("http://localhost:58778/Org_maint_service_api.svc/GetEntityStatus");//.success(function (response) { return response.value;});
              }
              else {
                  //    this.updateEntityStatus();
                  return this.updateEntityStatus();//entityStatus;
              }
          }
          this.addEntity = function (Entity) {
              if (connectToService == 'true') {
                  var request = $http({
                      method: "post",
                      url: "http://localhost:58778/Org_maint_service_api.svc/AddEntitySummary",
                      data: Entity
                  });
                  return request;
              }
              else {
                  //if (Entity.BudgetAllocated > 0)
                  //    entityStatus.TotalEntitiesAllocated += 1;
                  //else
                  //{
                  //    var budgetAvailable = BudgetStatusService.getBudgetStatus().BudgetAvailable;
                  //    for (i = 0; i < entityList.length; i++)
                  //    {
                  //        budgetAvailable -= entityList[i].BudgetRequired;
                  //    }
                  //    if (budgetAvailable > 0)
                  //        entityStatus.TotalEntitiesAllocable += 1;
                  //    else
                  //        entityStatus.TotalEntitiesUnallocated += 1;

                  //}
                  Entity.EntityBudgetPriorityID = entityList.length + 1;
                  entityList.push(Entity);
                  this.updateEntityStatus();
              }
          }
          this.updateEntityStatus = function () {
              //              var t = [
              //{
              //    amount: 10,
              //    priority: 14
              //}
              //,
              //{
              //    amount: 12,
              //    priority: 12
              //}
              //,
              //{
              //    amount: 12,
              //    priority: 10
              //}

              //              ];
              //              t.sort(function (a, b) { return a.priority - b.priority });
              entityStatus.TotalEntities = 0;
              entityStatus.TotalEntitiesAllocable = 0;
              entityStatus.TotalEntitiesAllocated = 0;
              entityStatus.TotalEntitiesUnallocated = 0;
              var budgetStatus = BudgetStatusService.getBudgetStatus();
              var budgetAvailable = budgetStatus.BudgetAvailable;
              var totalBudgetRequired = 0;
              for (i = 0; i < entityList.length; i++) {
                  entityStatus.TotalEntities += 1;
                  if (entityList[i].BudgetAllocated > 0)
                      entityStatus.TotalEntitiesAllocated += 1;
                  else if (budgetAvailable > 0)
                      entityStatus.TotalEntitiesAllocable += 1;
                  budgetAvailable -= entityList[i].BudgetRequired;


              }
              if (budgetAvailable < 0) {
                  budgetStatus.BudgetRequired = -1 * budgetAvailable;
                  BudgetStatusService.updateBudgetStatus(budgetStatus);
              }
              // alert(entityStatus.TotalEntities); alert(entityStatus.TotalEntitiesAllocated); alert(entityStatus.TotalEntitiesAllocable);
              if (entityStatus.TotalEntities > (entityStatus.TotalEntitiesAllocated + entityStatus.TotalEntitiesAllocable))
                  entityStatus.TotalEntitiesUnallocated = entityStatus.TotalEntities - (entityStatus.TotalEntitiesAllocated + entityStatus.TotalEntitiesAllocable);
              return entityStatus;
          }
      });


}());