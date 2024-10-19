
import { test, expect } from '@playwright/test';
import { variables } from '../variables.js';

test('AcceptTermsAndCondition', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.post('{{cardServiceUrl}}/api/v1/card-tools/activity-logging/activate/terms-conditions/accept', {
  "headers": {
    "Content-Type": "application/json"
  },
  "data": {
    "documentId": 1
  }
});
  const responseTime = Date.now() - startTime;

});
