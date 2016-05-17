(function () {
   var mainMenuBar = function () {
        return {
            templateUrl: '/views/MainMenu.html'

        };
    };
   myApp.directive('mainMenuBar', mainMenuBar);
   var mainMenuBarTest = function () {
       return {
           template: '<span style="font-weight:bold">Hi</span>'

       };
   };
   myApp.directive('mainMenuBarTest', mainMenuBarTest);
}());