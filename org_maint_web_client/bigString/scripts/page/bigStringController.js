/* ################################
     BIG STRING
   =============
Features
1. Implemented in an angular controller-view model, the $scope.bigString is two way bound to the input box in the html
2. As text is added in the text box, the 'fullString' element is appended by the additional text
3. Along with the append, the 'alphabets' and 'numbers' elements are also updated depending on the type of text added
4. For 3. above, using regular expression

PENDING/DIGRESSION
a. I probably did not understand the assignment, but this is how I would implement big string
b. Git hub has problems on my laptop, so I am sending this as a zip file
c. Addressing a. and b. above, I did not allocate enough time, to find out how to workaround my laptop issue, and MORE importantly solve what was actually equired
d. Addressing point a. this implementation is incomplete
    i. I havent implemented the regex filter for symbols - it would be probably something like /^([0-9][a-zA-Z])* /g 
    ii. Configure this as a library API. Maybe I could start with base javascript or a layer above angular
*/
(function () {

    'use strict';
    angular.module('posts_app').
        controller('BigStringController',
                   function ($scope,
                                $rootScope,
                                $routeParams,
                                $http,
                                $q,
                                $location,
                                $localStorage
                                 , NewFlowFactory 
                             ) {
                     
                       $scope.init = function () {
                           if ($localStorage.bigString) {
                               $scope.bigString = $localStorage.bigString;
                           }
                           else 
                           {
                               $scope.bigString = {
                                   fullString: 'Test',
                                   alphabets: '',
                                   symbols: '',
                                   numbers: ''
                               };
                               $localStorage.bigString = $scope.bigString;
                           }


                       }
                       // Initialize section
                       $scope.init();
                       $scope.parseString = function () {
                           
                           $scope.bigString.alphabets = $scope.concat($scope.bigString.fullString.match(/[a-zA-Z]+/g));
                           $scope.bigString.numbers = $scope.concat($scope.bigString.fullString.match(/[0-9.]+/g));
                           console.log($scope.bigString.numbers);
                       }
                       $scope.concat = function (inputArray) {
                           var ret = '';
                           for (var i = 0 ; i < inputArray.length; i++)
                               ret += inputArray[i];
                           return ret;
                       }

                   });



})();
