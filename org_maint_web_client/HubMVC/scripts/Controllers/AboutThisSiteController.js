(function () {
    var AboutThisSiteController = function ($scope, $location, $anchorScroll, connectToService) {
        var today = new Date();
        $scope.imageWidth = 500;
        $scope.imageStyle = [
            { width: '500px', border: '4px groove', 'border-radius': '5px' },
            { width: '500px', border: '4px groove', 'border-radius': '5px' },
            {width:    '500px',border:'4px groove','border-radius':'5px'},
            { width: '500px', border: '4px groove', 'border-radius': '5px' },
            { width: '500px', border: '4px groove', 'border-radius': '5px' },
            { width: '950px', border: '4px groove', 'border-radius': '5px' }];
        $scope.todayShort = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear() + '*';
        $scope.scrollTo = function (label) {
            $location.hash(label);
            $anchorScroll();
        }
        $scope.toggleSize = function(index)
        {
            if ($scope.imageStyle[index].width == '500px') {
                $scope.imageStyle[index].width = '800px';
            }
            else{
                $scope.imageStyle[index].width = '500px';
            }
      //      $scope.imageStyle = { width: $scope.imageWidth + "px", border: '4px groove', 'border-radius': '5px' };
        }

    };



    AboutThisSiteController.$inject = ['$scope', '$location', '$anchorScroll', 'connectToService'];

    angular.module('hmvc_app')
      .controller('AboutThisSiteController', AboutThisSiteController);

}());