
import { test, expect } from '@playwright/test';
import { variables } from '../variables.js';

test('All categories', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('https://api.escuelajs.co/api/v1/categories');
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Response time is less than 700ms
  expect(responseTime).toBeLessThan(700);

  // Response status code is 200
  expect(response.status()).toBe(200);

  // Response has the required fields - id, name, image, creationAt, and updatedAt

  // Image URL is valid and accessible

  // Creation and update timestamps are in a valid date format

});
