# Hunternet (Single Repository: API + Frontend)

This repo serves a Vite React frontend **and** an Express API from a single Node service (great for Render).

## Local dev
1) Install root deps and client deps:
```bash
npm install
cd client && npm install
```
2) Run backend:
```bash
npm run dev
```
3) In another terminal, run the frontend:
```bash
cd client && npm run dev
```
- Frontend: http://localhost:5173 (proxying /api to http://localhost:3000)
- API: http://localhost:3000/api/health

## Deploy to Render
- Create a **Web Service** from this repo.
- Build Command: `npm run render-build`
- Start Command: `node server.js`

Render will build the frontend into `client/dist`, and the Node server will serve that plus the API.
