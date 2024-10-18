
import { test, expect } from '@playwright/test';
import { variables } from '../variables.js';

test('Update user', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.put('https://api.escuelajs.co/api/v1/users/9', {
  "data": {
    "email": "johnyman@gmail.com",
    "name": "john"
  }
});
  const responseTime = Date.now() - startTime;

});
