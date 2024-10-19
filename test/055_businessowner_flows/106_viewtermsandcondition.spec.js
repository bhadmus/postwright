
import { test, expect } from '@playwright/test';
import { variables } from '../variables.js';

test('ViewTermsAndCondition', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v1/cards/documents/keys/TERMS_AND_CONDITIONS?page=0&size=10&fetchType=FULL');
  const responseTime = Date.now() - startTime;

});
