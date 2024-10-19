
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('Confirm Delivery', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.post('{{cardServiceUrl}}/api/v1/card-delivery-requests/confirm', {
  "data": {
    "taskId": "{{cardDeliveryTaskId}}",
    "deliveryCode": "{{cardd}}",
    "deliveryPartnerUserId": "21",
    "deliveryMode": "LOGISTICS_PARTNER"
  }
});
  const responseTime = Date.now() - startTime;

});
