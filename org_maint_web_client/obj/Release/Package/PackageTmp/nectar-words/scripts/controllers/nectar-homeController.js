(function () {
    
    var NectarHomeController = function ($scope, $routeParams, $localStorage, connectToService) {
    };
    NectarHomeController.$inject = ['$scope', '$routeParams', '$localStorage', 'connectToService'];

    angular.module('nectar_words_app')
      .controller('NectarHomeController', NectarHomeController);

}());