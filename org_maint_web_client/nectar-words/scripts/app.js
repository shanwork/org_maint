(function() {
    
   
    var nectar_words_app = angular.module('nectar_words_app', ['ngRoute', 'ngSanitize', 'ngStorage']);
    nectar_words_app.value('connectToService', 'false');
    nectar_words_app.value('configuration', { imMemoryData: 'yes', verbose: 'yes' });
    nectar_words_app.config(function ($routeProvider) {
        var dateD= new Date()
        $routeProvider
          .when('/Week/:weekIndexx/' + dateD, {
              controller: 'WeeklyNectarController',
              
              templateUrl: 'views/WeeklyNectar.html'
          }).when('/PastWeek/:weekIndex', {
              controller: 'NectarByWeekController',

              templateUrl: 'views/NectarByWeek.html'
          }).when('/Archive', {
              controller: 'NectarArchiveController',

              templateUrl: 'views/NectarArchive.html'
          }).when('/Poems', {
            templateUrl: 'views/myPoem.html'
        }).when('/Narrations', {
              controller: 'NectarNarrationController',

              templateUrl: 'views/NectarNarrations.html'
          }).when('/NectarStatistcs', {
              controller: 'NectarStatistcsController',

              templateUrl: 'views/NectarStatistcs.html'
          })
             .when('/about', {
                 controller: 'AboutThisSiteController',
                 templateUrl: 'views/aboutThisSite.html'
             })
            .otherwise({ redirectTo: '/PastWeek/1' });
    },function ($httpProvider) {
        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};
    });
    nectar_words_app.directive('clickLink', ['$location', function ($location) {
        return {
            link: function (scope, element, attrs) {
                element.on('click', function () {
                    scope.$apply(function () {
                        $location.path(attrs.clickLink);
                    });
                });
            }
        }
    }]);
    nectar_words_app.directive('clickLinkConfirm', ['$location', function ($location) {
        return {
            link: function (scope, element, attrs) {
                element.on('click', function () {
                    scope.$apply(function () {
                        if (confirm("are you sure you want to return?"))
                            $location.path(attrs.clickLinkConfirm);
                    });
                });
            }
        }
    }]);
    //budgetApp.config(function ($routeProvider) {
    //    $routeProvider
    //        .when('/contributors', {
    //            controller: 'ContributorController',
    //            templateUrl: 'views/contributorList.html'
    //        })
    //        .when('/budgetStatus', {
    //            controller: 'BudgetStatusController',
    //            templateUrl: 'views/budgetStatus.html'
    //        })
    //        .when('/home', {
    //            templateUrl: '../../index.html'
    //        })
    //        .otherwise({ redirectTo: '/budgetStatus' });
    //});
}());