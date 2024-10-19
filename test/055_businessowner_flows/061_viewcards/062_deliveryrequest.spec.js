
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('DeliveryRequest', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v1/cards/delivery-requests', {
  "headers": {
    "moniepointAgentId": "{{agentId}}",
    "banking-domain": "BUSINESS"
  }
});
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Empty delivery request check

  // Schema is valid

});
