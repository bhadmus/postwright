
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('Get Card Request Preview', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v1/cards/delivery-cost?deliveryService=MONIEPOINT_LOGISTICS&lgaId=2', {
  "headers": {
    "moniepointAgentId": "{{agentId}}",
    "banking-domain": "BUSINESS"
  },
  "data": ""
});
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

});
