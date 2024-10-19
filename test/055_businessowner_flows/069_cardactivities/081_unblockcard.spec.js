
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('UnblockCard', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.post('{{cardServiceUrl}}/api/v2/cards/unblock', {
  "headers": {
    "moniepointAgentId": "{{agentId}}"
  },
  "data": "{\n    \"cardId\": {{cardId}},\n    \"userPin\": 1111,\n    \"description\" : \"I unblock am nani\",\n    \"otp\": 123456\n}"
});
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Response time is less than 250ms
  expect(responseTime).toBeLessThan(250);

});
