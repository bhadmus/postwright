
import { test, expect } from '@playwright/test';
import { variables } from '../variables.js';

test('Single user', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('https://api.escuelajs.co/api/v1/users/1');
  const responseTime = Date.now() - startTime;

});
