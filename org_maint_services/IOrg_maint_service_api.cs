using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;
using org_maint_services.Model;

namespace org_maint_services
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "IService1" in both code and config file together.
    [ServiceContract]
    public interface IOrg_Maint_Service1
    {

        [OperationContract]
        [WebInvoke(Method ="GET",RequestFormat =WebMessageFormat.Json, ResponseFormat =WebMessageFormat.Json, UriTemplate ="/GetBudgetStatus")]
        BudgetStatusContract GetBudgetStatus();

        [OperationContract]
        [WebInvoke(Method = "GET", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json, UriTemplate = "/GetBudgetHistory")]
        List<BudgetHistoryContract> GetBudgetHistory();

        [OperationContract]
        [WebInvoke(Method = "GET", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json, UriTemplate = "/GetEntityStatus")]
        EntitySummaryContract GetEntityStatus();

        [OperationContract]
        [WebInvoke(Method = "GET", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json, UriTemplate = "/GetContributorList")]
        List<ContributorContract> GetContributorList();

        [OperationContract]
        [WebInvoke(Method = "GET", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json, UriTemplate = "/GetEntitiesList")]
        List<EntityBudgetPriorityContract> GetEntitiesList();

        [OperationContract]
        [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json, UriTemplate = "/AddContributor", BodyStyle=WebMessageBodyStyle.Wrapped)]
        List<ContributorContract> AddContributor(Contributor contributor, bool returnList=false);
        
        [OperationContract]
        [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json, UriTemplate = "/AllocateFunds")]
        EntitySummaryContract AllocateFunds(Double fundsForAllocation);

        [OperationContract]
        [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json, UriTemplate = "/GenerateTestData")]
        bool GenerateTestData();
    }


}
