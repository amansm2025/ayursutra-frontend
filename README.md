# HealPoint Frontend

Frontend React application for the HealPoint Online Patient Management System.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)

### Setup
1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment**
   ```bash
   # Create .env file with backend API URL
   echo "REACT_APP_API_URL=http://localhost:8000" > .env
   ```

3. **Start Application**
   ```bash
   npm start
   ```

4. **Access**
   - Frontend: http://localhost:3000

## 🔧 Environment Variables

Create `.env` file with:
```env
REACT_APP_API_URL=http://localhost:8000
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
```

## 📱 Features
- User authentication (login/signup)
- Patient dashboard & booking
- Practitioner management interface
- Admin dashboard
- Responsive design
- Real-time notifications

## 🛠 Tech Stack
- **Framework**: React 18
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **Charts**: Chart.js + React Chart.js 2
- **Build Tool**: Create React App

## 🎨 Design System
- **Colors**: Ayurvedic green theme
- **Typography**: Inter font family
- **Components**: Reusable component library

## 🚀 Deployment
- **Vercel**: `npm run build` then deploy
- **Netlify**: Compatible
- **GitHub Pages**: Compatible

## 📁 Project Structure
```
src/
├── components/     # Reusable components
├── pages/         # Page components
├── contexts/      # React contexts
├── services/      # API services
└── App.js         # Main app component
```