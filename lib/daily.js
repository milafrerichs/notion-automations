'use strict';
const { Client } = require("@notionhq/client");

const createDailyPage = async function() {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });
  const today = new Date();
  const result = await notion.pages.create({
    parent: { database_id: process.env.DAILY_PAGE_ID },
    properties: {
      Name: {
        title: [
          {
            type: "text",
            text: {
              content: today.toLocaleDateString(process.env.LOCALE || 'en-US'),
            },
          },
        ]
      }
    }
  });
  return result;
}

module.exports = {
  createDailyPage
}
createDailyPage();
