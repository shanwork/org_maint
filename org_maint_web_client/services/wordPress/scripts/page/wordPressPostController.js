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
                           $scope.loggedInUsers = loggedIn;
                           alert(loggedIn[0])
                           if (!$localStorage.userId) {
                               $location.path('/login');
                           }
                        WordPressPostFactory.getWordPressPosts(  function (postData) {
                        if (postData != null && postData.posts.length > 0) {
                           $scope.wordPressPostList = postData.posts
                            console.log(postData);
                        }
                    });


                       }
                       // Initialize section
                       $scope.init();

                       $scope.getPostAttachments = function (postId) {
                                  
                     

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
                               selectedRowClass = 'selectedL';
                           else
                               selectedRowClass = '';
                           return selectedRowClass;
                       }

                   });



})();
