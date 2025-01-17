import { expect, test } from 'vitest';

import { createNewStandardLint } from '../../src/domain/StandardLint';

test('It should pass when finding a GitHub issue template', () => {
  const expected = 'pass';

  const standardlint = createNewStandardLint({
    basePath: './testdata',
    checks: ['checkForPresenceTemplateIssues']
  });
  const result = standardlint.check().results?.[0]?.status;

  expect(result).toBe(expected);
});

test('It should pass when finding a GitHub issue template and using a filetree', () => {
  const expected = 'pass';

  const standardlint = createNewStandardLint(
    {
      basePath: './testdata',
      checks: ['checkForPresenceTemplateIssues']
    },
    ['testdata/.github/ISSUE_TEMPLATE/issue.md']
  );
  const result = standardlint.check().results?.[0]?.status;

  expect(result).toBe(expected);
});

/**
 * NEGATIVE TESTS
 */

test('It should warn when missing a GitHub issue template', () => {
  const expected = 'warn';

  const standardlint = createNewStandardLint({
    basePath: './tests',
    checks: [{ name: 'checkForPresenceTemplateIssues', severity: 'warn' }]
  });
  const result = standardlint.check().results?.[0]?.status;

  expect(result).toBe(expected);
});

test('It should error when missing a GitHub issue template', () => {
  const expected = 'fail';

  const standardlint = createNewStandardLint({
    basePath: './tests',
    checks: [{ name: 'checkForPresenceTemplateIssues', severity: 'error' }]
  });
  const result = standardlint.check().results?.[0]?.status;

  expect(result).toBe(expected);
});
