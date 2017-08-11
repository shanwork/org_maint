(function () {

    var NectarStatistcsController = function ($scope, $routeParams, $localStorage, $sce, Hub) {
        $scope.latest = Hub.getLatestStatistics();
        $scope.nectarVisitedStats = Hub.getAllStatistics();
        $scope.authorsWorksCounts = [
             {
                 author: 'Shirdi Sai Baba',
                 work: '-',
                 count: '1'
             },{
                author: 'Sri Sathya Sai Baba',
                work: 'Gems of Wisdom',
                count: '8'
            },
             {
                 author: 'Sri Sathya Sai Baba',
                 work: 'The Inward Path',
                 count: '20'
             },
             {
                 author: 'Sri Sathya Sai Baba',
                 work: 'Others',
                 count: '72'
             },
             {
                 author: 'Mahatma Gandhi',
                 work: 'Various',
                 count: '15'
             },
             {
                 author: 'Ramana Maharshi',
                 work: 'Various',
                 count: '9'
             }
        ]
        $scope.authorLists = Hub.getAuthorLists();
    }
    NectarStatistcsController.$inject = ['$scope', '$routeParams', '$localStorage', '$sce', 'Hub'];

    angular.module('nectar_words_app')
      .controller('NectarStatistcsController', NectarStatistcsController);
    

}());