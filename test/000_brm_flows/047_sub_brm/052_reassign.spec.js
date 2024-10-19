
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('REASSIGN', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.post('https://card-features.mab.development.moniepoint.com/api/v1/brm/cards/tasks/871/reassign', {
  "data": {
    "deliveryCode": "5497",
    "newDeliveryMode": "BUSINESS_RELATIONSHIP_MANAGER"
  }
});
  const responseTime = Date.now() - startTime;

});
