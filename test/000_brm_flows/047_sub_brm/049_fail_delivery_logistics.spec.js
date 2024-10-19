
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('FAIL DELIVERY Logistics', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.post('{{cardServiceUrl}}/api/v1/brm/cards/tasks/922/delivery/fail', {
  "data": {
    "commentId": 1,
    "additionalComment": "Customer not reachable at the provided contact number"
  }
});
  const responseTime = Date.now() - startTime;

});
