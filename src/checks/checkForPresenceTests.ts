import { CheckResult, Severity } from '../interface/Check';

import { calculatePass } from '../application/calculatePass';

import { logDefaultPathMessage } from '../utils/logDefaultPathMessage';
import { getAllFiles } from '../utils/getAllFiles';

/**
 * @description Checks if there are tests.
 */
export function checkForPresenceTests(
  severity: Severity,
  basePath: string,
  customPath?: string
): CheckResult {
  const path = customPath || 'tests';
  const name = 'Tests';
  const message = 'Check for presence of tests';

  if (!customPath) logDefaultPathMessage(name, path);

  const tests = getAllFiles(`${basePath}/${path}`, []);
  const result = tests.length > 0;

  return {
    name,
    status: calculatePass(result, severity),
    message,
    path
  };
}