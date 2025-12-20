import type { Rule } from 'eslint';
import { relative } from 'node:path';
import { cwd } from 'node:process';

export const someOtherRuleThatWorksOnlyForTs: Rule.RuleModule = {
  meta: { type: 'problem', schema: [] },
  create(context) {
    console.log(`someOtherRuleThatWorksOnlyForTs: ${relative(cwd(), context.filename)}`);
    return {};
  }
};
