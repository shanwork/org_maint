(function () {
    var WeeklyNectarController = function ($scope, $routeParams, EntityItemExpensesService, EntityFinanceSummaryService, connectToService) {
        var startOfThisWeek = parseInt(new Date().getDay());
        var deltaToDesiredWeek = startOfThisWeek + (($routeParams.weekIndex - 1) * 7)
        //console.log(startOfDateString);
        $scope.startOfThisWeek = new Date(new Date().getTime() - parseInt(startOfThisWeek * 24 * 60 * 60 * 1000));
        $scope.startOfChosenWeek = new Date(new Date().getTime() - parseInt(deltaToDesiredWeek * 24 * 60 * 60 * 1000));

    };



    WeeklyNectarController.$inject = ['$scope', '$routeParams', 'EntityItemExpensesService', 'EntityFinanceSummaryService', 'connectToService'];

    angular.module('nectar_words_app')
      .controller('WeeklyNectarController', WeeklyNectarController);

}());