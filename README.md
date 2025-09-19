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

