(function () {
    var GitAPIController = function ($scope, $location, $anchorScroll, Hub) {
        $scope.test = '1';
     //   $scope.gitHubUser = 'shanwork'
        $scope.gitUserInfo = [];
        $scope.gitUserRepoInfo = [];
        $scope.getHubInfo = function () {
            
            var promiseGetGitUser = Hub.getGitUser($scope.gitHubUser);
            promiseGetGitUser.then(function (gitUserDb) {
                var returnGitUser = gitUserDb.data;
                for (key in returnGitUser )
                {
                    if (returnGitUser.hasOwnProperty(key)) {
                        var gitUserProperty = { 'key': key, 'value': returnGitUser[key] };
                        $scope.gitUserInfo.push(gitUserProperty);
                    }
                }
            },
             function (errorPl) {
                 //   $log.error('Some Error in Getting Records.', errorPl);
             });
        
            var promiseGetGitUserRepo = Hub.getGitUserRepo($scope.gitHubUser);
            promiseGetGitUserRepo.then(function (gitUserRepoDb) {
                var returnGitUserRepo = gitUserRepoDb.data;
                for (key in returnGitUserRepo) {
                    if (returnGitUserRepo.hasOwnProperty(key)) {
                        var gitUserRepoProperty = { 'key': key, 'value': returnGitUserRepo[key] };
                        $scope.gitUserRepoInfo.push(gitUserRepoProperty);
                    }
                }
            },
             function (errorPl) {
                 //   $log.error('Some Error in Getting Records.', errorPl);
             });
        }
    };



    GitAPIController.$inject = ['$scope', '$location', '$anchorScroll','Hub'];

    angular.module('assignments_app')
      .controller('GitAPIController', GitAPIController);

}());