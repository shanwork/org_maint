//------------------------------------------------------------------------------
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
    using System.Collections.Generic;
    
    public partial class EntityFinanceSummary
    {
        public int EntityFinanceSummaryID { get; set; }
        public string EntityName { get; set; }
        public int Priority { get; set; }
        public decimal BudgetRequired { get; set; }
        public decimal BudgetAllocated { get; set; }
        public Nullable<System.DateTime> DateUpdated { get; set; }
        public string Comments { get; set; }
        public decimal BudgetUsed { get; set; }
        public string EntityCategory { get; set; }
    }
}
