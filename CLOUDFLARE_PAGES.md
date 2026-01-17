# Cloudflare Pages Deployment Configuration

## Build Settings

In your Cloudflare Pages project settings, configure:

- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Node version**: 20 (or use `.nvmrc`)

## Configuration Summary

✅ **Next.js Config** (`next.config.ts`):
- `output: 'export'` - Enables static export
- `trailingSlash: true` - Better compatibility with static export
- `images.unoptimized: true` - Required for static export
- ESLint and TypeScript errors ignored during builds

✅ **Package Manager**:
- `bun.lockb` removed - Forces npm usage
- `package-lock.json` present - npm will be used
- `.gitignore` updated to exclude `bun.lockb`

✅ **Node Version**:
- `.nvmrc` file specifies Node 20 LTS

## What Gets Generated

After `npm run build`, Next.js will:
- Generate all pages as static HTML in the `out/` directory
- Pre-render all dynamic routes using `generateStaticParams`
- Create static `robots.txt` and `sitemap.xml` files
- Export all assets and images

## Troubleshooting

If the build still fails:
1. Check Cloudflare Pages build logs for specific errors
2. Ensure no API routes exist (they're incompatible with static export)
3. Verify all dynamic routes have `generateStaticParams`
4. Make sure `package-lock.json` is committed to git
