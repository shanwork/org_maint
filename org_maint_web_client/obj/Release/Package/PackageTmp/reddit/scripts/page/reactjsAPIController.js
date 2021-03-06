/* ################# ReactjsApiController Controller class
retrieves word press posts, controls selection of a post row master-detail sync 
*/
(function () {

    'use strict';
    angular.module('reactjsapi_app').
        controller('ReactjsApiController',
                   function ($scope,
                                $rootScope,
                                $routeParams,
                                $http,
                                $q,
                                $location,
                                $localStorage
                                 , ReactjsApiFactory
                                 , loggedIn
                             ) {
                       $scope.init = function () {
                           $scope.selectedRow = $localStorage.selectedRow = 0;
                           $scope.dateOfRetrieval = new Date().toDateString();
                           // init retrieves data from the REST API through the factory class, defaults selected cell to zero index
                           ReactjsApiFactory.getSubReddits(function (getData) {
                               if (getData != null && getData.data.children.length > 0) {
                                   $scope.subRedditList = getData.data.children
                                    $scope.getCellDetails(0)
                                    console.log(getData);
                                }
                           });
                       }
                       // Initialize section
                       $scope.init();
                       $scope.getDate = function(secs){
                           return new Date(secs);
                       }
                       // ## cell selections
                       // 1. populates the right side with the details of the selected cell
                       $scope.getCellDetails = function (index) {
                           $scope.selectedRow = $localStorage.selectedRow = index;
                           $scope.selectedCell = $scope.subRedditList[index];
                           document.getElementById('selectedContent').innerHTML = '<h4>Selected Content</h4>' + $scope.selectedCell.content ;
                       }
                       //2 sets the highlight for the selected row
                       $scope.getSelectedRowClass = function (index, cellId) {
                           var selectedRowClass = '';

                           if (index == $scope.selectedRow)
                               selectedRowClass = 'selectedRow';
                           else
                               selectedRowClass = '';
                           console.log(selectedRowClass);
                           return selectedRowClass;
                       }

                       // ## sorting functions..
                       //1. actual setting of sort field and order of the result set
                       $scope.doSort = function (propName) {
                           $scope.sortBy = propName;
                           $scope.reverse = !$scope.reverse;
                       };
                       // 2. setting the glyphicon and color based on the above
                       $rootScope.getSortArrowStyle = function (propName, sortBy) {
                           return sortBy == propName ? { 'color': 'black' } : { 'color': 'silver' };
                       }

                   });


})();//IIFE
