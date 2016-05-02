(function () {
    var PrincipalsController = function ($scope, $location, $anchorScroll) {
        $scope.test = '1';
    };



    PrincipalsController.$inject = ['$scope', '$location', '$anchorScroll'];

    angular.module('hmvc_app')
      .controller('PrincipalsController', PrincipalsController);

}());