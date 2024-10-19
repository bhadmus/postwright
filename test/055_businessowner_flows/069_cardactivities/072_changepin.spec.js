
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('ChangePIN', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.put('{{cardServiceUrl}}/api/v2/cards/pin', {
  "headers": {
    "moniepointAgentId": "{{agentId}}"
  },
  "data": "{\n    \"cardId\": {{cardId}},\n    \"newPin\": \"1112\",\n    \"oldPin\": \"1111\",\n    \"businessAccountNumber\": \"{{customerAccountNumber}}\",\n    \"userPin\":1111\n}"
});
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Response time is less than 250ms
  expect(responseTime).toBeLessThan(250);

});
