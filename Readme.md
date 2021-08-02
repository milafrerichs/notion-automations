# Notion Automations

Daily automation(s) I run with the Notion-API and AWS Lambda.

## Configuration

Configuration is done via env variables you should define the following

|ENV Name|Description|
--- | --- | ---
|NOTION_SECRET|Your Notion dev token|
|DAILY_PAGE_ID|The page id for the daily creation of pages|
|LOCALE|the locale you want your dates to be in, e.g. `en-US`|
