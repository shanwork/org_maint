(function () {
    /*
   <td>{{ entity.EntityFinanceSummaryID }}</td>
        <td>{{ entity.EntityName }}</td>
        <td>{{ entity.EntityCategory }}</td>
        <td>{{ entity.BudgetAllocated }} {{ entity.Currency }}</td>
        <td>{{ entity.BudgetUsed }} {{ entity.Currency }}</td>
        <td>{{ entity.BudgetRequired }}</td>
        <td>{{ entity.Priority  }}</td>
        <td>{{  entity.DateUpdatedString |date}}</td>
        <td>{{  entity.Comments |date}}</td>
    */
    angular.module('org_maint_budget')
      .service('EntityFinanceSummaryService', function ($http, $q, connectToService, BudgetStatusService) {
          var entityList = [
          {
              EntityFinanceSummaryID:1,
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
          // in session functions 
          this.getEntitiesSortedPriorityAAmountDList = function () {
              if (connectToService == 'true') {
                  // No operation contract
                  // Maybe this whole logic needs to shift to the controller
                  // down the line, add one more global as utility
              }
              return entityList.sort(compareSortedPriorityAAmountD);
           };
          function compareSortedPriorityAAmountD(ent1, ent2)
          {
              var ret = 0;
              if (parseInt( ent1.Priority) > parseInt(ent2.Priority))
              {
                  ret = 1;
              }
              else if (parseInt( ent1.Priority) < parseInt( ent2.Priority))
                  {
                  ret = -1 
              }
              else
              {
                  if (parseFloat( ent1.BudgetRequired) < parseFloat(ent2.BudgetRequired)) {
                      ret = 1;
                  }
                  else if (parseFloat(ent1.BudgetRequired) > parseFloat(ent2.BudgetRequired) ) {
                      ret = -1
                  }
              }
              return ret;
          }
          this.getEntityStatus = function () {
              if (connectToService == 'true') {
                  return $http.get("http://localhost:58778/Org_maint_service_api.svc/GetEntityStatus");//.success(function (response) { return response.value;});
              }
              else {
                  return this.updateEntityStatus();//entityStatus;
              }
          }
          this.addEntity = function (Entity) {
              if (connectToService == 'true') {
                   alert('hi');
                  var request = $http({
                      method: "post",
                      url: "http://localhost:58778/Org_maint_service_api.svc/AddEntitySummary",
                      data: Entity
                  });
                  return request;
              }
              else {
                
                  Entity.EntityFinanceSummaryID = entityList.length + 1;
                  entityList.push(Entity);
                  this.updateEntityStatus();
                  return (Entity.EntityFinanceSummaryID);
              }
          }
          this.updateEntity = function (Entity) {
              if (connectToService == 'true') {
                  //    alert('hi');
                  var request = $http({
                      method: "post",
                      url: "http://localhost:58778/Org_maint_service_api.svc/AddEntitySummary",
                      data: Entity
                  });
                  return request;
              }
              else {

                  for (i = 0; i < entityList.length; i++) {

                      if (entityList[i].EntityFinanceSummaryID == EntityFinanceSummaryID) {

                          entityList[i].BudgetAllocated = Entity.BudgetAllocated;
                          entityList[i].BudgetRequired = Entity.BudgetRequired;
                          entityList[i].BudgetUsed = Entity.BudgetUsed;
                          entityList[i].Priority = Entity.Priority;
                          entityList[i].EntityCategory = Entity.EntityCategory;
                          entityList[i].EntityName = Entity.EntityName;
                          this.updateEntityStatus();
                          break;
                      }
                  }
              }
          }
          this.updateEntityDetail = function (Entity,EntityList) {
              if (connectToService == 'true') {
                  //    alert('hi');
                  var request = $http({
                      method: "post",
                      url: "http://localhost:58778/Org_maint_service_api.svc/UpdateEntity",
                      data: { Entity, EntityList }
                  });
                  return request;
              }
              else {

                  for (i = 0; i < entityList.length; i++) {

                      if (entityList[i].EntityFinanceSummaryID == EntityFinanceSummaryID) {

                          entityList[i].BudgetAllocated = Entity.BudgetAllocated;
                          entityList[i].BudgetRequired = Entity.BudgetRequired;
                          entityList[i].BudgetUsed = Entity.BudgetUsed;
                          entityList[i].Priority = Entity.Priority;
                          entityList[i].EntityCategory = Entity.EntityCategory;
                          entityList[i].EntityName = Entity.EntityName;
                          this.updateEntityStatus();
                          break;
                      }
                  }
              }
          }
          this.getEntitySummary = function (EntityFinanceSummaryID) {
              //alert(EntityFinanceSummaryID);
              if (connectToService == 'true') {
                  return $http.get("http://localhost:58778/Org_maint_service_api.svc/GetEntitySummary/" + EntityFinanceSummaryID);//.success(function (response) { return response.value;});

              }
              else {
                  
                  var entity = null;
                  for (i = 0; i < entityList.length; i++) {
                      
                      if (entityList[i].EntityFinanceSummaryID == EntityFinanceSummaryID) {
                          
                          entity = entityList[i];
                          break;
                      }
                  }
                      return entity;

                 
              }
              return entity ;
          }
          this.getEntityListLength = function () {
              if (connectToService == 'true') {
                  // No operation contract
              }
               
              return  entityList.length;  
          }
          this.updateEntityStatus = function () {
              if (connectToService == 'true') {
                  // No operation contract
              }
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