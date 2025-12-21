# eslint-isolated-config-example

The example created for https://github.com/eslint/eslint/issues/20354

To test it out

```bash
npm install
npm run lint
```

## Actual output

```
someOtherRuleThatWorksOnlyForTs: src\file.ts
someRuleThatWorksOnlyForTs: src\file.ts
someRuleThatWorksOnlyForJson: package.json
```

## Expected output

```
someOtherRuleThatWorksOnlyForTs: src\file.ts
someRuleThatWorksOnlyForTs: src\file.ts
someRuleThatWorksOnlyForJson: package.json
```

Works as expected!
