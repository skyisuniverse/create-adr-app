# Publishing (npm package)

## Important Note for Publishing to npm

When you publish to npm (`npm publish`), npm packs the actual files inside `template/` — not Git pointers. Make sure your submodules are checked out and populated locally before running `npm publish`, and verify with `npm publish --dry-run` that the files inside `template/architecture-decision-records` and `template/simulation-tool` appear in the bundle (and that `.git` folders inside them are ignored).

## How to publish an npm package

To publish the updated version of **create-adr-app** to npm, bump the version number in your `package.json`, rebuild your TypeScript code, and publish the package via the npm CLI.

### 1. Prepare Your Files

Before publishing, verify that your build output and template folders are ready:

- **Check `template/` contents**: Make sure both template/architecture-decision-records and template/simulation-tool exist locally and contain the latest files (with .gitignore files renamed to gitignore so npm does not strip them).

### 2. Log In to npm

Run the login command in your terminal inside the create-adr-app directory and authenticate in your browser:

```bash
npm login
```

### 3. Bump the Package Version

npm rejects publishes if the version number in package.json already exists on the registry. Increment the version using semantic versioning (`patch`, `minor`, or `major`):

```bash
# Use 'minor' since you added a new feature (scaffolding two apps)
npm version minor
```
*(This automatically updates package.json, creates a git commit, and tags the release.)* 

**You can also update the version in package.json, create a git commit and tag the release manually.**

### 4. Build and Dry-Run

Compile your updated `src/index.ts` into JavaScript and preview the exact files that will be uploaded to npm:

```bash
npm run build
npm publish --dry-run
```

Review the file list printed in the terminal to confirm: 
- `dist/index.js`, 
- `template/architecture-decision-records/...`, - and `template/simulation-tool/...` are all present.

### 5. Publish to npm

Push the new version live to the npm registry:

```bash
npm publish
```

Push your version commit and tag back to GitHub so your repository stays in sync:

```bash
git push --follow-tags
```

> from Gemini:
> I noticed your repository already has a `.github/workflows` folder. Would you like help checking or updating your **GitHub Actions workflow** so that future pushes automatically build and publish to npm?
