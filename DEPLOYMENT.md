# Frontend Deployment Guide

## Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Build and Deploy**
   ```bash
   npm run build
   vercel --prod
   ```

3. **Environment Variables**
   Set in Vercel dashboard:
   - `REACT_APP_API_URL=https://your-backend-url.vercel.app`
   - `REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id`

## Netlify Deployment

1. **Build**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Drag `build` folder to Netlify
   - Or connect GitHub repository

3. **Environment Variables**
   Set in Netlify dashboard:
   - `REACT_APP_API_URL`
   - `REACT_APP_GOOGLE_CLIENT_ID`

## GitHub Pages Deployment

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/ayursutra-frontend",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```