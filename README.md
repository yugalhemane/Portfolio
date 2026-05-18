# Yugal Hemane Portfolio

A modern portfolio website built with React, Vite, Tailwind CSS, Framer Motion, and an Express backend. It showcases GitHub projects, certificates, technical skills, experience, and contact options in a responsive single-page experience.

## Features

- Responsive React frontend with animated sections and project modals
- GitHub-powered project listing with language filters and search
- GitHub stats and language distribution summaries
- Certificate gallery with linked certificate assets
- Theme and accent color controls
- Contact section with EmailJS support
- Express backend for GitHub profile/project APIs

## Project Structure

```text
portfolio/
|-- frontend/          # React + Vite frontend
|   |-- public/        # Static assets, resume, certificates
|   `-- src/
|       |-- components/
|       |-- contexts/
|       |-- data/
|       |-- hooks/
|       `-- utils/
|-- backend/           # Express API server
|   `-- src/
|       |-- routes/
|       |-- services/
|       `-- server.js
`-- README.md
```

## Prerequisites

- Node.js 18 or newer
- npm
- GitHub personal access token for GitHub API requests
- EmailJS account if you want the contact form to send emails

## Local Setup

### Backend

```bash
cd backend
npm install
```

Create `backend/.env`:

```env
PORT=5000
GITHUB_USERNAME=your-github-username
GITHUB_TOKEN=your-github-personal-access-token
```

Run the backend:

```bash
npm run dev
```

The backend runs at `http://localhost:5000`.

### Frontend

```bash
cd frontend
npm install
```

Optional frontend environment variables:

```env
VITE_API_URL=http://localhost:5000
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

For deployment, add the same `VITE_EMAILJS_*` values in Vercel under Project Settings -> Environment Variables, then redeploy the frontend. Vite bakes these values into the production build, so changing them requires a new deployment.

Run the frontend:

```bash
npm run dev
```

The frontend runs at `http://localhost:5173`.

## Quality Checks

From `frontend/`:

```bash
npm run lint
npm run build
```

From `backend/`:

```bash
npm start
```

## Deployment

### Frontend on Vercel

1. Import the repository in Vercel.
2. Set the root directory to `frontend`.
3. Use `npm run build` as the build command.
4. Use `dist` as the output directory.
5. Add `VITE_API_URL` with the deployed backend URL.

### Backend on Render

1. Create a Render Web Service.
2. Set the root directory to `backend`.
3. Use `npm install` as the build command.
4. Use `node src/server.js` as the start command.
5. Add `GITHUB_USERNAME`, `GITHUB_TOKEN`, and `NODE_ENV=production`.

## Customization

- Case studies: `frontend/src/data/caseStudies.js`
- Certificates: `frontend/src/data/certificates.js`
- Social links: `frontend/src/components/SocialLinks.jsx`
- Timeline and journey content: `frontend/src/components/AboutJourney.jsx`
- Theme and accent options: `frontend/src/contexts/ThemeContext.jsx`

## License

MIT
