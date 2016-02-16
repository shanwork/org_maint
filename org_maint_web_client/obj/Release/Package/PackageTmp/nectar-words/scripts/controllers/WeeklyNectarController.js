(function () {
    
    var WeeklyNectarController = function ($scope, $routeParams, $localStorage, connectToService) {
        $scope.root = '/myApp/nectar-words';
        var startOfThisWeek = parseInt(new Date().getDay());
        var deltaToDesiredWeek = startOfThisWeek + (($routeParams.weekIndex - 1) * 7)
        //console.log(startOfDateString);
        $scope.startOfThisWeek = new Date(new Date().getTime() - parseInt(startOfThisWeek * 24 * 60 * 60 * 1000));
        $scope.startOfChosenWeek = new Date(new Date().getTime() - parseInt(deltaToDesiredWeek * 24 * 60 * 60 * 1000));
        $scope.today = new Date();
        if ($localStorage.thisWeekSaying == undefined || $localStorage.thisWeekSaying == null) {
            $scope.thisWeeksSaying = [ {
                posted: 'Feb 12 2016',
                title: 'I would lie like dust!',
                content: 'To become a holy man, esteemed by all,<br/>' +
                     'Is like climbing a palm tree tall;<br/>' +
                     'Succeed, you enjoy the delicious juice;<br/>' +
                     'Fall, you are heap of broken bones!<p/>' +
                     'He, who is above the greed for gold,<br/>' +
                     'And who is free from woman’s hold,<br/>' +
                     'Is truly holy indeed!<br/>' +
                     'On such a holy man’s feet<br/>' +
                     'I would lie like dust, says Kabir.',
            author: 'Sant Kabir',
            img:$scope.root + '/images/dwarkamai_1.jpg'
        },
            {
                posted: 'Feb 11 2016',
                title: 'The dinner party',
                content: 'You love your friends so much that you invite them for dinner at your home. You talk to them, and entertain them. After the dessert and coffee is served, you expect them to slowly leave. What will happen if everyone wants to stay back? (everyone laughs) For those who are still chatting and not thinking of leaving, you give a hint saying, “Shall I offer some more coffee?” or “Can you help us in the kitchen to put things away?”(big laughter)<p/>' +
                        'What has happened? A few hours ago, you loved them so much that you poured your hearts out to them. Now you want them to leave. Why?.. because, you want to spend time with yourself and your family. So too, be engaged in the worldly things only to the extent necessary for your survival. Spend the rest of the time in contemplating on the glories of the Lord and engaging in Sadhana (spiritual practice).',
                author: 'Swami T',
                img: $scope.root + '/images/sai_1221_1.jpg'
        },
             {
                posted: 'Feb 10 2016',
                title: 'Mind is everything',
                content: 'The mind is everything. It is in mind alone that one becomes pure and impure.<p/>' +  
                            'A man, first of all, makes his own mind impure and then alone he sees other man’s faults. I tell you one thing. If you want peace of mind, do not find fault with others. Rather see your own faults. -Sri Sarada Devi (wife of Sri Ramakrishna ',
                author: '-Sri Sarada Devi (wife of Sri Ramakrishna Paramahamsa)',
                img: $scope.root + '/images/dwarkamai_1.jpg'
             },
             {
                 posted: 'Feb 09 2016',
                 title: 'Always be active',
                 content: 'One should always be active. One should be never without work.<p/>' +
                     'For, when one is idle, all sorts of bad thoughts crop up in one’s mind.',
                 author: '-Sri Ramakrishna Paramahamsa',
                 img: $scope.root + '/images/sai_1221_1.jpg'
        }
            ];
        }
        else {
            $scope.thisWeekSaying = $localStorage.thisWeekSaying;
        };
    };

    

    WeeklyNectarController.$inject = ['$scope', '$routeParams', '$localStorage', 'connectToService'];

    angular.module('nectar_words_app')
      .controller('WeeklyNectarController', WeeklyNectarController);

}());