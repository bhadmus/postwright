
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('Manage Channels', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.post('{{cardServiceUrl}}/api/v2/cards/channels/manage', {
  "data": {
    "cardId": "19499",
    "channelOperations": [
      {
        "transactionChannel": "POS",
        "block": false
      },
      {
        "transactionChannel": "WEB",
        "block": false
      },
      {
        "transactionChannel": "ATM",
        "block": false
      }
    ],
    "userPin": "1111"
  }
});
  const responseTime = Date.now() - startTime;

});
