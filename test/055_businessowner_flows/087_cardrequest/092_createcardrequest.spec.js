
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('CreateCardRequest', async ({ request }) => {
  // Pre-request Script
  var moment = require('moment');
  
  
  

  const startTime = Date.now();

  const response = await request.post('{{cardServiceUrl}}/api/v1/cards/card-request', {
  "headers": {
    "moniepointAgentId": "{{agentId}}",
    "banking-domain": "BUSINESS"
  },
  "data": "{\n    \"cardType\": \"EXPENSE\",\n    \"userId\": {{agentId}},\n    \"cardName\": \"Personal Postman\",\n    \"businessId\": {{businessId}},\n    \"deliveryAddress\": {\n        \"lgaId\": 2,\n        \"city\": \"Eti_Osa\",\n        \"stateId\": 1,\n        \"addressLineOne\": \"Ogbor Address\",\n        \"addressLineTwo\": \"\"\n    },\n    \"deliveryTimeRangeStart\": \"{{currentdate}}\",\n    \"businessAccountNumber\": \"5000264583\",\n    \"alternateDeliveryPhoneNumber\": \"08091691075\"\n}"
});
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Response time is less than 250ms
  expect(responseTime).toBeLessThan(250);

});
