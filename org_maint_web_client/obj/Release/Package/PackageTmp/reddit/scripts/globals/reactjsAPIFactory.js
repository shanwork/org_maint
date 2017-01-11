(function () {
    'use strict';
    angular.module('reactjsapi_app').factory("ReactjsApiFactory", ['$http', '$q',
          function ($http, $q) {

              var reactjsApiFactory = {};
              reactjsApiFactory.getSubReddits = function ( callBack) {
                  var url = 'https://www.reddit.com/subreddits/search.json?q=reactjs';
                  $http.get(url).
                    success(
                      function (data) {
                          console.log(data);
                          callBack(data);
                      }
                  ).
                  error(
                     function () {
                         callBack(null);
                     }
                  )
              }
             
              return reactjsApiFactory;

          } ]);
})();