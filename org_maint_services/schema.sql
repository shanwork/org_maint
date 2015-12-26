CREATE TABLE [dbo].[BudgetHistory]
(
	[BudgetHistoryId] INT NOT NULL PRIMARY KEY IDENTITY, 
    [Amount] MONEY NOT NULL, 
    [DebitCredit] NCHAR(10) NOT NULL, 
    [Date] DATETIME NOT NULL, 
	[Principal] NVarchar(100) NULL  DEFAULT '',
    [Comments] NVARCHAR(100) NULL DEFAULT ''
)

CREATE TABLE [dbo].[BudgetStatus]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [BudgetAvailable] MONEY NOT NULL DEFAULT 0, 
    [BudgetAllocated] MONEY NOT NULL DEFAULT 0, 
    [BudgetRequired] MONEY NOT NULL DEFAULT 0,
	[DateUpdated] DateTime NOT NULL DEFAULT GetDate()
)

CREATE TABLE [dbo].[Contributor]
(
	[ContributorID] INT NOT NULL PRIMARY KEY IDENTITY, 
    [ContributorName] NVARCHAR(256) NOT NULL, 
    [OriginalCurrencyAmount] MONEY NOT NULL, 
    [Currency] NCHAR(10) NOT NULL DEFAULT 'INR', 
    [ConvertedAmount] MONEY NOT NULL, 
    [DateReceived] DATETIME NOT NULL,
    [DateDeposited] DATETIME NULL,
	[Comments] nvarchar(100) NULL Default ''
)

CREATE TABLE [dbo].[EntityFinanceSummary] (
    [EntityFinanceSummaryID] INT            IDENTITY (1, 1) NOT NULL,
    [EntityName]             NVARCHAR (256) NOT NULL,
    [Priority]               INT            NOT NULL,
    [BudgetRequired]         MONEY          NOT NULL,
    [BudgetAllocated]        MONEY          NOT NULL,
    [DateUpdated]            DATETIME       NULL,
    [Comments]               NVARCHAR (100) DEFAULT ('') NULL,
    PRIMARY KEY CLUSTERED ([EntityFinanceSummaryID] ASC)
);


CREATE TABLE [dbo].[EntityItemExpenses]
(
	[EntityItemID] INT NOT NULL PRIMARY KEY IDENTITY, 
    [EntityFinanceSummaryID] INT NOT NULL, 
    [EntityItemName] NVARCHAR(256) NOT NULL, 
    [EntityItemDetail] NVARCHAR(256) NULL, 
    [EntityItemBudgetRequired] MONEY NOT NULL DEFAULT 0.0, 
    [EntityItemBudgetAllocated] MONEY NOT NULL DEFAULT 0.0, 
    [EntityItemPriority] SMALLINT NOT NULL DEFAULT 1, 
    [EntityItemDateUpdated] SMALLDATETIME NULL, 
    [EntityItemComments] NVARCHAR(500) NULL
)
