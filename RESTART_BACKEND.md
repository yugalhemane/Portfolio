# 🔄 How to Restart Backend Server

## The Problem

You're getting `404 (Not Found)` because the backend server is running **old code** that doesn't have the `/api/profile` route.

## ✅ Solution: Restart Backend

### Step 1: Stop the Current Server

1. Find the terminal window where backend is running
2. Look for: `Server running on http://localhost:5000`
3. Press **`Ctrl + C`** to stop it

### Step 2: Restart the Server

```bash
cd backend
npm run dev
```

### Step 3: Verify It's Working

You should see:

```
Server running on http://localhost:5000
```

### Step 4: Test the Endpoint

Open in browser: **http://localhost:5000/api/profile**

You should see JSON with your GitHub profile data!

## ✅ After Restart

- The 404 error will disappear
- Your profile will load automatically
- Hero section will show your GitHub name and bio

---

**Note:** The frontend error handling I added means your site won't crash - it just uses defaults until the backend is restarted.
