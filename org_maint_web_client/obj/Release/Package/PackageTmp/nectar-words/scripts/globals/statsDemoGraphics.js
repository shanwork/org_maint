(function () {
    var root = '/myApp/nectar-words';
    angular.module('nectar_words_app')
      .service('StatsDemoGraphics', function ($http, $q,$localStorage){
       //   this.visited = 0;
          this.getVisits = function()
          {
              if (!this.visited)
                  this.visited = 0;
              var visits = 0;
              function add() {
                  this.visited++;
              }
              add();
              return  visits;
          }
      });

}());