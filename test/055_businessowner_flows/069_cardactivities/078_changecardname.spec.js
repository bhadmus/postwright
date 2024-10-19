
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('ChangeCardName', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.put('{{cardServiceUrl}}/api/v1/cards/name', {
  "headers": {
    "moniepointAgentId": "{{agentId}}"
  },
  "data": {
    "setupKey": "1432677751",
    "name": "Testing Microphone"
  }
});
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Response time is less than 250ms
  expect(responseTime).toBeLessThan(250);

});
