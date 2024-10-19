
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('UnblockCardOTP', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v2/cards/otp?OTPType=UNBLOCK_CARD', {
  "headers": {
    "moniepointAgentId": "{{agentId}}"
  }
});
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Response time is less than 250ms
  expect(responseTime).toBeLessThan(250);

});
