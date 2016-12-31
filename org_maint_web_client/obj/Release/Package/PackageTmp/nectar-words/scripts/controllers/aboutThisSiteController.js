(function () {
    var AboutThisSiteController = function ($scope, $location, $anchorScroll, connectToService, StatsDemoGraphics) {
        $scope.ganesha = '/myApp/nectar-words/images/Ganesha.JPG';
        var today = new Date();
        $scope.visits = StatsDemoGraphics.getVisits();
        $scope.todayShort = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear() + '*';
        $scope.scrollTo = function(label)
        {
            $location.hash(label);
            $anchorScroll();
        }
       
    };



    AboutThisSiteController.$inject = ['$scope', '$location', '$anchorScroll', 'connectToService','StatsDemoGraphics'];

    angular.module('nectar_words_app')
      .controller('AboutThisSiteController', AboutThisSiteController);

}());