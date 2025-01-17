import fs from 'node:fs';

/**
 * @description Checks if a path is a directory.
 */
export function isDirectory(path: string) {
  return fs.statSync(path).isDirectory();
}
