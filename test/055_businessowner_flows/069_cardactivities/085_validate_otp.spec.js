
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('Validate OTP', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('undefined_url');
  const responseTime = Date.now() - startTime;

});
