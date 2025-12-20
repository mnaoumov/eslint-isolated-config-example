import type { ESLint } from 'eslint';
import { someOtherRuleThatWorksOnlyForTs } from './someOtherRuleThatWorksOnlyForTs.ts';

export const otherPlugin = {
  rules: {
    someOtherRuleThatWorksOnlyForTs
  }
} satisfies ESLint.Plugin;
