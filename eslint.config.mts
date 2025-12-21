import { defineConfig } from 'eslint/config';
import { myPlugin } from './myPlugin.ts';
import { otherPlugin } from './otherPlugin.ts';
import * as tsParser from '@typescript-eslint/parser';

export default defineConfig([
  {
    files: ['./src/*.ts'],
    plugins: { otherPlugin },
    languageOptions: {
      parser: tsParser
    },
    rules: {
      'otherPlugin/someOtherRuleThatWorksOnlyForTs': 'error'
    }
  },
  myPlugin.configs.recommended
]);
