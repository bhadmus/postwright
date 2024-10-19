
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('Get BRM of Sub BRM', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('undefined_url');
  const responseTime = Date.now() - startTime;

});
