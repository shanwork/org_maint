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
        AdminMaintEntities adminMainEntitiesContext;
        public Org_Maint_Service()
        {
            orgMaintEntitiesContext = new Org_MaintEntities();
            #region admin
            // consider moving to a different webservice
            adminMainEntitiesContext = new AdminMaintEntities();
            #endregion

        }
        #region org budgeting and financing
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
                budgStatu.BudgetAvailable = budgetStatus.BudgetAvailable = 0;
                budgStatu.BudgetAllocated = budgetStatus.BudgetAllocated = 0;
                budgStatu.BudgetRequired = budgetStatus.BudgetRequired = 00;
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

        public BudgetStatusContract GetCachedBudgetStatus()
        {
            BudgetStatusContract budgetStatus = CacheData.Instance.GetBudgetStatus();
             
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

        public List<BudgetHistoryContract> GetCachedBudgetHistory()
        {
            List<BudgetHistoryContract> budgetHistory = CacheData.Instance.GetBudgetHistory();
            return budgetHistory;
        }

        public EntitySummaryContract GetEntityStatus()
        {
            EntitySummaryContract entityStatus = new EntitySummaryContract();
            var query = (from entitySummary in orgMaintEntitiesContext.EntitySummaries select entitySummary).FirstOrDefault();
            if (query == null)
            {
                EntitySummary newEntitySummary = new EntitySummary();
                entityStatus.TotalEntities = newEntitySummary.TotalEntities = 0;
                entityStatus.TotalEntitiesAllocable = newEntitySummary.TotalEntitiesAllocable = 00;
                entityStatus.TotalEntitiesUnallocated = newEntitySummary.TotalEntitiesUnallocated = 00;
                entityStatus.DateUpdated = newEntitySummary.DateUpdated = DateTime.Now;
                entityStatus.DateUpdatedString = newEntitySummary.DateUpdated.ToShortDateString();

                orgMaintEntitiesContext.EntitySummaries.Add(newEntitySummary);
                orgMaintEntitiesContext.SaveChanges();
            }
           
            entityStatus.TotalEntities = query.TotalEntities;
                entityStatus.TotalEntitiesAllocable = query.TotalEntitiesAllocable;
                entityStatus.TotalEntitiesAllocated = query.TotalEntitiesAllocated;
                entityStatus.TotalEntitiesUnallocated = query.TotalEntitiesUnallocated;
                entityStatus.DateUpdated = query.DateUpdated;
                entityStatus.DateUpdatedString = query.DateUpdated.ToShortDateString();

           
            return entityStatus;
        }

        public EntitySummaryContract GetEntityStatusMixed()
        {
            EntitySummaryContract entityStatus = new EntitySummaryContract();
            var query = (from entitySummary in orgMaintEntitiesContext.EntitySummaries select entitySummary).FirstOrDefault();
            if (query == null)
            {
                EntitySummary newEntitySummary = new EntitySummary();
                entityStatus.TotalEntities = newEntitySummary.TotalEntities = 0;
                entityStatus.TotalEntitiesAllocable = newEntitySummary.TotalEntitiesAllocable = 00;
                entityStatus.TotalEntitiesUnallocated = newEntitySummary.TotalEntitiesUnallocated = 00;
                entityStatus.DateUpdated = newEntitySummary.DateUpdated = DateTime.Now;
                entityStatus.DateUpdatedString = newEntitySummary.DateUpdated.ToShortDateString();

                orgMaintEntitiesContext.EntitySummaries.Add(newEntitySummary);
                orgMaintEntitiesContext.SaveChanges();
            }
            else
            {
                List<EntityFinanceSummaryContract> entityList = GetEntitySummaryList();
                decimal budgetAvailable = 0 ;
                var query2 = (from budgetStatusSingle in orgMaintEntitiesContext.BudgetStatus select budgetStatusSingle).FirstOrDefault();
                if (query2 == null)
                {
                    BudgetStatu budgStatu = new BudgetStatu();
                    budgStatu.BudgetAvailable = 0;
                    budgStatu.BudgetAllocated = 0;
                    budgStatu.BudgetRequired = 00;
                    budgStatu.DateUpdated = DateTime.Now;
                    orgMaintEntitiesContext.BudgetStatus.Add(budgStatu);

                }
                else
                    budgetAvailable = query2.BudgetAvailable;
                 foreach(EntityFinanceSummaryContract entityElement in entityList)
                {
                    query.TotalEntities += 1;
                    if (entityElement.BudgetAllocated > 0)
                        query.TotalEntitiesAllocated += 1;
                    else if (budgetAvailable > 0)
                        query.TotalEntitiesAllocable += 1;
                    budgetAvailable -= entityElement.BudgetRequired;
                }
                if (budgetAvailable < 0)
                {
                    query2.BudgetRequired = -1 * budgetAvailable;
                }

                /*
                var query = (from budgetStatusSingle in orgMaintEntitiesContext.BudgetStatus select budgetStatusSingle).FirstOrDefault();
            if (query == null)
            {
                BudgetStatu budgStatu = new BudgetStatu();
                budgStatu.BudgetAvailable = newContributorRecord.ConvertedAmount;
                budgStatu.BudgetAllocated = 0;
                budgStatu.BudgetRequired = 00;
                budgStatu.DateUpdated = DateTime.Now;
                orgMaintEntitiesContext.BudgetStatus.Add(budgStatu);

            }
            else
            {
                query.BudgetAvailable += newContributorRecord.ConvertedAmount;
                query.DateUpdated = (DateTime)(DateTime)(newContributorRecord.DateDeposited == null ? DateTime.Now : newContributorRecord.DateDeposited);
            }
                 entityStatus.TotalEntities = 0;
              entityStatus.TotalEntitiesAllocable = 0;
              entityStatus.TotalEntitiesAllocated = 0;
              entityStatus.TotalEntitiesUnallocated = 0;
              var budgetStatus = BudgetStatusService.getBudgetStatus();
              var budgetAvailable = budgetStatus.BudgetAvailable;
              var totalBudgetRequired = 0;
              for (i = 0; i < entityList.length; i++) {
                  entityStatus.TotalEntities += 1;
                  if (entityList[i].BudgetAllocated > 0)
                      entityStatus.TotalEntitiesAllocated += 1;
                  else if (budgetAvailable > 0)
                      entityStatus.TotalEntitiesAllocable += 1;
                  budgetAvailable -= entityList[i].BudgetRequired;


              }
              if (budgetAvailable < 0) {
                  budgetStatus.BudgetRequired = -1 * budgetAvailable;
                  BudgetStatusService.updateBudgetStatus(budgetStatus);
              }
              // alert(entityStatus.TotalEntities); alert(entityStatus.TotalEntitiesAllocated); alert(entityStatus.TotalEntitiesAllocable);
              if (entityStatus.TotalEntities > (entityStatus.TotalEntitiesAllocated + entityStatus.TotalEntitiesAllocable))
                  entityStatus.TotalEntitiesUnallocated = entityStatus.TotalEntities - (entityStatus.TotalEntitiesAllocated + entityStatus.TotalEntitiesAllocable);
              return entityStatus;
                */
                entityStatus.TotalEntities = query.TotalEntities;
                entityStatus.TotalEntities = query.TotalEntitiesAllocable;
                entityStatus.TotalEntitiesAllocated = query.TotalEntitiesAllocated;
                entityStatus.TotalEntitiesUnallocated = query.TotalEntitiesUnallocated;
                entityStatus.DateUpdated = query.DateUpdated;
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
                        ContributorID = rec.ContributorID,
                        ConvertedAmount = rec.ConvertedAmount,
                        ContributorName = rec.ContributorName,
                        OriginalCurrencyAmount = rec.OriginalCurrencyAmount,
                        Currency = rec.Currency,
                        DateReceived = rec.DateReceived,
                        DateReceivedString = rec.DateReceived.ToShortDateString(),
                        DateDeposited = rec.DateDeposited,
                        DateDepositedString = rec.DateDeposited != null ? ((DateTime)rec.DateDeposited).ToShortDateString() : "",
                        Comments = rec.Comments
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
                        EntityBudgetPriorityID = rec.EntityBudgetPriorityID,
                        EntityName = rec.EntityName, 
                        BudgetAllocated = rec.BudgetAllocated,
                        BudgetRequired = rec.BudgetRequired,
                        Priority = rec.Priority,
                        DateUpdated = rec.DateUpdated,
                        DateUpdatedString = rec.DateUpdated != null ? ((DateTime)rec.DateUpdated).ToShortDateString() : "",
                        Comments = rec.Comments
                    }
                    );
            });
            return entityBudgetPriorityList;
        }
        public EntityFinanceSummaryContract GetEntitySummary(string EntityFinanceSummaryID)
        {
            int entityFinanceSummaryId = Convert.ToInt32(EntityFinanceSummaryID);
           EntityFinanceSummaryContract entity= new EntityFinanceSummaryContract();
            var query = (from entityFinanceSummariesElement in orgMaintEntitiesContext.EntityFinanceSummaries
                         where entityFinanceSummariesElement.EntityFinanceSummaryID == entityFinanceSummaryId
                         select entityFinanceSummariesElement).FirstOrDefault(); ;
            if (query != null)
            {
                entity.EntityFinanceSummaryID = query.EntityFinanceSummaryID;
                entity.EntityName = query.EntityName;
                entity.EntityCategory = query.EntityCategory;
                entity.Comments = query.Comments;
                entity.BudgetAllocated = query.BudgetAllocated;
                entity.BudgetRequired = query.BudgetRequired;
                entity.BudgetUsed = query.BudgetUsed;
                entity.Priority = query.Priority;


            }
            return entity ;
        }
        public List<EntityItemExpensesContract> GetEntityItems(string EntityFinanceSummaryID)
        {
            int entityFinanceSummaryId = Convert.ToInt32(EntityFinanceSummaryID);
            List<EntityItemExpensesContract> entityItems = new List<EntityItemExpensesContract>();
            var query = (from entityItemElement in orgMaintEntitiesContext.EntityItemExpenses
                         where entityItemElement.EntityFinanceSummaryID == entityFinanceSummaryId
                         select entityItemElement).Distinct(); ;
            if (query != null)
            {
                query.ToList().ForEach(rec =>
                {
                    entityItems.Add(
                        new EntityItemExpensesContract
                        {
                            EntityFinanceSummaryID = rec.EntityFinanceSummaryID,
                            EntityItemID = rec.EntityItemID,
                            EntityItemBudgetAllocated = rec.EntityItemBudgetAllocated,
                            EntityItemBudgetRequired = rec.EntityItemBudgetRequired,
                            EntityItemName = rec.EntityItemName,
                            EntityItemDetail = rec.EntityItemDetail,
                            EntityItemComments = rec.EntityItemComments,
                            EntityItemPriority = rec.EntityItemPriority,
                            EntityItemDateUpdated = rec.EntityItemDateUpdated
                            
                        }
                        );
                });


            }
            return entityItems;
        }
        public List<EntityFinanceSummaryContract> GetEntitySummaryList()
        {
            List<EntityFinanceSummaryContract> entityFinanceSummariesList = new List<EntityFinanceSummaryContract>();
            var query = (from entityFinanceSummariesElement in orgMaintEntitiesContext.EntityFinanceSummaries select entityFinanceSummariesElement).Distinct();
            query.ToList().ForEach(rec =>
            {
                entityFinanceSummariesList.Add(
                    new EntityFinanceSummaryContract
                    {
                        EntityFinanceSummaryID = rec.EntityFinanceSummaryID,
                        EntityName = rec.EntityName,
                        EntityCategory = rec.EntityCategory,
                        BudgetAllocated = rec.BudgetAllocated,
                        BudgetRequired = rec.BudgetRequired,
                        BudgetUsed = rec.BudgetUsed,
                        Priority = rec.Priority,
                        DateUpdated = rec.DateUpdated,
                        DateUpdatedString = rec.DateUpdated != null ? ((DateTime)rec.DateUpdated).ToShortDateString() : "",
                        Comments = rec.Comments
                    }
                    );
            });
            return entityFinanceSummariesList;
        }
        public bool AddContributor(Contributor contributor)
        {
            List<ContributorContract> updatedContributorList = new List<ContributorContract>();
            Contributor newContributorRecord = new Contributor
            {
                ContributorID = contributor.ContributorID,
                OriginalCurrencyAmount = contributor.OriginalCurrencyAmount,
                ContributorName = contributor.ContributorName,
                Currency = contributor.Currency,
                DateReceived = DateTime.Now,// contributor.DateReceived,
                DateDeposited = DateTime.Now,//contributor.DateDeposited,
                Comments = contributor.Comments
            };
            // do we do the conversion here or on the UI? 
            // later on in the UI, because it is easier to update.. we can add a field for conversion 
            switch (contributor.Currency.ToUpper())
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
                Date = (DateTime)(newContributorRecord.DateDeposited == null ? DateTime.Now : newContributorRecord.DateDeposited),
                Comments = newContributorRecord.Comments,
                Principal = newContributorRecord.ContributorName
            };
            orgMaintEntitiesContext.BudgetHistories.Add(newBudgetHistoryRecord);
            orgMaintEntitiesContext.SaveChanges();

            var query = (from budgetStatusSingle in orgMaintEntitiesContext.BudgetStatus select budgetStatusSingle).FirstOrDefault();
            if (query == null)
            {
                BudgetStatu budgStatu = new BudgetStatu();
                budgStatu.BudgetAvailable = newContributorRecord.ConvertedAmount;
                budgStatu.BudgetAllocated = 0;
                budgStatu.BudgetRequired = 00;
                budgStatu.DateUpdated = DateTime.Now;
                orgMaintEntitiesContext.BudgetStatus.Add(budgStatu);

            }
            else
            {
                query.BudgetAvailable += newContributorRecord.ConvertedAmount;
                query.DateUpdated = (DateTime)(DateTime)(newContributorRecord.DateDeposited == null ? DateTime.Now : newContributorRecord.DateDeposited);
            }
            orgMaintEntitiesContext.SaveChanges();
            updateEntityStatus();
            return true;
        }

       
        public int UpdateEntitySummary(EntityFinanceSummary entity)
        {
            int newEntityFinanceSummaryID = -1;
            decimal budgetRequired = 0;
            EntityFinanceSummary updateEntityRecord = null;
             if (entity.EntityFinanceSummaryID == -1)
            {
                updateEntityRecord = new EntityFinanceSummary
                {
                    EntityFinanceSummaryID = entity.EntityFinanceSummaryID,
                    EntityName = entity.EntityName,
                    BudgetAllocated = entity.BudgetAllocated,
                    BudgetRequired = entity.BudgetRequired,
                    BudgetUsed = entity.BudgetUsed,
                    EntityCategory = entity.EntityCategory,
                    Priority = entity.Priority,
                    DateUpdated = DateTime.Now,
                    Comments = entity.Comments
                };

                orgMaintEntitiesContext.EntityFinanceSummaries.Add(updateEntityRecord);
                orgMaintEntitiesContext.SaveChanges();
                newEntityFinanceSummaryID = updateEntityRecord.EntityFinanceSummaryID;

                budgetRequired = entity.BudgetRequired;
            }
            else
            {
          //      updateEntityRecord = GetEntitySummary(entity.EntityFinanceSummaryID.ToString());
                var query = (from entityFinanceSummariesElement in orgMaintEntitiesContext.EntityFinanceSummaries
                             where entityFinanceSummariesElement.EntityFinanceSummaryID == entity.EntityFinanceSummaryID
                             select entityFinanceSummariesElement).FirstOrDefault(); ;
                if (query != null)
                {
                    query.EntityName = entity.EntityName;
                    query.EntityCategory = entity.EntityCategory;
                    query.Comments = entity.Comments;
                    query.BudgetAllocated = entity.BudgetAllocated;
                    query.BudgetRequired = entity.BudgetRequired;
                    query.BudgetUsed = entity.BudgetUsed;
                    query.Priority = entity.Priority;
                    query.DateUpdated = DateTime.Now;
                    orgMaintEntitiesContext.SaveChanges();
                    newEntityFinanceSummaryID = query.EntityFinanceSummaryID;

                }

            }
            
            updateEntityStatus(); //also updates budget status
             return newEntityFinanceSummaryID;
        }

        public int UpdateEntityItem(EntityItemExpens entityItem)
        {
            int newEntityItemID = 0;
            if (entityItem.EntityItemID == -1)
                newEntityItemID = orgMaintEntitiesContext.EntityItemExpenses.Add(entityItem).EntityItemID;
            else
            {
                var query = (from entityItemElement in orgMaintEntitiesContext.EntityItemExpenses
                             where entityItemElement.EntityItemID == entityItem.EntityItemID
                             select entityItemElement).FirstOrDefault(); ;
                if (query != null)
                {
                    query.EntityItemName = entityItem.EntityItemName;
                    query.EntityItemBudgetAllocated = entityItem.EntityItemBudgetAllocated;
                    query.EntityItemBudgetRequired = entityItem.EntityItemBudgetRequired;
                    query.EntityFinanceSummaryID = entityItem.EntityFinanceSummaryID;
                    query.EntityItemComments = entityItem.EntityItemComments;
                    query.EntityItemDateUpdated = DateTime.Now ;
                    query.EntityItemDetail = entityItem.EntityItemDetail ;
                    query.EntityItemPriority = entityItem.EntityItemPriority;
                    newEntityItemID = query.EntityFinanceSummaryID;

                }
            }
       
        orgMaintEntitiesContext.SaveChanges();
            return newEntityItemID;
        }
        public bool UpdateEntity(EntityFinanceSummary entity, List<EntityItemExpens> entityItemExpenses )
        {
            if (entity.EntityFinanceSummaryID == -1)
            {
                int EntityFinanceSummaryID = UpdateEntitySummary(entity);
                foreach(EntityItemExpens entityItemExpense in entityItemExpenses)
                {
                    entityItemExpense.EntityFinanceSummaryID = EntityFinanceSummaryID;
                    orgMaintEntitiesContext.EntityItemExpenses.Add(entityItemExpense);
                }

            }
            orgMaintEntitiesContext.SaveChanges();
            return true;
        }
        static bool onOff = true;
        public bool updateEntityStatus()
        {
            EntitySummaryContract entityStatus = new EntitySummaryContract();
            var query = (from entitySummary in orgMaintEntitiesContext.EntitySummaries select entitySummary).FirstOrDefault();
            if (query == null)
            {
                EntitySummary newEntitySummary = new EntitySummary();
                entityStatus.TotalEntities = newEntitySummary.TotalEntities = 0;
                entityStatus.TotalEntitiesAllocable = newEntitySummary.TotalEntitiesAllocable = 00;
                entityStatus.TotalEntitiesUnallocated = newEntitySummary.TotalEntitiesUnallocated = 00;
                entityStatus.DateUpdated = newEntitySummary.DateUpdated = DateTime.Now;
                entityStatus.DateUpdatedString = newEntitySummary.DateUpdated.ToShortDateString();

                orgMaintEntitiesContext.EntitySummaries.Add(newEntitySummary);
                orgMaintEntitiesContext.SaveChanges();
                query = newEntitySummary;
            }
            query.TotalEntities = 0;
            query.TotalEntitiesAllocable =  00;
            query.TotalEntitiesAllocated = 0;
            query.TotalEntitiesUnallocated =   00;
            query.DateUpdated =  DateTime.Now;
            
            List<EntityFinanceSummaryContract> entityList = GetEntitySummaryList();
                decimal budgetAvailable = 0;
                var query2 = (from budgetStatusSingle in orgMaintEntitiesContext.BudgetStatus select budgetStatusSingle).FirstOrDefault();
                if (query2 == null)
                {
                    BudgetStatu budgStatu = new BudgetStatu();
                    budgStatu.BudgetAvailable = 0;
                    budgStatu.BudgetAllocated = 0;
                    budgStatu.BudgetRequired = 00;
                    budgStatu.DateUpdated = DateTime.Now;
                    orgMaintEntitiesContext.BudgetStatus.Add(budgStatu);

                }
                else
                    budgetAvailable = query2.BudgetAvailable;
                foreach (EntityFinanceSummaryContract entityElement in entityList)
                {
                    query.TotalEntities += 1;
                    if (entityElement.BudgetAllocated > 0)
                        query.TotalEntitiesAllocated += 1;
                    else if (budgetAvailable > 0)
                        query.TotalEntitiesAllocable += 1;
                    budgetAvailable -= entityElement.BudgetRequired;
                }
                if (budgetAvailable < 0)
                {
                    query2.BudgetRequired = -1 * budgetAvailable;
                }
            query.TotalEntitiesUnallocated = query.TotalEntities - (query.TotalEntitiesAllocable + query.TotalEntitiesAllocated);
                orgMaintEntitiesContext.SaveChanges();

           
            return true;
        }
        public bool AllocateFunds(Double fundsForAllocation)
        {

            EntitySummaryContract updatedEntityStatus = new EntitySummaryContract();
            var queryBudgetStatus = (from budgetStatusSingle in orgMaintEntitiesContext.BudgetStatus select budgetStatusSingle).FirstOrDefault();
            if (queryBudgetStatus == null)
            {
                BudgetStatu budgStatu = new BudgetStatu();
                budgStatu.BudgetAvailable = 0;
                budgStatu.BudgetAllocated = 0;
                budgStatu.DateUpdated = DateTime.Now;
                var queryentity = (from entityRequired in orgMaintEntitiesContext.EntityFinanceSummaries select entityRequired.BudgetRequired).Sum();
                budgStatu.BudgetRequired = (decimal)queryentity;
                orgMaintEntitiesContext.BudgetStatus.Add(budgStatu);

            }
            else
            {
                decimal totalFundAllocated = 0M;
                var queryentities = (from entityRequired in orgMaintEntitiesContext.EntityFinanceSummaries
                                     where entityRequired.BudgetRequired > 0
                                     orderby entityRequired.Priority, entityRequired.BudgetRequired descending
                                     select entityRequired);
                int entitiesAllocated = 0;
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
                        entitiesAllocated++;
                    }
                });
                if (totalFundAllocated > 0)
                {
                    BudgetHistory newBudgetHistoryRecord = new BudgetHistory
                    {
                        Amount = totalFundAllocated,
                        DebitCredit = "Debit",
                        Date = (DateTime)DateTime.Now,
                        Comments = string.Format("Number Allocated={0}")
                    };
                    orgMaintEntitiesContext.BudgetHistories.Add(newBudgetHistoryRecord);
                }
                orgMaintEntitiesContext.SaveChanges();
            }
            return true;
        }
       
        // corerect one
        public bool AllocateFunds2(AllocateWrapper fundsForAllocationBox)
        {


            EntitySummaryContract updatedEntityStatus = new EntitySummaryContract();
            var queryBudgetStatus = (from budgetStatusSingle in orgMaintEntitiesContext.BudgetStatus select budgetStatusSingle).FirstOrDefault();
            if (queryBudgetStatus == null)
            {
                BudgetStatu budgStatu = new BudgetStatu();
                budgStatu.BudgetAvailable = 0;
                budgStatu.BudgetAllocated = 0;
                budgStatu.DateUpdated = DateTime.Now;
                var queryentity = (from entityRequired in orgMaintEntitiesContext.EntityFinanceSummaries select entityRequired.BudgetRequired).Sum();
                budgStatu.BudgetRequired = (decimal)queryentity;
                orgMaintEntitiesContext.BudgetStatus.Add(budgStatu);

            }
            else
            {
                decimal totalFundAllocated = 0M;
                var queryentities = (from entityRequired in orgMaintEntitiesContext.EntityFinanceSummaries
                                     where entityRequired.BudgetRequired > 0
                                     orderby entityRequired.Priority, entityRequired.BudgetRequired descending
                                     select entityRequired);
                int entitiesAllocated = 0;
                queryentities.ToList().ForEach(rec =>
                {
                    if (queryBudgetStatus.BudgetAvailable > 0)
                    {
                        decimal fundAllocated = rec.BudgetRequired;
                        if (fundAllocated >= queryBudgetStatus.BudgetAvailable)
                        {
                            fundAllocated = queryBudgetStatus.BudgetAvailable;
                            //     queryBudgetStatus.BudgetAvailable = 0;
                        }
                        totalFundAllocated += fundAllocated;

                        rec.BudgetRequired -= fundAllocated;
                        rec.BudgetAllocated += fundAllocated;
                        queryBudgetStatus.BudgetAvailable -= fundAllocated;
                        queryBudgetStatus.BudgetAllocated += fundAllocated;
                        queryBudgetStatus.BudgetRequired -= fundAllocated;
                        entitiesAllocated++;
                        BudgetHistory newBudgetHistoryRecord = new BudgetHistory
                        {
                            Amount = totalFundAllocated,
                            DebitCredit = "Debit",
                            Date = (DateTime)DateTime.Now,
                            Principal = rec.EntityName,
                            Comments = string.Format("Priority {0},index {0}", rec.Priority, entitiesAllocated)
                        };
                        orgMaintEntitiesContext.BudgetHistories.Add(newBudgetHistoryRecord);
                    }
                });
                //if (totalFundAllocated > 0)
                //{
                //    BudgetHistory newBudgetHistoryRecord = new BudgetHistory
                //    {
                //        Amount = totalFundAllocated,
                //        DebitCredit = "Debit",
                //        Date = (DateTime)DateTime.Now,
                //        Comments = string.Format("Number Allocated={0}")
                //    };
                //    orgMaintEntitiesContext.BudgetHistories.Add(newBudgetHistoryRecord);
                //}
                orgMaintEntitiesContext.SaveChanges();
            }
            updateEntityStatus();
            return true;
        }
        public bool AllocateFunds3()
        {
            BudgetHistory newBudgetHistoryRecordTest = new BudgetHistory
            {
                Amount = 100,
                DebitCredit = "Debit",
                Date = (DateTime)DateTime.Now,
                Comments = string.Format("Number Allocated=1")
            };
            orgMaintEntitiesContext.BudgetHistories.Add(newBudgetHistoryRecordTest);
            orgMaintEntitiesContext.SaveChanges();
            return true;
        }
        public bool GenerateTestData()
        {
            orgMaintEntitiesContext.BudgetStatus.ToList().RemoveRange(0, orgMaintEntitiesContext.BudgetStatus.Count());
            orgMaintEntitiesContext.BudgetHistories.ToList().RemoveRange(0, orgMaintEntitiesContext.BudgetHistories.Count());
            orgMaintEntitiesContext.Contributors.ToList().RemoveRange(0, orgMaintEntitiesContext.Contributors.Count());
            return true;
        }
        #region private helper functions
        void updateBudgetStatus(decimal budgetRequired = 0, decimal budgetAvailable = 0)
        {

            var query = (from budgetStatusSingle in orgMaintEntitiesContext.BudgetStatus select budgetStatusSingle).FirstOrDefault();
            if (query == null)
            {
                BudgetStatu budgStatu = new BudgetStatu();
                budgStatu.BudgetAvailable = 0;
                budgStatu.BudgetAllocated = 0;
                budgStatu.BudgetRequired = budgetRequired;
                budgStatu.DateUpdated = DateTime.Now;
                orgMaintEntitiesContext.BudgetStatus.Add(budgStatu);

            }
            else
            {
                query.BudgetRequired += budgetRequired;
                query.DateUpdated = DateTime.Now;
            }
            orgMaintEntitiesContext.SaveChanges();

        }

        #endregion
    }
    #endregion

}
