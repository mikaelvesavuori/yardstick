import { test, expect } from 'vitest';

import { createNewStandardLint } from '../../src/domain/StandardLint';

test('It should pass when there are no conflicting lock files', () => {
  const expected = 'pass';

  const standardlint = createNewStandardLint({
    basePath: './tests',
    checks: ['checkForConflictingLockfiles']
  });
  const result = standardlint.check().results?.[0]?.status;

  expect(result).toBe(expected);
});

/**
 * NEGATIVE TESTS
 */

test('It should warn when there are conflicting lock files', () => {
  const expected = 'warn';

  const standardlint = createNewStandardLint({
    basePath: './testdata',
    checks: [{ name: 'checkForConflictingLockfiles', severity: 'warn' }]
  });
  const result = standardlint.check().results?.[0]?.status;

  expect(result).toBe(expected);
});

test('It should error when there are conflicting lock files', () => {
  const expected = 'fail';

  const standardlint = createNewStandardLint({
    basePath: './testdata',
    checks: [{ name: 'checkForConflictingLockfiles', severity: 'error' }]
  });
  const result = standardlint.check().results?.[0]?.status;

  expect(result).toBe(expected);
});
