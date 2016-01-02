
Known issues
1. Currency is hard codes 
- Assumed all processing is in INR
- Taking INR - hard code 1:1. USD hard code 1:60, EUR(??) 1:75, anything else is 1:15
- configure base currency, see item 2

2. Add Settings page 
 - connecting to web service

3. Thinking about a second WCF service which uses server side singleton abstraction layer
   - This is like a server side cache the static singleton will contain all records at application level
   - iteratively have no EF/dB connectivity, then add it, then synchronously update a data base.

 4. Entity summary
 - Allocate fund from entity summary to items !!!DONE
 - bug - when adding an entity and updating it without adding an item, errors

 5. Cleanup and Merge
 - Merge EntityFinanceSummary and EntityItemExpense controllers and services
 - Remove EntityBudgetPriority elements and references

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