
import { test, expect } from '@playwright/test';
import { variables } from '../variables.js';

test('All products by category', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('https://api.escuelajs.co/api/v1/categories/1/products');
  const responseTime = Date.now() - startTime;

});
