
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('BlockCard', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.post('{{cardServiceUrl}}/api/v1/cards/block', {
  "headers": {
    "moniepointAgentId": "{{agentId}}"
  },
  "data": "{\n    \"cardId\": {{cardId}},\n    \"userPin\": 1111,\n    \"description\": \"Cypress Testing\"\n}"
});
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Response time is less than 250ms
  expect(responseTime).toBeLessThan(250);

});
