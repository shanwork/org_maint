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
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Service1" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select Service1.svc or Service1.svc.cs at the Solution Explorer and start debugging.
    public class Org_Maint_Service : IOrg_Maint_Service1
    {
        Org_MaintEntities orgMaintEntitiesContext;
        public Org_Maint_Service()
        {
            orgMaintEntitiesContext = new Org_MaintEntities();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public BudgetStatusContract GetBudgetStatus()
        {
            BudgetStatusContract budgetStatus = new BudgetStatusContract();
            var query = (from budgetStatusSingle in orgMaintEntitiesContext.BudgetStatus select budgetStatusSingle).FirstOrDefault();
            if (query == null)
            {
                BudgetStatu budgStatu = new BudgetStatu();
                budgStatu.BudgetAvailable = budgetStatus.BudgetAvailable = 10000;
                budgStatu.BudgetAllocated = budgetStatus.BudgetAllocated = 0;
                budgStatu.BudgetRequired = budgetStatus.BudgetRequired = 20000;
                budgStatu.DateUpdated =    DateTime.Now;
                orgMaintEntitiesContext.BudgetStatus.Add(budgStatu);
                orgMaintEntitiesContext.SaveChanges();

            }
            else
            {
                budgetStatus.BudgetAvailable = query.BudgetAvailable  ;
                budgetStatus.BudgetAllocated = query.BudgetAllocated ;
                budgetStatus.BudgetRequired = query.BudgetRequired ;
                budgetStatus.DateUpdated = query.DateUpdated  ;
                budgetStatus.DateUpdatedString = query.DateUpdated.ToShortDateString();
            }
            return budgetStatus;

        }
        public List<BudgetHistoryContract> GetBudgetHistory()
        {
            List<BudgetHistoryContract> budgetHistory = new List<BudgetHistoryContract>();
            var query = (from budgetHistoryDataElement in orgMaintEntitiesContext.BudgetHistories select budgetHistoryDataElement).Distinct();
            query.ToList().ForEach(rec =>
             {
                 budgetHistory.Add(
                    new BudgetHistoryContract
                    {
                        Amount = rec.Amount,
                        DebitCredit = rec.DebitCredit,
                        Date = rec.Date,
                        DateString = rec.Date.ToShortDateString()
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
            return budgetHistory ;
        }

         public EntitySummaryContract GetEntityStatus()
        {
            EntitySummaryContract entityStatus = new EntitySummaryContract();
            var query = (from entitySummary in orgMaintEntitiesContext.EntitySummaries select entitySummary).FirstOrDefault();
            if (query==null)
            {
                EntitySummary newEntitySummary = new EntitySummary();
                entityStatus.TotalEntities = newEntitySummary.TotalEntities =  100000;
                entityStatus.TotalEntities = newEntitySummary.TotalEntitiesAllocable = 100000;
                entityStatus.TotalEntitiesUnallocated = newEntitySummary.TotalEntitiesUnallocated = 200000;
                entityStatus.DateUpdated = newEntitySummary.DateUpdated = DateTime.Now;
                entityStatus.DateUpdatedString = newEntitySummary.DateUpdated.ToShortDateString();

                orgMaintEntitiesContext.EntitySummaries.Add(newEntitySummary);
                orgMaintEntitiesContext.SaveChanges();
            }
            else
            {
                entityStatus.TotalEntities = query.TotalEntities ;
                entityStatus.TotalEntities = query.TotalEntitiesAllocable ;
                entityStatus.TotalEntitiesUnallocated = query.TotalEntitiesUnallocated ;
                entityStatus.DateUpdated = query.DateUpdated  ;
                entityStatus.DateUpdatedString = query.DateUpdated.ToShortDateString();

            }
            return entityStatus;
        }

       public List<ContributorContract> GetContributorList()
        {
            List<ContributorContract> contributorList = new List<ContributorContract>();
            var query = (from contributor in orgMaintEntitiesContext.Contributors select contributor).Distinct();

            query.ToList().ForEach(rec =>
            {
                contributorList.Add(
                    new ContributorContract
                    {
                        ConvertedAmount = rec.ConvertedAmount,
                        ContributorName = rec.ContributorName,
                        OriginalCurrencyAmount = rec.OriginalCurrencyAmount,
                        Currency = rec.Currency,
                        DateReceived = rec.DateReceived,
                        DateReceivedString = rec.DateReceived.ToShortDateString(),
                        DateDeposited = rec.DateDeposited,
                        DateDepositedString = rec.DateDeposited != null? ((DateTime)rec.DateDeposited).ToShortDateString():""
                    });
            });
            return contributorList;
        }

        public List<EntityBudgetPriorityContract> GetEntitiesList()
        {
            List<EntityBudgetPriorityContract> entityBudgetPriorityList = new List<EntityBudgetPriorityContract>();
            var query = (from entityBudgetPriorityElement in orgMaintEntitiesContext.EntityBudgetPriorities select entityBudgetPriorityElement).Distinct();
            query.ToList().ForEach(rec =>
            {
                entityBudgetPriorityList.Add(
                    new EntityBudgetPriorityContract
                    {
                        EntityName = rec.EntityName,
                        BudgetAllocated = rec.BudgetAllocated,
                        BudgetRequired = rec.BudgetRequired,
                        Priority = rec.Priority,
                        DateUpdated = rec.DateUpdated,
                        DateUpdatedString = rec.DateUpdated != null ? ((DateTime)rec.DateUpdated).ToShortDateString():""
                    }
                    );
            });
            return entityBudgetPriorityList;
        }
       
        public bool AddContributor(Contributor contributor)
        {
            List<ContributorContract> updatedContributorList = new List<ContributorContract>();
            Contributor newContributorRecord = new Contributor
            {
                OriginalCurrencyAmount = contributor.OriginalCurrencyAmount,
                ContributorName = contributor.ContributorName,
                Currency = contributor.Currency,
                DateReceived = DateTime.Now,// contributor.DateReceived,
                DateDeposited = DateTime.Now//contributor.DateDeposited,
        };
            // do we do the conversion here or on the UI? 
            // later on in the UI, because it is easier to update.. we can add a field for conversion 
           switch(contributor.Currency.ToUpper())
            {
                case "INR":
                    newContributorRecord.ConvertedAmount = contributor.OriginalCurrencyAmount;
                    break;
                case "USD":
                    newContributorRecord.ConvertedAmount = contributor.OriginalCurrencyAmount * 60;
                    break;
                case "EUR":
                    newContributorRecord.ConvertedAmount = contributor.OriginalCurrencyAmount * 75;
                    break;
                default:
                    newContributorRecord.ConvertedAmount = contributor.OriginalCurrencyAmount * 20;
                    break;
            }
            orgMaintEntitiesContext.Contributors.Add(newContributorRecord);
            orgMaintEntitiesContext.SaveChanges();

            BudgetHistory newBudgetHistoryRecord = new BudgetHistory
            {
                Amount = newContributorRecord.ConvertedAmount,
                DebitCredit = "Credit",
                Date = (DateTime)(newContributorRecord.DateDeposited==null?  DateTime.Now: newContributorRecord.DateDeposited)
            };
            orgMaintEntitiesContext.BudgetHistories.Add(newBudgetHistoryRecord);
            orgMaintEntitiesContext.SaveChanges();

            var query = (from budgetStatusSingle in orgMaintEntitiesContext.BudgetStatus select budgetStatusSingle).FirstOrDefault();
            if (query == null)
            {
                BudgetStatu budgStatu = new BudgetStatu();
                budgStatu.BudgetAvailable  = newContributorRecord.ConvertedAmount;
                budgStatu.BudgetAllocated =   0;
                budgStatu.BudgetRequired =  20000;
                budgStatu.DateUpdated = DateTime.Now;
                orgMaintEntitiesContext.BudgetStatus.Add(budgStatu);
          
            }
            else
            {
                query.BudgetAvailable += newContributorRecord.ConvertedAmount;
                query.DateUpdated = (DateTime)(DateTime)(newContributorRecord.DateDeposited == null ? DateTime.Now : newContributorRecord.DateDeposited);
            }
            orgMaintEntitiesContext.SaveChanges();
            return true ;
        }
        //public List<ContributorContract> AddContributor(Contributor contributor, bool returnList = false)
        //{
        //    List<ContributorContract> updatedContributorList = new List<ContributorContract>();
        //    Contributor newContributorRecord = new Contributor
        //    {
        //        OriginalCurrencyAmount = contributor.OriginalCurrencyAmount,
        //        ContributorName = contributor.ContributorName,
        //        Currency = contributor.Currency,
        //        DateReceived = DateTime.Now,// contributor.DateReceived,
        //        DateDeposited = DateTime.Now//contributor.DateDeposited,
        //    };
        //    // do we do the conversion here or on the UI? 
        //    // later on in the UI, because it is easier to update.. we can add a field for conversion 
        //    switch (contributor.Currency.ToUpper())
        //    {
        //        case "INR":
        //            newContributorRecord.ConvertedAmount = contributor.OriginalCurrencyAmount;
        //            break;
        //        case "USD":
        //            newContributorRecord.ConvertedAmount = contributor.OriginalCurrencyAmount * 60;
        //            break;
        //        case "EUR":
        //            newContributorRecord.ConvertedAmount = contributor.OriginalCurrencyAmount * 75;
        //            break;
        //        default:
        //            newContributorRecord.ConvertedAmount = contributor.OriginalCurrencyAmount * 20;
        //            break;
        //    }
        //    orgMaintEntitiesContext.Contributors.Add(newContributorRecord);
        //    orgMaintEntitiesContext.SaveChanges();

        //    BudgetHistory newBudgetHistoryRecord = new BudgetHistory
        //    {
        //        Amount = newContributorRecord.ConvertedAmount,
        //        DebitCredit = "Credit",
        //        Date = (DateTime)(newContributorRecord.DateDeposited == null ? DateTime.Now : newContributorRecord.DateDeposited)
        //    };
        //    orgMaintEntitiesContext.BudgetHistories.Add(newBudgetHistoryRecord);
        //    orgMaintEntitiesContext.SaveChanges();

        //    var query = (from budgetStatusSingle in orgMaintEntitiesContext.BudgetStatus select budgetStatusSingle).FirstOrDefault();
        //    if (query == null)
        //    {
        //        BudgetStatu budgStatu = new BudgetStatu();
        //        budgStatu.BudgetAvailable = newContributorRecord.ConvertedAmount;
        //        budgStatu.BudgetAllocated = 0;
        //        budgStatu.BudgetRequired = 20000;
        //        budgStatu.DateUpdated = DateTime.Now;
        //        orgMaintEntitiesContext.BudgetStatus.Add(budgStatu);

        //    }
        //    else
        //    {
        //        query.BudgetAvailable += newContributorRecord.ConvertedAmount;
        //        query.DateUpdated = (DateTime)(DateTime)(newContributorRecord.DateDeposited == null ? DateTime.Now : newContributorRecord.DateDeposited);
        //    }
        //    orgMaintEntitiesContext.SaveChanges();
        //    return updatedContributorList;
        //}

        public EntitySummaryContract AllocateFunds(Double fundsForAllocation)
        {

            EntitySummaryContract updatedEntityStatus = new EntitySummaryContract();
            var queryBudgetStatus = (from budgetStatusSingle in orgMaintEntitiesContext.BudgetStatus select budgetStatusSingle).FirstOrDefault();
            if (queryBudgetStatus == null)
            {
                BudgetStatu budgStatu = new BudgetStatu();
                budgStatu.BudgetAvailable = 0;
                budgStatu.BudgetAllocated = 0;
                budgStatu.DateUpdated = DateTime.Now;
                var queryentity = (from entityRequired in orgMaintEntitiesContext.EntityBudgetPriorities select entityRequired.BudgetRequired).Sum();
                budgStatu.BudgetRequired = (decimal)queryentity;
                orgMaintEntitiesContext.BudgetStatus.Add(budgStatu);

            }
            else
            {
                decimal totalFundAllocated = 0M;
                var queryentities = (from entityRequired in orgMaintEntitiesContext.EntityBudgetPriorities
                                     where entityRequired.BudgetRequired > 0
                                     orderby entityRequired.Priority, entityRequired.BudgetRequired descending
                                     select entityRequired);
                queryentities.ToList().ForEach(rec =>
                {
                    if (queryBudgetStatus.BudgetAvailable > 0)
                    {
                        decimal fundAllocated = rec.BudgetRequired;
                        if (fundAllocated >= queryBudgetStatus.BudgetAvailable)
                        {
                            fundAllocated = queryBudgetStatus.BudgetAvailable;
                            queryBudgetStatus.BudgetAvailable = 0;
                        }
                        totalFundAllocated += fundAllocated;

                        rec.BudgetRequired -= fundAllocated;
                        rec.BudgetAllocated += fundAllocated;
                        queryBudgetStatus.BudgetAvailable -= fundAllocated;
                        queryBudgetStatus.BudgetAllocated += fundAllocated;
                    }
                });
                if (totalFundAllocated > 0)
                {
                    BudgetHistory newBudgetHistoryRecord = new BudgetHistory
                    {
                        Amount = totalFundAllocated,
                        DebitCredit = "Debit",
                        Date = (DateTime)DateTime.Now
                    };
                    orgMaintEntitiesContext.BudgetHistories.Add(newBudgetHistoryRecord);
                }
                orgMaintEntitiesContext.SaveChanges();
            }
            return updatedEntityStatus;
        }
        public bool GenerateTestData()
        {
            orgMaintEntitiesContext.BudgetStatus.ToList().RemoveRange(0, orgMaintEntitiesContext.BudgetStatus.Count());
            orgMaintEntitiesContext.BudgetHistories.ToList().RemoveRange(0, orgMaintEntitiesContext.BudgetHistories.Count());
            orgMaintEntitiesContext.Contributors.ToList().RemoveRange(0, orgMaintEntitiesContext.Contributors.Count());
            return true;
        }
    }
    }
