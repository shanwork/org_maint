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
        #region org budgetting and financing
        [OperationContract]
        [WebInvoke(Method ="GET",RequestFormat =WebMessageFormat.Json, ResponseFormat =WebMessageFormat.Json, UriTemplate ="/GetBudgetStatus")]
        BudgetStatusContract GetBudgetStatus();

        [OperationContract]
        [WebInvoke(Method = "GET", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json, UriTemplate = "/GetCachedBudgetStatus")]
        BudgetStatusContract GetCachedBudgetStatus();

        [OperationContract]
        [WebInvoke(Method = "GET", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json, UriTemplate = "/GetBudgetHistory")]
        List<BudgetHistoryContract> GetBudgetHistory();

        [OperationContract]
        [WebInvoke(Method = "GET", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json, UriTemplate = "/GetCachedBudgetHistory")]
        List<BudgetHistoryContract> GetCachedBudgetHistory();

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
        [WebInvoke(Method = "GET", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json, UriTemplate = "/GetEntitySummaryList")]
        List<EntityFinanceSummaryContract> GetEntitySummaryList();

        [OperationContract]
        [WebGet( RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json, UriTemplate = "/GetEntitySummary/{EntityFinanceSummaryID}")]
        EntityFinanceSummaryContract GetEntitySummary(string EntityFinanceSummaryID);

        [OperationContract]
        [WebGet(RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json, UriTemplate = "/GetEntityItems/{EntityFinanceSummaryID}")]
        List<EntityItemExpensesContract> GetEntityItems(string EntityFinanceSummaryID);

        [OperationContract]
        [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json, UriTemplate = "/AddContributor",BodyStyle=WebMessageBodyStyle.Bare)]
        bool AddContributor(Contributor contributor);

       
      //  We are not going to add just the summary = we will add entity summary and items from the details, right now not working so will iterate
       [OperationContract]
        [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json, UriTemplate = "/UpdateEntitySummary", BodyStyle = WebMessageBodyStyle.Bare)]
        int UpdateEntitySummary(EntityFinanceSummary entity);

        [OperationContract]
        [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json, UriTemplate = "/UpdateEntityItem", BodyStyle = WebMessageBodyStyle.Bare)]
        int UpdateEntityItem(EntityItemExpens entityItem);

        [OperationContract]
        [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json, UriTemplate = "/UpdateEntity", BodyStyle = WebMessageBodyStyle.Wrapped)]
        bool UpdateEntity(EntityFinanceSummary entity,List<EntityItemExpens> entityItemList );

        
        [OperationContract]
        [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json, UriTemplate = "/AllocateFunds", BodyStyle = WebMessageBodyStyle.Bare)]
        bool AllocateFunds(double fundsForAllocation);


        [OperationContract]
        [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json, UriTemplate = "/AllocateFunds2", BodyStyle = WebMessageBodyStyle.Bare)]
        bool AllocateFunds2(AllocateWrapper fundsForAllocationBox);

        [OperationContract]
        [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json, UriTemplate = "/AllocateFunds3", BodyStyle = WebMessageBodyStyle.Bare)]
        bool AllocateFunds3();

        [OperationContract]
        [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json, UriTemplate = "/GenerateTestData")]
        bool GenerateTestData();
        #endregion
    }


}
