using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using org_maint_services.Model;

namespace org_maint_services
{
    public class CacheData
    {
        private static CacheData instance;

        public bool writeToDb { get; set; }
        Org_MaintEntities orgMaintEntitiesContext;
        AdminMaintEntities adminMainEntitiesContext;
        public BudgetStatusContract budgetStatus = new BudgetStatusContract();
        public List<BudgetHistoryContract> budgetHistory = new List<BudgetHistoryContract>();
        private CacheData()
        {
            orgMaintEntitiesContext = new Org_MaintEntities();
            budgetStatus = GetBudgetStatus();
            budgetHistory = GetBudgetHistory();

            #region admin
            // consider moving to a different webservice
            adminMainEntitiesContext = new AdminMaintEntities();

            #endregion
        }
         BudgetStatusContract GetBudgetStatus()
        {
            
            var query = (from budgetStatusSingle in orgMaintEntitiesContext.BudgetStatus select budgetStatusSingle).FirstOrDefault();
            if (query == null)
            {
                BudgetStatu budgStatu = new BudgetStatu();
                budgStatu.BudgetAvailable = budgetStatus.BudgetAvailable = 10000;
                budgStatu.BudgetAllocated = budgetStatus.BudgetAllocated = 0;
                budgStatu.BudgetRequired = budgetStatus.BudgetRequired = 20000;
                budgStatu.DateUpdated = DateTime.Now;
                orgMaintEntitiesContext.BudgetStatus.Add(budgStatu);
                orgMaintEntitiesContext.SaveChanges();

            }
            else
            {
                budgetStatus.BudgetAvailable = query.BudgetAvailable;
                budgetStatus.BudgetAllocated = query.BudgetAllocated;
                budgetStatus.BudgetRequired = query.BudgetRequired;
                budgetStatus.DateUpdated = query.DateUpdated;
                budgetStatus.DateUpdatedString = query.DateUpdated.ToShortDateString();
            }
            return budgetStatus;

        }
        public List<BudgetHistoryContract> GetBudgetHistory()
        {
            
            var query = (from budgetHistoryDataElement in orgMaintEntitiesContext.BudgetHistories select budgetHistoryDataElement).Distinct();
            query.ToList().ForEach(rec =>
            {
                budgetHistory.Add(
                   new BudgetHistoryContract
                   {
                       Amount = rec.Amount,
                       DebitCredit = rec.DebitCredit,
                       Date = rec.Date,
                       DateString = rec.Date.ToShortDateString(),
                       Comments = rec.Comments,
                       Principal = rec.Principal
                   });
            });
            ////foreach (BudgetHistory bHDataElement in query.ToList())
            ////{
            ////    BudgetHistoryContract budgetHistoryListElement = new BudgetHistoryContract();
            ////    budgetHistoryListElement.Amount = bHDataElement.Amount;
            ////    budgetHistoryListElement.DebitCredit = bHDataElement.DebitCredit;
            ////    budgetHistoryListElement.Date = bHDataElement.Date;
            ////    budgetHistory.Add(budgetHistoryListElement);
            ////}
            return budgetHistory;
        }
        public static CacheData Instance
        {
            get
            {
                if (instance == null)
                {
                    instance = new CacheData();
                }
                return instance;
            }
        }
    }
}