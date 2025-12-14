# Testing Profile Endpoint

## Quick Test

1. Make sure backend is running:

   ```bash
   cd backend
   npm run dev
   ```

2. Test the endpoint in browser or terminal:

   - Browser: http://localhost:5000/api/profile
   - Terminal: `curl http://localhost:5000/api/profile`

3. Should return JSON with your GitHub profile data

## If Still Getting 404

1. **Stop the backend server** (Ctrl+C)
2. **Restart it**:
   ```bash
   cd backend
   npm run dev
   ```
3. Check console for: "Server running on http://localhost:5000"
4. Try the endpoint again

## Verify .env File

Make sure `backend/.env` has:

```
GITHUB_USERNAME=your-username
GITHUB_TOKEN=your-token
PORT=5000
```
