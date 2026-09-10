# mini-weather-dashboard
# 🌤️ Weather App

A simple **full-stack weather application** built with **React.js, Node.js, and Express.js**. Users can search for a city and view its current weather information.

## 🛠️ Technologies

* React.js + Vite
* Node.js
* Express.js
* JavaScript
* CSS
* Weather API
* Git & GitHub

## 🔄 How It Works

```text
User enters city
      ↓
React Frontend
      ↓
Node.js + Express Backend
      ↓
Weather API
      ↓
Weather data returned
      ↓
Displayed on the page
```

For example:

```text
Search: Pune
→ Frontend sends request
→ Backend calls Weather API
→ Weather data is received
→ Result is displayed
```

## 📂 Project Structure

```text
mini-weather-dashboard/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── app.js
│   └── server.js
│
├── frontend/
│   └── src/
│       ├── components/
│       ├── services/
│       └── App.jsx
│
└── README.md
```

## 🚀 Run the Project

### Backend

```bash
cd backend
npm install
npm start
```

Backend runs on:

```text
http://localhost:5000
```

### Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the URL provided by Vite, usually:

```text
http://localhost:5173
```

## 🔐 Environment Setup

Create `backend/.env`:

```env
WEATHER_API_KEY=your_api_key_here
```

**Do not upload your `.env` file or API key to GitHub.**

## 📡 API Endpoint

```text
GET /api/weather?city=Pune
```

## ✨ Key Features

* Search weather by city
* Real-time weather data
* React-based user interface
* Node.js/Express backend
* External API integration
* Secure API key handling
* Clean frontend/backend separation

## 👩‍💻 Author

**Gayatri**

GitHub: GayatriPBizzFly

