(function () {
    'use strict';
    angular.module('posts_app').factory("SessionFactory", ['$http', '$q',
          function ($http, $q) {

              var sessionFactory = {};
              sessionFactory.usersLogged = [];
              sessionFactory.addUser = function (userName, callBack) {
                  var newUser = { userId: userName };
                  sessionFactory.usersLogged.push(newUser);
                  callBack(sessionFactory.usersLogged);
              }

              return sessionFactory;

          }]);
})();