//NectarByWeekController
(function () {

    var NectarByWeekController = function ($scope, $routeParams, $localStorage, $sce, Hub) {
        //publish   
        $scope.root = '.';
        $scope.sortType3 = 'postDate';
        $scope.sortType1 = 'seriesId';
        $scope.sortType2 = 'seq';
        // local $scope.root = '/nectar-words';
        var startOfThisWeek = parseInt(new Date().getDay());
        var deltaToDesiredWeek = startOfThisWeek + (($routeParams.weekIndex - 1) * 7)
        //console.log(startOfDateString);
        $scope.weekIndex = parseInt($routeParams.weekIndex)
        /* later to remove cache
        if ($localStorage.allWeekCount)
            $scope.allWeekCount = $localStorage.allWeekCount.count;

        $scope.weekIndex = parseInt($scope.allWeekCount) - parseInt($routeParams.weekIndex) + 1;
        alert($scope.allWeekCount);
        alert($routeParams.weekIndex);
        alert($scope.allWeekCount);
        alert($scope.weekIndex);
        */
        if ($routeParams.weekIndex == 1)
            $scope.WhichWeek = " the past week.";
        else
            $scope.WhichWeek = ($scope.weekIndex + 1) + " week(s) back";
        $scope.startOfThisWeek = new Date(new Date().getTime() - parseInt(startOfThisWeek * 24 * 60 * 60 * 1000));
        $scope.startOfChosenWeek = new Date(new Date().getTime() - parseInt(deltaToDesiredWeek * 24 * 60 * 60 * 1000));
        $scope.today = new Date();
        $scope.allWeekCount = 0;

        // $scope.weekIndex = $scope.allWeekCount - $scope.weekIndex;

        $scope.thisWeeksSaying = Hub.getThisWeekSaying(parseInt($scope.weekIndex));//$scope.allWeeksSaying[$scope.weekIndex];
        var newStat =
            {
                Page: 'Weekly Post' + $scope.WhichWeek,
                Visited: new Date()
            };
        Hub.updateStatistics(newStat);
        $scope.Weeks = Hub.getWeekIndices();
        $scope.renderAsHtml = function (texts) {
            return $sce.trustAsHtml(texts);
        }
    };



    NectarByWeekController.$inject = ['$scope', '$routeParams', '$localStorage', '$sce', 'Hub'];

    angular.module('nectar_words_app')
      .controller('NectarByWeekController', NectarByWeekController);
    var weeklyRecord = function () {
        return {
            scope: {
                saying: '@'
            },
            template: "saying.replace"
        };
    };
    //  weeklyRecord.$inject = ['$scope', '$routeParams', '$localStorage', '$compile','Hub'];
    angular.module('nectar_words_app')
      .directive('weeklyRecord', weeklyRecord);

}());