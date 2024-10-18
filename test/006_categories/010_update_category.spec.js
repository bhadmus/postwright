
import { test, expect } from '@playwright/test';
import { variables } from '../variables.js';

test('Update category', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.put('https://api.escuelajs.co/api/v1/categories/3', {
  "data": {
    "name": "Love is light"
  }
});
  const responseTime = Date.now() - startTime;

});
