import type { Rule } from 'eslint';
import { relative } from 'node:path';
import { cwd } from 'node:process';

export const someRuleThatWorksOnlyForJson: Rule.RuleModule = {
  meta: { type: 'problem', schema: [] },
  create(context) {
    console.log(`someRuleThatWorksOnlyForJson: ${relative(cwd(), context.filename)}`);
    return {};
  }
};
