﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace org_maint_services.Model
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class Org_MaintEntities : DbContext
    {
        public Org_MaintEntities()
            : base("name=Org_MaintEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<BudgetHistory> BudgetHistories { get; set; }
        public virtual DbSet<BudgetStatu> BudgetStatus { get; set; }
        public virtual DbSet<Contributor> Contributors { get; set; }
        public virtual DbSet<EntityBudgetPriority> EntityBudgetPriorities { get; set; }
        public virtual DbSet<EntitySummary> EntitySummaries { get; set; }
    }
}