import { CheckResult, Severity } from '../interface/Check';

import { calculatePass } from '../application/calculatePass';

import { checkIfFileOrDirectoryExists } from '../utils/checkIfFileOrDirectoryExists';
import { logDefaultPathMessage } from '../utils/logDefaultPathMessage';

/**
 * @description TODO
 */
export function checkForPresenceTemplateIssues(
  severity: Severity,
  basePath: string,
  customPath?: string
): CheckResult {
  const TEMPLATE_FILE_PATH = customPath || '.github/ISSUE_TEMPLATE/issue.md';
  const name = 'Check for GitHub issue template';
  const message = 'TODO message';

  if (!customPath) logDefaultPathMessage(name, TEMPLATE_FILE_PATH);

  const result = checkIfFileOrDirectoryExists(basePath, TEMPLATE_FILE_PATH);

  return {
    name,
    status: calculatePass(result, severity),
    message,
    path: TEMPLATE_FILE_PATH
  };
}