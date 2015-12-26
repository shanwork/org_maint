using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Runtime.Serialization;

namespace org_maint_services
{
    [DataContract]
    public class BudgetStatusContract
    {

        [DataMember]
        public decimal BudgetAvailable { get; set; }
        [DataMember]
        public decimal BudgetAllocated { get; set; }

        [DataMember]
        public decimal BudgetRequired { get; set; }

        [DataMember]
        public DateTime DateUpdated { get; set; }

        [DataMember]
        public string DateUpdatedString { get; set; }
    }

    [DataContract]
    public class BudgetHistoryContract
    {

        [DataMember]
        public decimal Amount { get; set; }
        [DataMember]
        public string DebitCredit { get; set; }

        [DataMember]
        public DateTime Date { get; set; }

        [DataMember]
        public string DateString { get; set; }

        [DataMember]
        public string Comments { get; set; }

        [DataMember]
        public string Principal { get; set; }

    }
    [DataContract]
    public class ContributorContract
    {

        [DataMember]
        public int ContributorID { get; set; }

        [DataMember]
        public string ContributorName { get; set; }

        [DataMember]
        public decimal OriginalCurrencyAmount { get; set; }

        [DataMember]
        public string Currency { get; set; }

        [DataMember]
        public decimal ConvertedAmount { get; set; }

        [DataMember]
        public DateTime DateReceived { get; set; }

        [DataMember]
        public string DateReceivedString { get; set; }

        [DataMember]
        public DateTime? DateDeposited { get; set; }

        [DataMember]
        public string  DateDepositedString { get; set; }

        [DataMember]
        public string Comments { get; set; }
    }
    [DataContract]
    public class EntitySummaryContract
    {

        [DataMember]
        public long TotalEntities { get; set; }

        [DataMember]
        public long TotalEntitiesAllocated { get; set; }

        [DataMember]
        public long TotalEntitiesAllocable { get; set; }

        [DataMember]
        public long TotalEntitiesUnallocated { get; set; }

        [DataMember]
        public DateTime DateUpdated { get; set; }

        [DataMember]
        public string DateUpdatedString { get; set; }
    }
    [DataContract]
    public class EntityBudgetPriorityContract
    {
        [DataMember]
        public int EntityBudgetPriorityID { get; set; }

        [DataMember]
        public string EntityName { get; set; }

        [DataMember]
        public int Priority { get; set; }

        [DataMember]
        public decimal BudgetRequired { get; set; }

        [DataMember]
        public decimal BudgetAllocated { get; set; }

        [DataMember]
        public DateTime? DateUpdated { get; set; }

        [DataMember]
        public string DateUpdatedString { get; set; }

        [DataMember]
        public string Comments { get; set; }

    }
    [DataContract]
    public partial class EntityFinanceSummaryContract
    {
        [DataMember]
        public int EntityFinanceSummaryID { get; set; }

        [DataMember]
        public string EntityName { get; set; }

        [DataMember]
        public string EntityCategory { get; set; }


        [DataMember]
        public int Priority { get; set; }

        [DataMember]
        public decimal BudgetRequired { get; set; }

        [DataMember]
        public decimal BudgetAllocated { get; set; }

        [DataMember]
        public decimal BudgetUsed { get; set; }

        [DataMember]
        public string DateUpdatedString { get; set; }

        [DataMember]
        public Nullable<System.DateTime> DateUpdated { get; set; }

        [DataMember]
        public string Comments { get; set; }
    }
    [DataContract]
    public partial class EntityItemExpensesContract
    {
        [DataMember]
        public int EntityItemID { get; set; }

        [DataMember]
        public int EntityFinanceSummaryID { get; set; }

        [DataMember]
        public string EntityItemName { get; set; }

        [DataMember]
        public string EntityItemDetail { get; set; }

        [DataMember]
        public decimal EntityItemBudgetRequired { get; set; }

        [DataMember]
        public decimal EntityItemBudgetAllocated { get; set; }

        [DataMember]
        public short EntityItemPriority { get; set; }

        [DataMember]
        public Nullable<System.DateTime> EntityItemDateUpdated { get; set; }

        [DataMember]
        public string EntityItemComments { get; set; }
    }
    // work around class since allocateFunds(double) doesnt work
    [Serializable]
    public class AllocateWrapper
    {
        public string marc;
        public double fundsToAllocate;
    }
}