(function () {
    var template_app = angular.module('template_app', ['ngRoute', 'ngSanitize', 'ngStorage']);
    template_app.config(function ($routeProvider) {
        $routeProvider
        .when('route like /View1 e.g. /Week/:weekIndex', {
            controller: '<controller name>',

            templateUrl: 'location of view markup e.g. views/WeeklyNectar.html'
        }) .otherwise({ redirectTo: ' default location /Week/1' });
    },function ($httpProvider) { // not sure what this is for.. !!
        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};
    });
    nectar_words_app.directive('clickLink', ['$location', function ($location) { // figure out this
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
    }]);;
});