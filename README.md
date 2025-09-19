# LankaPura_WedaMadura

## Deployment (Vercel) Troubleshooting

If a Vercel build fails with an error similar to:

```
Error: Cannot find module @rollup/rollup-linux-x64-gnu
```

This is caused by npm occasionally skipping an optional native Rollup binary when installing with aggressive clean flags. The project now relies only on the Rollup version bundled with Vite and uses a simplified install command.

### Fixes Applied
1. Removed explicit `rollup` devDependency (Vite already manages it).
2. Simplified `vercel.json` `installCommand` to just `npm install`.
3. Locked Node version to 20.x (in both `vercel.json` env and root `package.json` engines) to avoid Node 22 native binary mismatch.

### If You Still See the Error
Try one of these (in order):
1. Trigger a fresh deployment (Vercel dashboard -> Deployments -> Redeploy).
2. Clear Vercel build cache (Redeploy with “Clear cache”).
3. Ensure environment variable is set (now in `vercel.json` already):
	- `ROLLUP_SKIP_NODEJS_NATIVE=1` (forces pure JS implementation of Rollup, bypassing missing native binary).
4. As a last resort, pin Vite to the latest patch and reinstall locally, commit the updated lockfile, then redeploy.

### Local Development
```
cd client
npm install
npm run dev
```

### Building Locally
```
cd client
npm run build
```

### Notes
- The dependency `styled-component` appears to be a typo; usually the library is `styled-components`. If styling utilities are not working as expected, correct this dependency.
- Avoid deleting the lock file during CI unless necessary; it helps produce reproducible builds.

## Rollup Native Binary Error Root Cause

The persistent error:
```
Cannot find module @rollup/rollup-<platform>
```
was ultimately caused by the line `optional=false` in `client/.npmrc`. That setting instructs npm to skip installing all optional dependencies. Rollup distributes its platform-specific binaries as optional dependencies; with them disabled, the loader falls back to throwing instead of using the binary. Once `optional=false` was removed, a clean reinstall resolved the issue.

### Final Changes Implemented
1. Removed `optional=false` from `.npmrc` so platform optional deps install.
2. Added `@mui/material` and `@emotion/react` which were required by a component using MUI ImageList.
3. Downgraded Vite to `5.4.10` and pinned `rollup@3.29.4` to avoid reliance on newer native binary packaging while stabilizing the build.
4. Performed a clean reinstall: delete `node_modules` + `package-lock.json`, then `npm install`.

### If Reverting to Vite 6 Later
You can try upgrading again:
```
npm install vite@latest --save-dev
```
Keep `.npmrc` without `optional=false`, and you may remove the explicit `rollup` devDependency once stable.

