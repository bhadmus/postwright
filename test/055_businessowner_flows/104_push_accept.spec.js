
import { test, expect } from '@playwright/test';
import { variables } from '../variables.js';

test('Push_Accept', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.post('{{cardServiceUrl}}/api/v1/cards/push-request/accept', {
  "headers": {
    "banking-domain": "BUSINESS"
  },
  "data": {
    "pushedCardRequestId": "476",
    "userId": "6295",
    "cardName": "Testing Accept"
  }
});
  const responseTime = Date.now() - startTime;

});
