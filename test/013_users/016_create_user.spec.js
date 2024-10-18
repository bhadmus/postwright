
import { test, expect } from '@playwright/test';
import { variables } from '../variables.js';

test('Create User', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.post('https://api.escuelajs.co/api/v1/users/', {
  "data": {
    "name": "Dovdale",
    "email": "dovdale@gmail.com",
    "password": "1234",
    "avatar": "https://picsum.photos/800"
  }
});
  const responseTime = Date.now() - startTime;

});
