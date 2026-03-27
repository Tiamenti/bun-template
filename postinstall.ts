import { $ } from 'bun';
import { rmSync } from 'fs';

await $`git add .`;
await $`git rm --cached postinstall.ts`;
await $`git commit --amend --no-edit`;

rmSync(import.meta.filename);
