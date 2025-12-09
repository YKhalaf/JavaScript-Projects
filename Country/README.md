# 🌍 Country & Neighbour Info App

A JavaScript web application that automatically detects your country based on your IP address and displays detailed information about it — along with all neighbouring countries — using the **ipapi.co** and **restcountries.com** APIs.

---

## ✨ Features

- Automatically detects your location using `ipapi.co`
- Displays your country information:
  - Flag  
  - Name  
  - Capital  
  - Region  
  - Population  
  - Languages  
  - Currencies  
- Fetches all neighbouring countries in parallel
- Uses `Promise.allSettled` for safe parallel requests
- Modern ES6+ JavaScript
- Error handling with clean UI fallback

---

## 📦 Technologies Used

- **JavaScript (ES6+)**
- **Fetch API**
- **HTML5**
- **CSS3**

---

## 📂 Project Structure

├── 📄 index.html        # Main HTML file
├── 📄 script.js         # JavaScript logic (fetching APIs, rendering countries)
├── 🎨 style.css         # App styling
└── 📘 README.md         # Documentation


