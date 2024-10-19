
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('AcceptCardv3', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.post('{{cardServiceUrl}}/api/v3/cards/push-request/accept', {
  "headers": {
    "moniepointAgentId": "{{agentId}}",
    "banking-domain": "PERSONAL"
  },
  "data": "{\n  \"cardName\": \"RiTest\",\n  \"cardPin\": \"1111\",\n  \"cardSerial\": \"5123283979\",\n  \"deviceUniqueId\": \"testingRidwan\",\n  \"pushRequestId\": {{pushRequestId}},\n  \"businessId\": {{businessId}},\n  \"userId\": \"{{userId}}\",\n  \"userPin\": 1111\n}"
});
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Verify OK Response while activating card
  expect(response.status()).toBe(200);

  // Verify that expected response upon activation

  // Response time is less than 250ms
  expect(responseTime).toBeLessThan(250);

});
