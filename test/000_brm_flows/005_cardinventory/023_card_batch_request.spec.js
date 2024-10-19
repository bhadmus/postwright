
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('Card batch request', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.post('{{cardServiceUrl}}/api/v1/brm/card-batch-requests', {
  "data": {
    "salesAgentCode": "MP|AGENT|86217D894F11C444DC0C4C85D296FE65",
    "numberOfCards": 10
  }
});
  const responseTime = Date.now() - startTime;

});
