
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('Authorization', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.post('{{frontOfficeUrl}}/api/v1/auth/user-device/activate-auth', {
  "data": {
    "username": "logistics4",
    "password": "Pass12#$",
    "deviceUniqueIdentifier": "2052201072",
    "channel": "WEB",
    "identifier": "2348091691004",
    "activationToken": "2348091691004",
    "otp": "123456"
  }
});
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Successfully generate token
  expect(response.status()).toBe(200);

  // Confirm Invalid credentials

  // Confirm illegal state

});
