# 🏡 KRAPA Real Estate Platform

KRAPA is a full-stack real estate listing website built with **React** for the frontend and **Express.js** for the backend. Admins can upload, edit, and delete property listings with images, while users can browse listings in a beautiful slider format.

---

## 🌟 Features

- 🏘️ Add, edit, and delete property listings
- 🖼️ Upload multiple images per listing
- 🔍 Search listings by title or location
- 🖥️ Admin dashboard with form and table views
- 📂 Data stored in a local `listings.json` file
- 📸 Image upload with Multer and file previews
- 🎨 Clean UI with responsive design

---

## 🛠️ Technologies

- **Frontend:** React, React Router, Vite
- **Backend:** Node.js, Express.js, Multer
- **Storage:** Local file system (`listings.json`)
- **Styling:** CSS
- **Image Hosting:** Local folder (`/uploads`)

---

## 📁 Project Structure
krapa/
├── client/ # React frontend
│ ├── components/ # Navbar, Admin, Listings, etc.
│ ├── App.jsx # Main routes and logic
│ └── main.jsx
│
├── server/ # Express backend
│ ├── server.jsx # API logic
│ ├── listings.json # Data storage
│ └── uploads/ # Uploaded images


---

## ⚡ Getting Started

### 1️⃣ Clone the repo
```bash
git clone https://github.com/Priscillagit/real-estate-website.git
cd real-estate-website

**Start the Backend**
cd server
npm install
node server.jsx
Server will run at: http://localhost:4000

**Start the Frontend**
cd client
npm install
npm run dev
Frontend will run at: http://localhost:5173

🔑 Admin Access
Go to: http://localhost:5173/login
After login, you'll be redirected to the admin dashboard at /admin
From there, you can:
Add a listing
Upload multiple images
Edit or delete listings

📸 Image Handling
Uploaded images are saved in server/uploads
They are served at http://localhost:4000/uploads/<filename>

📌 To-Do / Improvements
Add real user authentication
Use MongoDB or PostgreSQL instead of JSON
Deploy to the cloud (e.g. Render, Vercel, or Netlify)
Add filters, pagination, and favorites

👩🏽‍💻 Author
Priscilla Dankwa
GitHub: Priscillagit


