/* ################# Cell Info controller 
 Cell details read and update 

 

*/
(function () {

    'use strict';
    angular.module('posts_app').
        controller('SessionController',
                   function ($scope,
                                $rootScope,
                                $routeParams,
                                $http,
                                $q,
                                $location,
                                $localStorage
                                 , SessionFactory
                                 , loggedIn
                             ) {
                       $scope.login = function (userName, userPassword) {
                           $localStorage.userId = userName;
                           SessionFactory.addUser(userName, function (daata) {
                               loggedIn.push(userName);
                               $scope.loggedInUsers = loggedIn;
                               $location.path('/wordPressPosts');
                           });
                          
                       }
                       $scope.logout = function () {
                           $localStorage.userId = null;
                           $location.path('/login');
                       }
                       $scope.init = function () {
                           if (!$localStorage.userId) {
                               $location.path('/login');
                           }
                           $scope.loggedInUsers = loggedIn;


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
