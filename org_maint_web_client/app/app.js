(function() {
    
    var org_maint_app = angular.module('org_maint_app', ['ngStorage']);
    
    var IndexPageController = function ($scope, $localStorage) {
        var today = new Date();
     //   $scope.todayShort = new Date('MMM-DD-YYYY'); //$scope.todayShort = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
        $scope.DateFormat = ' Format = MMM / Day / Year ';
        $scope.AmrutvaniTitle = "Sai Amruta Vani";
    }
    IndexPageController.$inject = ['$scope',  '$localStorage'];

    angular.module('org_maint_app')
          .controller('IndexPageController', IndexPageController);
    
}());