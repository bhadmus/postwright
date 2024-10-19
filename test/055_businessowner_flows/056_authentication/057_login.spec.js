
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('Login', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.post('{{frontOfficeUrl}}/api/v2/auth/token', {
  "headers": {
    "client-type": "WEB",
    "client-version": "0.0.0"
  },
  "data": {
    "username": "logistics4",
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

  // Confirm Invalid credentials

  // Confirm illegal state

});
