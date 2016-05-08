(function () {

    var StatsController = function ($scope, $routeParams, $localStorage, $sce, Hub) {
        $scope.latest = Hub.getLatestStatistics();
        $scope.nectarVisitedStats = Hub.getAllStatistics();
    }
    StatsController.$inject = ['$scope', '$routeParams', '$localStorage', '$sce', 'Hub'];

    angular.module('nectar_words_app')
      .controller('StatsController', StatsController);
    

}());