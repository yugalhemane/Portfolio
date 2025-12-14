# 🚀 Quick Start - Push to GitHub & Deploy

## ⚠️ IMPORTANT: Before Pushing

Your `node_modules` are currently tracked in git. We need to remove them first!

## Step 1: Remove node_modules from Git

Run these commands:

```bash
# Remove node_modules from git tracking
git rm -r --cached backend/node_modules
git rm -r --cached frontend/node_modules

# Verify .env is not tracked (should show nothing)
git ls-files | findstr ".env"
```

## Step 2: Commit All Changes

```bash
# Add all updated files
git add .

# Commit
git commit -m "feat: Enhanced portfolio UI with animations and deployment configs

- Added modern animations and glassmorphism effects
- Enhanced all components with better UX
- Added deployment configs for Vercel and Render
- Updated .gitignore to exclude node_modules and .env
- Added environment variable support for production"

# Push to GitHub
git push origin main
```

## Step 3: Deploy

### Backend (Render)
1. Go to https://render.com
2. New → Web Service
3. Connect GitHub repo
4. Settings:
   - Root Directory: `backend`
   - Build: `npm install`
   - Start: `node src/server.js`
5. Add env vars:
   - `GITHUB_USERNAME`
   - `GITHUB_TOKEN`
   - `NODE_ENV=production`

### Frontend (Vercel)
1. Go to https://vercel.com
2. Import GitHub repo
3. Settings:
   - Root Directory: `frontend`
   - Framework: Vite
4. Add env var:
   - `VITE_API_URL` = your Render backend URL

## ✅ Done!

See `DEPLOYMENT.md` for detailed instructions.

