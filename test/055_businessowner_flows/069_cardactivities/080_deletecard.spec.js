
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('DeleteCard', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.delete('{{cardServiceUrl}}/api/v1/cards', {
  "headers": {
    "moniepointAgentId": "{{agentId}}",
    "business-domain": "PERSONAL"
  },
  "data": "{\n    \"cardId\": {{cardId}},\n    \"description\": \"Deleted from POSTMAN\",\n    \"userPin\": \"1111\",\n    \"customerAccountNumber\": {{customerAccountNumber}}\n}"
});
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Response time is less than 250ms
  expect(responseTime).toBeLessThan(250);

});
