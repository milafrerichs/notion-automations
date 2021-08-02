'use strict';
const { createDailyPage } = require('./lib/daily');

const daily = async (event) => {
  const result = await createDailyPage();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        result,
      },
      null,
      2
    ),
  };
};

module.exports = {
  daily
}
