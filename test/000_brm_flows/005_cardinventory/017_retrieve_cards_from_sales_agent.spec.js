
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('Retrieve cards from sales agent', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.post('{{cardServiceUrl}}/api/v1/card-retrieval-batch/collect', {
  "data": {
    "nuban": "{{customerAccountNumber}}",
    "collectionFlow": "AGGREGATOR_COLLECTS_FROM_SALES_AGENT",
    "numberOfCards": 9
  }
});
  const responseTime = Date.now() - startTime;

});
