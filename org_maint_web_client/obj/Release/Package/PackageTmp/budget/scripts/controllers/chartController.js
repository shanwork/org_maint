(function () {
    var ChartController = function ($scope, configuration, connectToService, $localStorage) {
        $scope.chart = null;
        $scope.config = {};
        $scope.config.data1 = "30, 200, 100, 200, 150, 250";
        $scope.config.data2 = "70, 30, 10, 240, 150, 125";

        $scope.typeOptions = ["line", "bar", "spline", "step", "area", "area-step", "area-spline"];

        $scope.config.type1 = $scope.typeOptions[0];
        $scope.config.type2 = $scope.typeOptions[1];
        $scope.showGraph = function () {
            var config = {};
            config.bindto = '#chart';
            config.data = {};
            config.data.json = {};
            config.data.json.contributors = []; 
            config.data.json.entities = []; 
            if ($localStorage.contributorList.length >0)

                for (i = 0; i < $localStorage.contributorList.length; i++) {
                    config.data.json.contributors.push(parseFloat($localStorage.contributorList[i].ConvertedAmount ) );
                }
           
            for (i = 0; i < $localStorage.entityList.length; i++) {
                if ($localStorage.debugMode == true) {

                    alert($localStorage.entityList[i].BudgetAllocated);
                }
                var totalBudget = parseFloat($localStorage.entityList[i].BudgetAllocated)
                    + parseFloat($localStorage.entityList[i].BudgetUsed) + parseFloat($localStorage.entityList[i].BudgetRequired);
                config.data.json.entities.push(totalBudget);
            }
            config.axis = { "y": { "label": { "text": "Amount in INR", "position": "outer-middle" } } };
            config.data.types = { "Contributors": $scope.config.contributors, "Entities": $scope.config.entities };
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