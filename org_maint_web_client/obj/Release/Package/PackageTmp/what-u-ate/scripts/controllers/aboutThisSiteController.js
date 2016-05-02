(function () {
    var AboutThisSiteController = function ($scope, $location, $anchorScroll, connectToService) {
        $scope.ganesha = '/myApp/nectar-words/images/Ganesha.JPG';
        var today = new Date();
        $scope.todayShort = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear() + '*';
        $scope.scrollTo = function(label)
        {
            $location.hash(label);
            $anchorScroll();
        }
       
    };



    AboutThisSiteController.$inject = ['$scope', '$location', '$anchorScroll', 'connectToService'];

    angular.module('what_u_ate_app')
      .controller('AboutThisSiteController', AboutThisSiteController);

}());