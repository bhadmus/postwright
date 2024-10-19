
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('ActivateCardv3', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.post('{{cardServiceUrl}}/api/v3/cards/activate', {
  "headers": {
    "moniepointAgentId": "{{agentId}}",
    "banking-domain": "BUSINESS"
  },
  "data": {
    "cardSerial": "1432677751",
    "cardPin": "1111",
    "userPin": "1111",
    "cardDeliveryTaskId": "{{cardDeliveryTaskId}}"
  }
});
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Verify OK Response while activating card
  expect(response.status()).toBe(200);

  // Verify that expected response upon activation

  // Response time is less than 250ms
  expect(responseTime).toBeLessThan(250);

});
