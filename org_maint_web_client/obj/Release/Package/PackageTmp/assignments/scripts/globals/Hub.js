(function () {
    var root = '/myApp/nectar-words';
    angular.module('assignments_app')
      .service('Hub', function ($http, $q) {
          //  var budgetStatus = {};
          this.getGitUser  = function (userName) {
             
              return $http.get("https://api.github.com/users/" + userName);
          };
          //  var budgetStatus = {};
          this.getGitUserRepo = function (userName) {
              return $http.get("https://api.github.com/users/" + userName + "/repos");
          };
      })
}());