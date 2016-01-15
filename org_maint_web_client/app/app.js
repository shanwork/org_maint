(function() {
    
    var app = angular.module('org_maint_app', ['ngRoute','ngStorage']);
    
    var IndexPageController = function ($scope, $localStorage) {
        var today = new Date();
        $localStorage.todayShort = new Date(); //$scope.todayShort = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
        $scope.DateFormat = ' Format = Month / Day / Year ';
    }
    IndexPageController.$inject = ['$scope',  '$localStorage'];

    angular.module('org_maint_app')
          .controller('IndexPageController', IndexPageController);
    
}());