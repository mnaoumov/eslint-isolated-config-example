import type { Rule } from 'eslint';
import { relative } from 'node:path';
import { cwd } from 'node:process';

export const someRuleThatWorksOnlyForTs: Rule.RuleModule = {
  meta: { type: 'problem', schema: [] },
  create(context) {
    console.log(`someRuleThatWorksOnlyForTs: ${relative(cwd(), context.filename)}`);
    return {};
  }
};
