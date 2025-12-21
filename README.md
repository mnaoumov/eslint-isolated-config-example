# eslint-isolated-config-example

The example created for https://github.com/eslint/eslint/issues/20354

To test it out

```bash
npm install
npm run lint
```

## Actual output

```
someRuleThatWorksOnlyForJson: package.json
someRuleThatWorksOnlyForTs: package.json
someOtherRuleThatWorksOnlyForTs: src\file.ts
someRuleThatWorksOnlyForTs: src\file.ts
```

## Expected output

```
someRuleThatWorksOnlyForJson: package.json
someOtherRuleThatWorksOnlyForTs: src\file.ts
someRuleThatWorksOnlyForTs: src\file.ts
```
