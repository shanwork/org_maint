//NectarArchiveController
(function () {

    var NectarArchiveController = function ($scope, $routeParams, $localStorage, Hub) {
        //publish   
        $scope.sortBy = 'postDate';
        $scope.reverse = false;
         $scope.doSort = function (propName) {
             $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
         };
         $scope.archive = [];
         $scope.archive = Hub.getArchives();
         var newStat =
             {
                 Page: 'Archive Page',
                 Visited: new Date()
             };
         Hub.updateStatistics(newStat);
      //   $scope.Weeks = Hub.getWeekIndices();

    };



    NectarArchiveController.$inject = ['$scope', '$routeParams', '$localStorage', 'Hub'];

    angular.module('nectar_words_app')
      .controller('NectarArchiveController', NectarArchiveController);

}());