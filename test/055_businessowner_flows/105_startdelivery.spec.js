
import { test, expect } from '@playwright/test';
import { variables } from '../variables.js';

test('StartDelivery', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.post('https://logistics.staging.teamapt.com/api/v1/logistics/cards/delivery-alert', {
  "data": {
    "riderName": "Ridwan",
    "riderPhone": "08091691075",
    "hasArrived": true,
    "taskIds": [
      227
    ]
  }
});
  const responseTime = Date.now() - startTime;

});
