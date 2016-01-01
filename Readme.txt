
Entitied Page
- Decided approach
 New Entity Summary and Itens addition on the detail page; entity summary list page will only allow edits
 'Update' (may rename to 'Finalize') is the final update to persistence (service and/or WCF->databae). 'Add' per item does not finalize
 #### HOW TO STREAM AN ARRAY OF JSON OBJECTS TO WCF TO CRUD ####
 


Thursday Dec 31 2015
- complete entity summary - item flow client side. 
  a. Add new entity from detail screen
     - add entity service. return entityFinanceSummaryID 
	 - add entity expense items given entity finance summary id
   b. Allocate from entity summary to entity items
   c. Ordering entity items
   c. Remove add entity from summary page
- consolidate
  a. Merge Entity Finance Summary amd Entity Item Expense into one service
- catch up database interaction 
  iterative steps:
  a. Open existing entity details - retrieve a particular record
  b. Update entity summary (part database part client)
    
  c. Add entity item table
  d. CRUD operation contracts for the above (c. )
  e. Figure out how to batch send summary and items to the WCF *****