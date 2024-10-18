
import { test, expect } from '@playwright/test';
import { variables } from '../variables.js';

test('Create a product', async ({ request }) => {
  // Pre-request Script
  var item_name = "Sakirat"

  const startTime = Date.now();

  const response = await request.post('https://api.escuelajs.co/api/v1/products/', {
  "data": {
    "title": "Club",
    "price": 10,
    "description": "A place where we party",
    "categoryId": 1,
    "images": [
      "https://placeimg.com/640/480/any"
    ]
  }
});
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Response time is less than 700ms
  expect(responseTime).toBeLessThan(700);

  // Response status code is 201
  expect(response.status()).toBe(201);

  // Price field is a positive number

  // Response status code is 201

  // Price field is a positive number

  // Response time is less than 700ms
  expect(responseTime).toBeLessThan(700);

  // Response schema is valid

  // Verify the required fields in the response

  // Content-Type is present

});
