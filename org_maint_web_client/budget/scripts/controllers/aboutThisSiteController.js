(function () {
    var AboutThisSiteController = function ($scope,  connectToService) {
       $scope.date = new Date ;
       
    };



    AboutThisSiteController.$inject = ['$scope',   'connectToService'];

    angular.module('org_maint_budget')
      .controller('AboutThisSiteController', AboutThisSiteController);

}());