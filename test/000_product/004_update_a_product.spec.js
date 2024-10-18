
import { test, expect } from '@playwright/test';
import { variables } from '../variables.js';

test('Update a product', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.put('https://api.escuelajs.co/api/v1/products/{{productId}}', {
  "data": {
    "title": "Club",
    "price": 100
  }
});
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Response time is less than 200ms
  expect(responseTime).toBeLessThan(200);

});
