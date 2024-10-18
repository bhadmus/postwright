
import { test, expect } from '@playwright/test';
import { variables } from '../variables.js';

test('All users', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('https://api.escuelajs.co/api/v1/users');
  const responseTime = Date.now() - startTime;

});
