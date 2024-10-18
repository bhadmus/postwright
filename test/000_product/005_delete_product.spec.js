
import { test, expect } from '@playwright/test';
import { variables } from '../variables.js';

test('Delete Product', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.delete('https://api.escuelajs.co/api/v1/products/{{productId}}');
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Response time is less than 700ms
  expect(responseTime).toBeLessThan(700);

  // Response status code is 200
  expect(response.status()).toBe(200);

  // Response content type is text/html

  // Response body is a boolean value

});
