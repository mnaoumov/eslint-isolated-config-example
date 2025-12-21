import { defineConfig } from 'eslint/config';
import * as tsParser from '@typescript-eslint/parser';
import type { ESLint } from 'eslint';
import { someRuleThatWorksOnlyForTs } from './someRuleThatWorksOnlyForTs.ts';
import { someOtherRuleThatWorksOnlyForTs } from './someOtherRuleThatWorksOnlyForTs.ts';
import { someRuleThatWorksOnlyForJson } from './someRuleThatWorksOnlyForJson.ts';
import json from '@eslint/json';

export const myPlugin = {
  rules: {
    someRuleThatWorksOnlyForJson,
    someRuleThatWorksOnlyForTs,
    someOtherRuleThatWorksOnlyForTs
  },
  configs: {
    recommended: {}
  }
} satisfies ESLint.Plugin;

myPlugin.configs.recommended = defineConfig([
  {
    plugins: { myPlugin }
  },
  {
    plugins: { json },
    files: ['package.json'],
    language: 'json/json',
    rules: {
      'myPlugin/someRuleThatWorksOnlyForJson': 'error'
    }
  },
  {
    languageOptions: {
      parser: tsParser
    },
    rules: {
      'myPlugin/someRuleThatWorksOnlyForTs': 'error'
    }
  }
]);
