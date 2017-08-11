var app = angular.module('angularTable', ['nvd3']);

app.controller('listdata', function ($scope, $http) {
    // copy paste data
    $scope.data =
  [{
      "build": "241",
      "suite": "Account Recovery",
      "test": "medium risk account recovery SMS Flow",
      "error": "Element [object Object] is not visible within 20202 ms Wait timed out",
      "level5": "",
      "level4": "account-recovery.js:389:3",
      "level3": "reset-password-page.js:36:9",
      "level2": "base-page.js:82:10",
      "level1": "base-page.js:85:22",
      "timeAndDate": "May 5, 2017 8:57:12 AM", "$$hashKey": "object:18"
  },
      { "build": "242", "suite": "Customer Testing, Turbo Tax", "test": "Turbotax sign in succeeds", "error": "Could not locate #ius-sign-in-header within 20202 ms Wait timed out", "level3": "customer-testing-ctg-turbotax.js:41:3", "level2": "sign-in-page.js:64:8", "level1": "base-page.js:75:22", "timeAndDate": "May 5, 2017 11:48:36 AM", "$$hashKey": "object:19" },
      { "build": "242", "suite": "Customer Testing, Mint", "test": "Mint Sign in succeeds", "error": "Could not locate #ius-userid within 20202 ms Wait timed out", "level5": "customer-testing-mint-mint.js:62:8", "level4": "sign-in-page.js:25:8", "level3": "sign-in-page.js:20:8", "level2": "base-page.js:177:8", "level1": "base-page.js:75:22", "timeAndDate": "May 5, 2017 11:48:36 AM", "$$hashKey": "object:25" },
      { "build": "242", "suite": "Customer Testing, Apps Center", "test": "AppCenter sign in succeeds", "error": "Could not locate div#signUpSignInWidgetSignUpDiv &gt; div#signInLink &gt; a within 20202 ms", "level4": "customer-testing-sbg-appcenter.js:56:10", "level3": "customer-testing-sbg-appcenter-signin-page.js:71:8", "level2": "base-page.js:198:8", "level1": "base-page.js:75:22", "timeAndDate": "May 5, 2017 11:48:36 AM", "$$hashKey": "object:26" },
      { "build": "242", "suite": "Customer Testing, Online Payroll", "test": "Online Payroll:Small Business Owners(.jsp) check labels and links, simple sign in succeeds", "error": "Could not locate #ius-label-userid within 20202 ms Wait timed out", "level4": "customer-testing-sbg-payroll.js:56:3", "level3": "sign-in-page.js:97:15", "level2": "base-page.js:148:15", "level1": "base-page.js:75:22", "timeAndDate": "May 5, 2017 11:48:36 AM", "$$hashKey": "object:30" },
      { "build": "242", "suite": "Customer Testing, Quick Books", "test": "Quick books check labels and links, simple sign in succeeds", "error": "Could not locate #ius-sign-in-header within 20202 ms Wait timed out", "level4": "", "level3": "customer-testing-sbg-quickbooks.js:56:4", "level2": "sign-in-page.js:64:8", "level1": "base-page.js:75:22", "timeAndDate": "May 5, 2017 11:48:36 AM", "$$hashKey": "object:34" }]
    $scope.getData = function () {
        return $scope.data;
    }
    // ########### STATS ANALYSIS SECTION
    // counts for various fields ...
    $scope.scanAndAddSubList = function (fieldArray, key) {
        $scope.sortField = key;
        var sortedRegressionErrors = $scope.regressionErrors.sort(
           function (a, b, key) {
               if (a[$scope.sortField] < b[$scope.sortField])
                   return -1;
               if (a[$scope.sortField] > b[$scope.sortField])
                   return 1;
               return 0;
           });
        var fieldArrayIndex = 0;
        var firstKey = sortedRegressionErrors[0][key];
        var element = {
            build: sortedRegressionErrors[0].build,
            field: firstKey,
            count: 1.0
        };
        fieldArray.push(element);


        for (var i = 1; i < sortedRegressionErrors.length; i++) {
            if (sortedRegressionErrors[i][key] != firstKey) {
                firstKey = sortedRegressionErrors[i][key];
                var element = {
                    build: sortedRegressionErrors[i].build,
                    field: firstKey,
                    count: 1.0
                };
                fieldArray.push(element);
                fieldArrayIndex++;
            }
            else {
                fieldArray[fieldArrayIndex].count++;
                fieldArray[fieldArrayIndex].build += ", " + sortedRegressionErrors[i].build;
            }
        }
    }
    function compare(a, b, key) {
        if (a[key] < b[key])
            return -1;
        if (a[key] > b[key])
            return 1;
        return 0;
    }
    $scope.scanAndUpdateSubList = function (fieldArray, key, build, value) {
        var found = null;
        found = fieldArray.filter(function (object) { return object[key] == value });
        if (found != null && found.length > 0) {
            found.build += ',' + build;
            found.count++;
        }
        else {
            var element = {
                build: build,
                field: value,
                count: 1.0
            };
        }
        fieldArray.push(element);
    }
    // ... ### STATS SECTION
    $scope.sort = function (keyname) {
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
    $scope.init = function () {
        $scope.regressionErrors = $scope.getData();
        $scope.toggle = true;
        $scope.showStatus = false;
        $scope.errorTypes = [];
        $scope.level1Errors = [];
        $scope.level2Errors = [];
        $scope.level3Errors = [];
        $scope.level4Errors = [];
        $scope.level5Errors = [];
        key = "build"
        if ($scope.regressionErrors.length > 0) {
            $scope.scanAndAddSubList($scope.errorTypes, "error")
            $scope.scanAndAddSubList($scope.level1Errors, "level1")
            $scope.scanAndAddSubList($scope.level2Errors, "level2")
            $scope.scanAndAddSubList($scope.level3Errors, "level3")
            $scope.scanAndAddSubList($scope.level4Errors, "level4")
        }
        $scope.totalRecords = $scope.regressionErrors.length;
        $scope.options = {
            chart: {
                type: 'discreteBarChart',
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 60,
                    left: 55
                },
                x: function (d) { return d.label; },
                y: function (d) { return d.value; },
                showValues: true,
                valueFormat: function (d) {
                    return d3.format(',.4f')(d);
                },
                transitionDuration: 500,
                xAxis: {
                    axisLabel: 'X Axis'
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    axisLabelDistance: 30
                }
            }
        };

        $scope.data = [{
            key: "Cumulative Return",
            values: [
                { "label": "A", "value": -29.765957771107 },
                { "label": "B", "value": 0 },
                { "label": "C", "value": 32.807804682612 },
                { "label": "D", "value": 196.45946739256 },
                { "label": "E", "value": 0.19434030906893 },
                { "label": "F", "value": -98.079782601442 },
                { "label": "G", "value": -13.925743130903 },
                { "label": "H", "value": -5.1387322875705 }
            ]
        }];
    }
    $scope.init();
    $scope.showJson = function () {
        return JSON.stringify($scope.regressionErrors)
    }

    $scope.addregressionError = function () {
        var newObject = {
            build: $scope.build,
            suite: $scope.suite,
            test: $scope.test,
            error: $scope.error,
            level5: $scope.level5,
            level4: $scope.level4,
            level3: $scope.level3,
            level2: $scope.level2,
            level1: $scope.level1,
            timeAndDate: $scope.time
        }
        $scope.regressionErrors.push(newObject);
        $scope.scanAndUpdateSubList($scope.errorTypes, "field", $scope.build, $scope.error);
    }


});
