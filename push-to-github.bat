@echo off
echo ========================================
echo  Pushing Portfolio to GitHub
echo ========================================
echo.

echo Step 1: Removing node_modules from git tracking...
git rm -r --cached backend/node_modules 2>nul
git rm -r --cached frontend/node_modules 2>nul
echo Done!
echo.

echo Step 2: Adding all files...
git add .
echo Done!
echo.

echo Step 3: Checking status...
git status --short
echo.

echo Step 4: Committing changes...
git commit -m "feat: Enhanced portfolio with modern UI and deployment configs

- Added animations, glassmorphism, and modern UX improvements
- Updated .gitignore to exclude node_modules and .env
- Added Vercel and Render deployment configurations
- Added environment variable support for production
- Enhanced all components with better user experience"

echo.
echo Step 5: Pushing to GitHub...
echo (Make sure you have a remote repository set up)
git push origin main

echo.
echo ========================================
echo  Done! Check GitHub for your changes.
echo ========================================
pause

