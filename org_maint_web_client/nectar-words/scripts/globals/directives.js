(function () {
    var weeklyRecords = function () {
        return {
           
            template: "Posted {{thisDaySaying.posted}} <br />"
        };
    };
    //  weeklyRecord.$inject = ['$scope', '$routeParams', '$localStorage', '$compile','Hub'];
    angular.module('nectar_words_app')
      .directive('weeklyRecords', weeklyRecords);
    var sideMenuBar = function () {
        return {
            templateUrl: 'views/templateSideMenu.html'

        };
    };
    angular.module('nectar_words_app').directive('sideMenuBar', sideMenuBar);
}());