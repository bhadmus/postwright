
import { test, expect } from '@playwright/test';
import { variables } from '../variables.js';

test('Create category', async ({ request }) => {
  // Pre-request Script
  
  

  const startTime = Date.now();

  const response = await request.post('https://api.escuelajs.co/api/v1/categories', {
  "data": {
    "name": "Electronics",
    "image": "https://placeimg.com/640/480/any"
  }
});
  const responseTime = Date.now() - startTime;

});
