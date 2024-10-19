
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('BusinessOwner', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v1/cards/business-owner', {
  "headers": {
    "moniepointAgentId": "{{agentId}}",
    "banking-domain": "BUSINESS"
  },
  "data": ""
});
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Response status code is 500

  // Validate the customerAccountCard object

  // Date format for dateActivated and dateIssued is valid

  // Response Content-Type header is application/json

  // BlockReason is either empty or contains a valid reason

  // Response status code is 403

  // Response Content-Type header is text/html

});
