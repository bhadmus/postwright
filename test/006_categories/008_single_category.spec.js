
import { test, expect } from '@playwright/test';
import { variables } from '../variables.js';

test('Single category', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('https://api.escuelajs.co/api/v1/categories/3');
  const responseTime = Date.now() - startTime;

});
