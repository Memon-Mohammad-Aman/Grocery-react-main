# 🧩 MERN Stack Grocery-Store Application

A full-featured MERN (MongoDB, Express, React, Node.js) E-Commerce application built using modern technologies, best practices, and a clean, scalable architecture.

---

## 🚀 Features

- 🔐 **JWT-based User Authentication**
- 🛍️ **Product Management (Add, Edit, Delete)**
- 🧾 **Order Management System**
- 💳 **Stripe Payment Integration**
- 📞 **SMS & WhatsApp Notifications via Twilio**
- 🛠️ **Admin Dashboard with full CRUD**
- 📊 **Analytics Panel (Optional)**
- 📦 **RESTful APIs with Express & MongoDB**

---



## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Memon-Mohammad-Aman/Grocery-react-main.git
cd Grocery-react-main
2. Backend Setup
cd server
npm install
Grocery-react-main/
├── client/                  # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── context/
│       └── App.js
├── server/                  # Node.js backend
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   └── server.js
├── .env
├── package.json
└── README.md

Create a .env file in the server folder and add:
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
Then start the backend server:
npm start
3. Frontend Setup

cd client
npm install
npm start
Frontend will run at http://localhost:3000

| Method | Endpoint            | Description                  |
| ------ | ------------------- | ---------------------------- |
| POST   | `/api/register`     | Register new user            |
| POST   | `/api/login`        | User login                   |
| GET    | `/api/products`     | Fetch all products           |
| POST   | `/api/products`     | Add new product (Admin only) |
| PUT    | `/api/products/:id` | Update product               |
| DELETE | `/api/products/:id` | Delete product               |
| POST   | `/api/orders`       | Create new order             |
| GET    | `/api/orders`       | View user orders             |

🧰 Technologies Used
Frontend: React, React Router, Context API, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB with Mongoose

Authentication: JWT (JSON Web Tokens)

Payments: Stripe API

Notifications: Twilio (SMS & WhatsApp)

Deployment (Optional):

Frontend: Vercel / Netlify

Backend: Render / Railway / Heroku

📬 Contact & Author
Name: Mohammad Aman Memon

GitHub: [@Memon-Mohammad-Aman](https://github.com/Memon-Mohammad-Aman)

LinkedIn[: Mohammad Aman Memon](https://www.linkedin.com/in/mohammad-aman-memon/)

⭐️ Show Your Support
If you like this project:

⭐️ Star this repo on GitHub

🍴 Fork it and contribute

📢 Share it with other developers



