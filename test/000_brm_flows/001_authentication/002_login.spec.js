
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('Login', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.post('{{frontOfficeUrl}}/api/v1/auth/tokens', {
  "headers": {
    "client-type": "WEB",
    "client-version": "0.0.0"
  },
  "data": {
    "username": "ridwan_aggregator@mailinator.com",
    "password": "Pass12#$",
    "deviceUniqueIdentifier": "2052201072",
    "manufacturer": "Mac OS",
    "loginType": "PASSWORD",
    "model": "Safari"
  }
});
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Successfully generate token
  expect(response.status()).toBe(200);

});
