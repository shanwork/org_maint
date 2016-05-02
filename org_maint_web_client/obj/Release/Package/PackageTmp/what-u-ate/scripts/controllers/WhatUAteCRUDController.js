//WhatUAteCRUDController
(function () {

    var WhatUAteCRUDController = function ($scope, $routeParams, $localStorage, Hub) {
        //publish   
        $scope.sortBy = 'postDate';
        $scope.reverse = false;
         $scope.doSort = function (propName) {
             $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
         };
         $scope.archive = [];
          $scope.archive = Hub.getArchives();
      //   $scope.Weeks = Hub.getWeekIndices();

    };



    WhatUAteCRUDController.$inject = ['$scope', '$routeParams', '$localStorage', 'Hub'];

    angular.module('what_u_ate_app')
      .controller('WhatUAteCRUDController', WhatUAteCRUDController);

}());