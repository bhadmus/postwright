
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('ViewCardStatus', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v1/business-owners/cards/requests/status', {
  "headers": {
    "moniepointAgentId": "{{agentId}}"
  }
});
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Response status code is 502

  // Content array is present and contains at least one element

  // Response status code is 200

  // Response body has the key 'hasPendingCardPush' with a boolean value

  // Response body has the key 'hasCardRequest' with a boolean value

  // Content-Type header is application/json

  // Response body is a valid JSON object

});
