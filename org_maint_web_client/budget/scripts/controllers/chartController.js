(function () {
    var ChartController = function ($scope, configuration, connectToService, $localStorage) {
        $scope.chart = null;
        $scope.config = {};
        $scope.config.data1 = "30, 200, 100, 200, 150, 250";
        $scope.config.data2 = "70, 30, 10, 240, 150, 125";
        $scope.config.data3 = "70, 30, 10, 240, 150, 125";
        $scope.config.data4 = "70, 30, 10, 240, 150, 125";

        $scope.typeOptions = ["line", "bar", "spline", "step", "area", "area-step", "area-spline"];

        $scope.config.type1 = $scope.typeOptions[0];
        $scope.config.type2 = $scope.typeOptions[1];
        $scope.showGraph = function () {
           
            var config = {};
            config.bindto = '#chart';
            config.data = {};
            config.type1 = $scope.typeOptions[3];
            config.data.json = {};
            config.data.json.contributors = []; 
            config.data.json.entities = []; 
            config.data.json.budgetAvailable = [];
            config.data.json.budgetAllocated = [];
            config.data.json.budgetRequired = [];
            config.data.json.budgetUpdated = [];
            config.data.json.contributorsAdded = [];
            config.data.json.entitiesAdded = [];

            var dates = [];
            if ($localStorage.contributorList.length > 0)
               for (i = 0; i < $localStorage.contributorList.length; i++) {
                    config.data.json.contributors.push(parseFloat($localStorage.contributorList[i].ConvertedAmount));
                    dates.push($localStorage.contributorList[i].DateReceived)
                    dates.push($localStorage.contributorList[i].DateReceived)
                }
           
            for (j = 0; j < $localStorage.entityList.length; j++) {
                if ($localStorage.debugMode == true) {

                    alert($localStorage.entityList[j].BudgetAllocated);
                }
                var totalBudget = parseFloat($localStorage.entityList[j].BudgetAllocated)
                    + parseFloat($localStorage.entityList[j].BudgetUsed) + parseFloat($localStorage.entityList[j].BudgetRequired);
                config.data.json.entities.push(totalBudget);
            }
            
            if ($localStorage.budgetStatusHistory != null && $localStorage.budgetStatusHistory.length > 0)
            //    alert($localStorage.budgetStatusHistory.length);
                for (k = 0; k < $localStorage.budgetStatusHistory.length; k++) {
                    config.data.json.budgetAvailable.push(parseFloat($localStorage.budgetStatusHistory[k].BudgetAvailable));
                    config.data.json.budgetRequired.push(parseFloat($localStorage.budgetStatusHistory[k].BudgetRequired));
                    config.data.json.budgetAllocated.push(parseFloat($localStorage.budgetStatusHistory[k].BudgetAllocated));
                }

            config.axis = { "y": { "label": { "text": "Amount in INR", "position": "outer-middle" } } };
            config.data.types = { "Contributors": $scope.config.contributors, "Entities": $scope.config.entities, "Available Budget": $scope.config.budgetAvailable, "Required Budget": $scope.config.budgetRequired, "Allocated Budget": $scope.config.budgetAllocated };
            config.xs = { 'Contri': 'x1' };
            config.data.columns = [['x1'].concat(dates)];
            $scope.chart = c3.generate(config);
        }
        $scope.showGraphHardCode = function () {
            $scope.chart = c3.generate({
                bindto: '#chart',
                data: {
                    columns: [
                      ['data1', 30, 200, 100, 400, 150, 250],
                      ['data2', 50, 20, 10, 40, 15, 25]
                    ]
                }
            });
        }
    };
    ChartController.$inject = ['$scope', 'configuration', 'connectToService', '$localStorage'];
    angular.module('org_maint_budget')
     .controller('ChartController', ChartController);

}());