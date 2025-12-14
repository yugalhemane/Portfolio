# 🚀 Deployment Guide

## Step-by-Step Deployment Instructions

### Prerequisites
- GitHub account
- Vercel account (for frontend)
- Render account (for backend)
- GitHub Personal Access Token

---

## 📦 Step 1: Clean Git Repository

Before pushing, make sure `node_modules` and `.env` are not tracked:

```bash
# Remove node_modules from git tracking (if already tracked)
git rm -r --cached backend/node_modules
git rm -r --cached frontend/node_modules

# Verify .env is not tracked
git rm --cached backend/.env 2>nul || echo ".env not tracked (good!)"

# Add updated .gitignore files
git add .gitignore backend/.gitignore frontend/.gitignore
```

---

## 🔧 Step 2: Prepare for Deployment

### Backend Environment Variables (for Render)

Create a `.env.example` file in `backend/`:

```env
PORT=5000
GITHUB_USERNAME=your-github-username
GITHUB_TOKEN=your-github-personal-access-token
```

**DO NOT commit `.env` file!** It's already in `.gitignore`.

### Frontend Environment Variables (for Vercel)

Create `frontend/.env.production` (this can be committed as it has no secrets):

```env
VITE_API_URL=https://your-backend-name.onrender.com
```

**Note**: Replace `your-backend-name` with your actual Render service name.

---

## 🌐 Step 3: Deploy Backend to Render

1. **Go to [Render Dashboard](https://dashboard.render.com)**
2. **Click "New +" → "Web Service"**
3. **Connect your GitHub repository**
4. **Configure the service:**
   - **Name**: `portfolio-backend` (or your choice)
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node src/server.js`
   - **Plan**: Free (or paid if you prefer)

5. **Add Environment Variables:**
   - `GITHUB_USERNAME` = Your GitHub username
   - `GITHUB_TOKEN` = Your GitHub Personal Access Token
   - `NODE_ENV` = `production`
   - `PORT` = Leave empty (Render sets this automatically)

6. **Click "Create Web Service"**
7. **Wait for deployment** (takes 2-3 minutes)
8. **Copy your service URL** (e.g., `https://portfolio-backend-xyz.onrender.com`)

---

## ⚡ Step 4: Deploy Frontend to Vercel

1. **Go to [Vercel Dashboard](https://vercel.com/dashboard)**
2. **Click "Add New..." → "Project"**
3. **Import your GitHub repository**
4. **Configure the project:**
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

5. **Add Environment Variable:**
   - **Key**: `VITE_API_URL`
   - **Value**: Your Render backend URL (e.g., `https://portfolio-backend-xyz.onrender.com`)

6. **Click "Deploy"**
7. **Wait for deployment** (takes 1-2 minutes)
8. **Your site is live!** 🎉

---

## 🔄 Step 5: Update Frontend API URL

After backend is deployed, update the frontend:

1. **In Vercel Dashboard:**
   - Go to your project → Settings → Environment Variables
   - Update `VITE_API_URL` with your Render backend URL
   - Redeploy (or it will auto-redeploy on next push)

2. **Or update locally and push:**
   ```bash
   # Create frontend/.env.production
   echo "VITE_API_URL=https://your-backend.onrender.com" > frontend/.env.production
   
   git add frontend/.env.production
   git commit -m "Add production API URL"
   git push
   ```

---

## ✅ Step 6: Verify Deployment

1. **Test Backend:**
   - Visit: `https://your-backend.onrender.com`
   - Should see: "Portfolio backend is running"
   - Test API: `https://your-backend.onrender.com/api/projects`

2. **Test Frontend:**
   - Visit your Vercel URL
   - Check browser console for errors
   - Verify projects are loading
   - Test contact form

---

## 🐛 Troubleshooting

### Backend Issues

**Problem**: Backend not starting
- Check Render logs
- Verify environment variables are set
- Ensure `PORT` is not hardcoded (use `process.env.PORT`)

**Problem**: CORS errors
- Backend already has CORS enabled
- If issues persist, check Render service URL matches frontend API URL

### Frontend Issues

**Problem**: Projects not loading
- Check browser console
- Verify `VITE_API_URL` is set correctly in Vercel
- Check network tab for API calls

**Problem**: Build fails on Vercel
- Check build logs
- Ensure `package.json` has correct build script
- Verify all dependencies are in `package.json`

---

## 📝 Important Notes

1. **Never commit `.env` files** - They contain secrets!
2. **Render free tier** - Services sleep after 15 minutes of inactivity (first request may be slow)
3. **Vercel** - Free tier is excellent for frontend hosting
4. **GitHub Token** - Keep it secure, never share it publicly

---

## 🔐 Security Checklist

- ✅ `.env` files in `.gitignore`
- ✅ `node_modules` in `.gitignore`
- ✅ Environment variables set in hosting platforms (not in code)
- ✅ GitHub token has minimal required permissions
- ✅ API URLs use HTTPS

---

## 🎉 You're Done!

Your portfolio is now live! Share your Vercel URL with the world!

