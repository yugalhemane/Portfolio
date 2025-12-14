# PowerShell script to remove node_modules and .env from git history
# Run this if you accidentally committed them

Write-Host "Cleaning up git repository..." -ForegroundColor Yellow

# Remove node_modules from git tracking
Write-Host "Removing node_modules from git tracking..." -ForegroundColor Cyan
git rm -r --cached backend/node_modules 2>$null
git rm -r --cached frontend/node_modules 2>$null

# Remove .env from git tracking
Write-Host "Removing .env files from git tracking..." -ForegroundColor Cyan
git rm --cached backend/.env 2>$null
git rm --cached frontend/.env 2>$null

# Verify .gitignore is correct
Write-Host "Verifying .gitignore files..." -ForegroundColor Cyan
if (Test-Path ".gitignore") {
    Write-Host "✓ Root .gitignore exists" -ForegroundColor Green
}
if (Test-Path "backend/.gitignore") {
    Write-Host "✓ Backend .gitignore exists" -ForegroundColor Green
}
if (Test-Path "frontend/.gitignore") {
    Write-Host "✓ Frontend .gitignore exists" -ForegroundColor Green
}

Write-Host "`nCleanup complete! Now commit the changes:" -ForegroundColor Green
Write-Host "  git add .gitignore backend/.gitignore frontend/.gitignore" -ForegroundColor Yellow
Write-Host "  git commit -m 'Update .gitignore to exclude node_modules and .env'" -ForegroundColor Yellow

