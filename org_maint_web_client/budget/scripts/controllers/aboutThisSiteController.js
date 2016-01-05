(function () {
    var AboutThisSiteController = function ($scope, $location,$anchorScroll, connectToService) {
        $scope.date = new Date;
        $scope.scrollTo = function(label)
        {
            $location.hash(label);
            $anchorScroll();
        }
       
    };



    AboutThisSiteController.$inject = ['$scope', '$location', '$anchorScroll', 'connectToService'];

    angular.module('org_maint_budget')
      .controller('AboutThisSiteController', AboutThisSiteController);

}());