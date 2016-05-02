//NectarArchiveController
(function () {

    var NectarNarrationController = function ($scope, $routeParams, $localStorage, Hub) {
        //publish   
        $scope.sortBy = 'postDate';
        $scope.reverse = false;
        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
        $scope.narrations = [];
        $scope.narrations = Hub.getNarrations();
        $scope.whichSeries = '';
        $scope.seriesIds =
        [
                { label: 'All', value: '' },
                { label: $scope.narrations[0].seriesId, value: $scope.narrations[0].seriesId }
        ];
        $scope.currentSeriesId = $scope.narrations[0].seriesId;

        for (var i = 0; i < $scope.narrations.length; i++) {
            if ($scope.narrations[i].seriesId != $scope.currentSeriesId) {
                var newSeries = {
                    label: $scope.narrations[i].seriesId,
                    value: $scope.narrations[i].seriesId
                }
                $scope.seriesIds.push(newSeries);
                $scope.currentSeriesId = $scope.narrations[i].seriesId;

            }
        }
        //   $scope.Weeks = Hub.getWeekIndices();
        var newStat =
             {
                 Page: 'Narratives Page',
                 Visited: new Date()
             };
        Hub.updateStatistics(newStat);
        $scope.currentClass = 'narrationtextcontent';
        $scope.whichSeries = '';
        $scope.changed = function(whichSeries)
        {
            if ($scope.whichSeries == '') {
                $scope.whichSeries = whichSeries;
                return false;

            }
            else if ($scope.whichSeries != whichSeries) {
                //   console.log(whichSeries);
                if ($scope.currentClass == 'narrationtextcontent')
                    $scope.currentClass = 'narrationtextcontentAlt'
                else
                    $scope.currentClass = 'narrationtextcontent';
                $scope.whichSeries = whichSeries;
                return true;
            }
            else
                return false;
      //      return $scope.currentClass;
        }
        $scope.getCurrentClass = function (whichSeries) {
            if ($scope.whichSeries == '' ) {
                $scope.currentClass = 'narrationtextcontent';
                $scope.whichSeries = whichSeries;
            }
            else if ($scope.whichSeries != whichSeries)
            {
             //   console.log(whichSeries);
                if ($scope.currentClass == 'narrationtextcontent')
                    $scope.currentClass = 'narrationtextcontentAlt'
                else
                    $scope.currentClass = 'narrationtextcontent';
                $scope.whichSeries = whichSeries;
            }
            return $scope.currentClass;
        }
    };

   

    NectarNarrationController.$inject = ['$scope', '$routeParams', '$localStorage', 'Hub'];

    angular.module('nectar_words_app')
      .controller('NectarNarrationController', NectarNarrationController);

}());