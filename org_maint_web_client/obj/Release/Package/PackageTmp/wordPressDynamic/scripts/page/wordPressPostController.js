/* ################# Cell Info controller 
 Cell details read and update 

 

*/
(function () {

    'use strict';
    angular.module('posts_app').
        controller('WordPressPostController',
                   function ($scope,
                                $rootScope,
                                $routeParams,
                                $http,
                                $q,
                                $location,
                                $localStorage
                                 , WordPressPostFactory
                                 , loggedIn
                             ) {
                       $scope.init = function () {
                           $scope.selectedRow = $localStorage.selectedRow = 0;
                           $scope.dateOfRetrieval = new Date().toDateString();
                           $scope.loggedInUsers = loggedIn;
                       //    alert(loggedIn[0])
                           if (!$localStorage.userId) {
                               $location.path('/login');
                           }
                        WordPressPostFactory.getWordPressPosts(  function (postData) {
                        if (postData != null && postData.posts.length > 0) {
                            $scope.wordPressPostList = postData.posts
                            $scope.getCellDetails(0)
                            console.log(postData);
                            WordPressPostFactory.getStockQuote(function (postData2) {
                                if (postData2 != null)
                                    console.log(postData2);
                            });
                        }
                    });


                       }
                       // Initialize section
                       $scope.init();

                       $scope.getCellDetails = function (index) {
                           $scope.selectedRow = $localStorage.selectedRow = index;
                           $scope.selectedCell = $scope.wordPressPostList[index];
                           document.getElementById('selectedContent').innerHTML = '<h4>Selected Content</h4>' + $scope.selectedCell.content ;
                       }
                       $scope.doSort = function (propName) {
                           $scope.sortBy = propName;
                           $scope.reverse = !$scope.reverse;
                       };
                       $rootScope.getSortArrowStyle = function (propName, sortBy) {
                           return sortBy == propName ? { 'color': 'black' } : { 'color': 'silver' };
                       }
                       $scope.getPostAttachments = function (attachments) {
                                  
                     

                       }
                       
                        $scope.getPostAuthor = function (postId) {

                            
                       }
                        
                       $scope.getPostCapabilities = function (postId) {

                            
                       }
                     $scope.getPostCategories = function (postId) {

                            
                       }
                      
                       

                       $scope.getSelectedRowClass = function (index, cellId) {
                           var selectedRowClass = '';

                           if (index == $scope.selectedRow)
                               selectedRowClass = 'selectedRow';
                           else
                               selectedRowClass = '';
                           console.log(selectedRowClass);
                           return selectedRowClass;
                       }

                   });



})();
