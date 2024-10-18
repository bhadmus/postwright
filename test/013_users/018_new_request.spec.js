
import { test, expect } from '@playwright/test';
import { variables } from '../variables.js';

test('New Request', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.post('https://api.escuelajs.co/api/v1/users/is-available', {
  "data": {
    "email": "john@mail.com"
  }
});
  const responseTime = Date.now() - startTime;

});
