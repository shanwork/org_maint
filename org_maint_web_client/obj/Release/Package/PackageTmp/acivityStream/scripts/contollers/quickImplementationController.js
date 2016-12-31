/* ################# Admin controller 
  Handles retrieval and update group permission data

  Status and to do as on June 27 2016
  ===================================
  Status
  1. Working as expected on local: webmatrix and apache, and main server.
  2. NOTE: when clicking 'Cancel' I reach out to the server to get the original data, instead of 
     saving and retrievig original data from the cache. This is because some other admin may have updated
     the data and the cache would then contain outdates and therefore inaccurate data
  To do
  1. Success/Error message on update (high priority)
  2. Move the REST portion to the factory class (low priority)
  3. All hard codes to environment service class (mid priority)
  4. Use best practises (use As, this instead of $scope, etc) (mid priority)
  4. Do we want to add more inline comments?


*/

(function () {
    'use strict';
    angular.module('activityStreamApp').controller('QuickImplementationController',
        function ($scope,
                    $http,
                    $rootScope
                 //   $localStorage,
                
                    ) {
            $scope.getAction = function(whatActionType)
            {
                var actiontext = '';
                switch (whatActionType) {
                    case 'Comment':
                        actiontext = ' commented on the idea';
                        break;
                    case 'Idea':
                        actiontext = ' posted an idea';
                        break;
                    case 'Reply':
                        actiontext = ' repled to a comment on the idea';
                        break;
                    default:
                        actiontext = 'entered text';
                        break;
                }
                return actiontext;
            }
            $scope.init = function () {
           //     if (!$localStorage.activityHistory) {
                $scope.currentNodeId = 12324;// hard coded, 
                $scope.tonysText = '';
                $scope.tonysCategory = 'idea';

                $scope.elmosText = '';
                $scope.elmosCategory = 'idea';

                    $scope.activityHistory = {
                        "data": {
                            "recentActivities": [
                              {
                                  "nodeType": 17,
                                  "nodeTypeString": "Comment",
                                  "nodeid": 12324,
                                  "title": "Re: What is for dinner?",
                                  "postDate": 1468334737000,
                                  "author": "Tony Handy",
                                  "authorId": 1,
                                  "authorAvatar": "images/avatar1465389809397.png"
                              },
                              {
                                  "nodeType": 2,
                                  "nodeTypeString": "Idea",
                                  "nodeid": 12319,
                                  "title": "What is the best place for happy hour?",
                                  "postDate": 1468334687000,
                                  "author": "Tony Handy",
                                  "authorId": 1,
                                  "authorAvatar": "images/avatar1465389809397.png"
                              },
                              {
                                  "nodeType": 18,
                                  "nodeTypeString": "Reply",
                                  "nodeid": 12318,
                                  "title": "Re: What is for dinner?",
                                  "postDate": 1468334438000,
                                  "author": "Elmo Elmo",
                                  "authorId": 364,
                                  "authorAvatar": "images/avatar1461606369555.jpg"
                              },
                              {
                                  "nodeType": 17,
                                  "nodeTypeString": "Comment",
                                  "nodeid": 12317,
                                  "title": "Re: What is for dinner?",
                                  "postDate": 1468334413000,
                                  "author": "Elmo Elmo",
                                  "authorId": 364,
                                  "authorAvatar": "images/avatar1461606369555.jpg"
                              },
                              {
                                  "nodeType": 2,
                                  "nodeTypeString": "Idea",
                                  "nodeid": 12312,
                                  "title": "What is for dinner?",
                                  "postDate": 1468334214000,
                                  "author": "Cooke Monster",
                                  "authorId": 380,
                                  "authorAvatar": "images/no_avatar.gif"
                              }
                            ]
                        },
                        "success": true
                    };
           /*     }
                else {
                    $scope.activityHistory = $localStorage.activityHistory;
                }*/
                $scope.sortedActivities =    $scope.activityHistory.data.recentActivities.sort(function (item1, item2) {
                        return item2.nodeId - item1.nodeid;
                    });
            }
            $scope.addActivity = function (text, type, author, image) {
                $scope.currentNodeId++;
                var newActivity = {
                    "nodeType": type,
                    "nodeTypeString": type==2? "Idea":type==17 ?"Comment":"Reply",
                    "nodeid": $scope.currentNodeId,
                    "title": text,
                    "postDate": 1468334214000,
                    "author": author,
                    "authorId": 380,
                    "authorAvatar": image
                };
                // I did not have time to debug the sort, so I implemented a push function
                $scope.activityHistory.data.recentActivities.splice(0, 0,newActivity);
            }
            $scope.init();
        
            

        })
})();
