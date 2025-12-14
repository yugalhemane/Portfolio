# Portfolio Website

A modern, professional portfolio website built with React and Node.js, featuring GitHub integration and beautiful UI animations.

## 🚀 Features

- **Modern UI**: Beautiful animations, glassmorphism effects, and gradient designs
- **GitHub Integration**: Automatically fetches and displays your GitHub projects
- **Responsive Design**: Works perfectly on all devices
- **Project Showcase**: Detailed project modals with case studies
- **Contact Form**: Easy way for visitors to reach out
- **Timeline**: Visual journey of your career/education

## 📁 Project Structure

```
portfolio/
├── frontend/          # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   ├── data/
│   │   └── hooks/
│   └── package.json
├── backend/           # Express.js backend
│   ├── src/
│   │   ├── routes/
│   │   ├── services/
│   │   └── server.js
│   └── package.json
└── README.md
```

## 🛠️ Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- GitHub Personal Access Token

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```
   
   Create a `.env` file in the `backend` directory:
   ```env
   PORT=5000
   GITHUB_USERNAME=your-github-username
   GITHUB_TOKEN=your-github-personal-access-token
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

### Running Locally

1. **Start Backend** (from `backend` directory)
   ```bash
   npm run dev
   ```
   Backend runs on `http://localhost:5000`

2. **Start Frontend** (from `frontend` directory)
   ```bash
   npm run dev
   ```
   Frontend runs on `http://localhost:5173`

## 🚀 Deployment

### Frontend on Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Set root directory to `frontend`
5. Build command: `npm run build`
6. Output directory: `dist`
7. Add environment variable for API URL:
   - `VITE_API_URL` = your backend URL (e.g., `https://your-backend.onrender.com`)

### Backend on Render

1. Go to [Render](https://render.com)
2. Create a new Web Service
3. Connect your GitHub repository
4. Settings:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `node src/server.js`
   - **Environment**: Node
5. Add environment variables:
   - `GITHUB_USERNAME` = your GitHub username
   - `GITHUB_TOKEN` = your GitHub personal access token
   - `PORT` = 10000 (Render sets this automatically, but good to have)
   - `NODE_ENV` = production

### Update Frontend API URL

After deploying backend, update the frontend API calls:

1. Create `frontend/.env.production`:
   ```env
   VITE_API_URL=https://your-backend.onrender.com
   ```

2. Update `frontend/src/App.jsx` to use environment variable:
   ```jsx
   const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
   ```

## 🔐 Environment Variables

### Backend (.env)
- `PORT` - Server port (default: 5000)
- `GITHUB_USERNAME` - Your GitHub username
- `GITHUB_TOKEN` - GitHub Personal Access Token

### Frontend (.env.production)
- `VITE_API_URL` - Backend API URL

## 📝 GitHub Token Setup

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `public_repo` scope
3. Copy the token and add it to your `.env` file

## 🎨 Customization

- **Case Studies**: Edit `frontend/src/data/caseStudies.js`
- **Project Images**: Add images to `frontend/public/projects/`
- **Social Links**: Update `frontend/src/components/SocialLinks.jsx`
- **Timeline**: Edit `frontend/src/components/Timeline.jsx`

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🤝 Contributing

Feel free to fork and customize for your own use!

