﻿(function () {
    var root = '/myApp/nectar-words';
    angular.module('nectar_words_app')
      .service('Hub', function ($http, $q,$localStorage,
            Q1_2016,
            Q2_2016,
            Q3_2016,
            Q1_Q2_2017) {
          //  var budgetStatus = {};
          var allWeekCount = 0;
          var allWeeksSaying = [];
          // allWeeksSaying = Q1_2016.returnAllWeeksSaying();
          this.insertQuarterData = function (quarterDump) {
              if (!$localStorage.allWeekCount) {
                  $localStorage.allWeekCount =
                      {
                          complete: false,
                          count: 0

                      };
                   
              }
              for (var quarterElement = (quarterDump.length - 1) ; quarterElement >= 0  ; quarterElement--) {
                  allWeeksSaying.splice(0, 0, quarterDump[quarterElement]);
                   $localStorage.allWeekCount.count = 24;
                  
                  
              }
          }

          this.getAllData = function () {
              Q1_2016AllWeeksSaying = Q1_2016.returnAllWeeksSaying();
              this.insertQuarterData(Q1_2016AllWeeksSaying);

              Q2_2016AllWeeksSaying = Q2_2016.returnAllWeeksSaying();
              this.insertQuarterData(Q2_2016AllWeeksSaying);


              Q3_2016AllWeeksSaying = Q3_2016.returnAllWeeksSaying();
              this.insertQuarterData(Q3_2016AllWeeksSaying);

              Q1_Q2_2017AllWeeksSaying = Q1_Q2_2017.returnAllWeeksSaying();
              this.insertQuarterData(Q1_Q2_2017AllWeeksSaying);
              if ($localStorage.allWeekCount)
                  $localStorage.allWeekCount.complete = true;
          }
          this.getAllData();
          this.getAuthorLists = function(sort ){
              if (allWeeksSaying.length == 0)
                  this.getAllData();
              var authorLists = {
                  allAuthorRecs: [],
                  distinctAuthorWorks: []
              };
              var allSayings = this.getArchives();
              allSayings.forEach(function (saying) {
                  authorLists.allAuthorRecs.push(saying.author);
              });

              authorLists.allAuthorRecs.sort(function (a, b) {
                  return a > b ;
              });
              return authorLists;
          }
          var weekCount = [];
          var nectarVisitedStats = [];
          var latestStats = {};
          for (var i = 1; i <= allWeeksSaying.length; i++)
          { weekCount.push(i); }
          console.log(weekCount.length)
          var archive = [];
          for (var weekInd = 0; weekInd < allWeeksSaying.length; weekInd++) {
              for (var dayInd = 0 ; dayInd < allWeeksSaying[weekInd].length; dayInd++) {

                  var archiveElement =
                               {
                                   posted: allWeeksSaying[weekInd][dayInd].posted,
                                   postDate: allWeeksSaying[weekInd][dayInd].postDate,
                                   title: allWeeksSaying[weekInd][dayInd].title,
                                   seriesId: allWeeksSaying[weekInd][dayInd].seriesId,
                                   seq: allWeeksSaying[weekInd][dayInd].seq,
                                   content: allWeeksSaying[weekInd][dayInd].content,
                                   author: allWeeksSaying[weekInd][dayInd].author

                               };
                  archive.push(archiveElement);
              }
          }
         // alert()
          var narrations = [];
          narrations = archive.filter(function (obj) {
              return obj.seriesId != '-1';
          });

          this.getThisWeekSaying = function (whichWeek) {
              //     allWeeksSaying.splice(0, 0, Week3March2016.marchApril2016());
              return allWeeksSaying[whichWeek];
          };
          
          this.getWeekIndices = function () {
              return weekCount;
          };
          this.filterDisclaimer = function (obj) {
              return obj.seriesId != '-10';
          }
          this.updateStatistics = function(newStat)
          {
              if (this.nectarVisitedStats == undefined)
                  this.nectarVisitedStats = [];
              this.nectarVisitedStats.push(newStat);
              this.latestStats = newStat;
          }
          this.getLatestStatistics = function () {
           
            return this.latestStats;
          }
          this.getAllStatistics = function () {
              return this.nectarVisitedStats;
          }
          this.getArchives = function () {

              return archive.filter(this.filterDisclaimer);
          };

          this.getNarrations = function () {
              var blockNarrations = [];
              var content = '';
              var currentSeriesId = narrations[0].seriesId;
              var currentDate = narrations[0].posted;
              var currentPostDate = narrations[0].postDate;
              var currentNarrationTitle = narrations[0].seriesId;
              var currentAuthor = narrations[0].author;
              for (var dayInd = 0 ; dayInd < narrations.length; dayInd++) {
                  if (currentSeriesId != '' && currentSeriesId != narrations[dayInd].seriesId) {
                      var blockNarration =
                          {
                              posted: currentDate,
                              postDate: currentPostDate,
                              title: currentSeriesId,
                              seriesId: currentSeriesId,
                              seq: 1,
                              content: content,
                              author: currentAuthor
                          }
                      blockNarrations.push(blockNarration);
                      content = '';
                      currentSeriesId = narrations[dayInd].seriesId;
                      currentDate = narrations[dayInd].posted;
                      currentPostDate = narrations[dayInd].postDate;
                      currentNarrationTitle = narrations[dayInd].seriesId;
                      currentAuthor = narrations[dayInd].author;
                  }
                  else {
                      content += '<p/><p/>' + narrations[dayInd].content;
                  }
              }
              return narrations.filter(this.filterDisclaimer);;
          }
      });
     
}());