
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('ViewCardsInPacket', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.post('{{cardServiceUrl}}/api/v1/customer-card/aggregator/get-all-customer-cards-in-packets', {
  "data": {
    "packetRef": [
      "{{packetId}}"
    ]
  }
});
  const responseTime = Date.now() - startTime;

});
