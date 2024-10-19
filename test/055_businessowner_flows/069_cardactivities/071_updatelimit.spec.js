
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('UpdateLimit', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.put('{{cardServiceUrl}}/api/v2/cards/limit', {
  "headers": {
    "moniepointAgentId": "{{agentId}}"
  },
  "data": "{\n    \"cardId\": {{cardId}},\n    \"setupkey\": \"{{setUpKey}}\",\n    \"limits\": [\n        {\n            \"limitType\": \"DAILY\",\n            \"limitValue\": 10000\n        },\n        {\n            \"limitType\": \"WEEKLY\",\n            \"limitValue\": 400000\n        },\n        {\n            \"limitType\": \"MONTHLY\",\n            \"limitValue\": 4000000\n        }\n    ]\n}"
});
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Response time is less than 250ms
  expect(responseTime).toBeLessThan(250);

});
