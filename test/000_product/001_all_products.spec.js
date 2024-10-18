
import { test, expect } from '@playwright/test';
import { variables } from '../variables.js';

test('All products', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('https://api.escuelajs.co/api/v1/products');
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Response time is less than 700ms
  expect(responseTime).toBeLessThan(700);

  // Response status code is 200
  expect(response.status()).toBe(200);

  // Response has an array with at least one product

  // Each product in the array has the required fields

  // Each image in the 'images' array is a non-empty string

  // Verify that the 'category' object is present in each product and contains expected fields

});
