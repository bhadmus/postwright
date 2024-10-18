
import { test, expect } from '@playwright/test';
import { variables } from '../variables.js';

test('single product', async ({ request }) => {
  // Pre-request Script
  console.log('I am learning API testing')

  const startTime = Date.now();

  const response = await request.get('https://api.escuelajs.co/api/v1/products/33');
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Response time is less than 700ms
  expect(responseTime).toBeLessThan(700);

  // Response status code is 200
  expect(response.status()).toBe(200);

  // Content-Type header is application/json

  // Validate the product object

  // Price is a non-negative number

  // Images array is present and contains at least one element

});
