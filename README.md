# eslint-isolated-config-example

The example created for https://github.com/eslint/eslint/issues/20354

To test it out

```bash
npm install
npm run lint
```

## Actual output

```
someOtherRuleThatWorksOnlyForTs: myPlugin.ts
someRuleThatWorksOnlyForTs: myPlugin.ts
someOtherRuleThatWorksOnlyForTs: otherPlugin.ts
someRuleThatWorksOnlyForTs: otherPlugin.ts
someOtherRuleThatWorksOnlyForTs: package.json
someRuleThatWorksOnlyForJson: package.json
someOtherRuleThatWorksOnlyForTs: someOtherRuleThatWorksOnlyForTs.ts
someRuleThatWorksOnlyForTs: someOtherRuleThatWorksOnlyForTs.ts
someOtherRuleThatWorksOnlyForTs: someRuleThatWorksOnlyForJson.ts
someRuleThatWorksOnlyForTs: someRuleThatWorksOnlyForJson.ts
someOtherRuleThatWorksOnlyForTs: someRuleThatWorksOnlyForTs.ts
someRuleThatWorksOnlyForTs: someRuleThatWorksOnlyForTs.ts
someOtherRuleThatWorksOnlyForTs: src\file.ts
someRuleThatWorksOnlyForTs: src\file.ts
```

## Expected output

```
someRuleThatWorksOnlyForJson: package.json
someOtherRuleThatWorksOnlyForTs: src\file.ts
someRuleThatWorksOnlyForTs: src\file.ts
```

## See also

Also check

- [`v2` branch](https://github.com/mnaoumov/eslint-isolated-config-example/tree/v2) with another approach which is closer to the expected result.
- [`v3` branch](https://github.com/mnaoumov/eslint-isolated-config-example/tree/v3) that works as expected.

## Filing an issue (for AI agents and humans)

Open issues through the [issue forms](https://github.com/mnaoumov/eslint-isolated-config-example/issues/new/choose), not as blank issues.

Filing from the CLI or the API (`gh issue create --body`, or an AI agent filing for you) skips the form, and `gh issue create --template` cannot load an issue form. In that case, open the matching form in [`.github/ISSUE_TEMPLATE/`](https://github.com/mnaoumov/eslint-isolated-config-example/tree/HEAD/.github/ISSUE_TEMPLATE), copy every field as a `### <label>` heading in the form's order, and fill in each one. Always state the version you used and your operating system.
