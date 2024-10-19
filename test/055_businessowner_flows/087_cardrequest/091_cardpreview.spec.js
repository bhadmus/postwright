
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('CardPreview', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.post('{{logisticsServiceUrl}}/api/v1/logistics/cards/card-delivery-preview', {
  "data": {
    "localGovernmentId": 7,
    "stateId": 1
  }
});
  const responseTime = Date.now() - startTime;

});
