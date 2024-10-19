
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('TakeOver Request', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.post('{{logisticsServiceUrl}}/api/v1/logistics/cards/task/reassign/brm/11', {
  "data": {
    "deliveryCode": "2654",
    "newDeliveryMode": "BUSINESS_RELATIONSHIP_MANAGER",
    "newLgaId": 1,
    "newBrmCode": "MP|AGGREGATOR|8E1B390D48705C8F1BE52800D6DBDBCA",
    "newAggregatorId": 304
  }
});
  const responseTime = Date.now() - startTime;

});
