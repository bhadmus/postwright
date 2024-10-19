
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('Authorization', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.post('{{frontOfficeUrl}}/api/v1/auth/user-device/activate-auth', {
  "data": {
    "deviceUniqueIdentifier": "2052201072",
    "username": "ridwan_aggregator@mailinator.com",
    "password": "Pass12#$",
    "channel": "WEB",
    "identifier": "2348150740211",
    "activationToken": "2348150740211",
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
