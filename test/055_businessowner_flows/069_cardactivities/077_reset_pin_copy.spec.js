
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('Reset Pin Copy', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.put('{{cardServiceUrl}}/api/v2/cards/reset-pin', {
  "headers": {
    "moniepointAgentId": "{{agentId}}"
  },
  "data": {
    "cardId": "{{cardId}}",
    "customerAccountNumber": "{{customerAccountNumber}}",
    "newPin": "1111"
  }
});
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Response time is less than 250ms
  expect(responseTime).toBeLessThan(250);

});
