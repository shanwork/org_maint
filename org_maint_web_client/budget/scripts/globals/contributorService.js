(function () {
    angular.module('org_maint_budget')
      .service('ContributorService', function ($http, $q, connectToService, $localStorage) {
          var contributorList = [];
          this.getContributorList = function () {
              if (connectToService == 'true') {
                  return $http.get("http://localhost:58778/Org_maint_service_api.svc/GetContributorList");
             }
             else {
                 if (contributorList.length == 0) {
                     //alert(contributorList.length);
                     var newContributor =
                         {
                             ContributorID: 1,
                             ContributorName: 'Ganesha',
                             OriginalCurrencyAmount: 1000,
                             Currency: 'INR',
                             ConvertedAmount: 1000,
                             Comments: 'Initial Thrust',
                             DateReceivedString: 'Nov 1 2015',
                             DateReceived: '2015-11-01'
                         };
                     contributorList.push(newContributor);
                 }
                 if ($localStorage.contributorList != null)
                  
                     contributorList = $localStorage.contributorList;
                 else
                     $localStorage.contributorList = contributorList;

                 return contributorList;

             }

          }
          this.addContributor = function (Contributor) {
              //   alert(Contributor.ContributorName);
              if (connectToService == 'true') {
                  var request = $http({
                      method: "post",
                      url: "http://localhost:58778/Org_maint_service_api.svc/AddContributor",
                      data: Contributor
                  });
                  return request;
              }
              else {
                  Contributor.ContributorID = contributorList.length + 1;
                  contributorList.push(Contributor);
                  $localStorage.contributorList = contributorList;

               }
          }
      });
   

}());