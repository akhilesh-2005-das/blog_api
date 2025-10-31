
# 🎮 Retro-Board | Full-Stack MERN Blog Project 🚀

**Retro-Board** is a complete full-stack blog application built with the **MERN stack (MongoDB, Express, React, Node.js)**.  
It was developed as a **minor project** for a full-stack development class.

The application features a **secure RESTful API backend** for authentication and blog management, paired with a **modern, responsive frontend** built using **React (Vite)** and **Tailwind CSS**.  

Users can **register**, **log in**, and perform **full CRUD (Create, Read, Update, Delete)** operations on their own posts.

---

## 🌐 Live Links & Test Credentials

### 🔗 Live Demo  
**Frontend:** [https://frontend-blog-api.onrender.com/](https://frontend-blog-api.onrender.com/)  
**Backend API:** [https://backend-blog-api-iktj.onrender.com/](https://backend-blog-api-iktj.onrender.com/)

### 🧪 Test Credentials
You can log in with:
```

Email: local@example.com
Password: 12345

````

Or create your own account!

---

## ✨ Key Features

- 🔒 **Secure User Authentication** – Full registration & login system  
- 🧂 **Password Hashing** – Uses bcryptjs for one-way encryption  
- 🪪 **JWT Authorization** – Protects routes and validates users  
- ✍️ **Full CRUD for Posts**  
  - **Create:** Logged-in users can create new blog posts  
  - **Read:** Anyone can read all posts  
  - **Update:** Only the post’s author can edit  
  - **Delete:** Only the post’s author can delete  
- 🧠 **Global State Management** – React Context API for user auth state  
- 📱 **Responsive Design** – Built with Tailwind CSS  
- 🧍 **Author-Only Permissions** – Enforced at backend level  

---

## 🛠️ Tech Stack

| Category | Technology | Description |
|-----------|-------------|-------------|
| **Frontend** | React (Vite) | JavaScript library for building UIs |
|  | React Router | Client-side routing |
|  | Tailwind CSS | Utility-first CSS framework |
|  | Axios | For HTTP requests |
|  | React Context API | Global state management |
| **Backend** | Node.js | JS runtime environment |
|  | Express.js | RESTful API framework |
|  | MongoDB | NoSQL database |
|  | Mongoose | ODM for MongoDB |
|  | JWT (jsonwebtoken) | Token-based authentication |
|  | bcryptjs | Password hashing |
| **Deployment** | Render.com | Cloud hosting for frontend & backend |

---

## 🏁 Getting Started (Local Development)

Follow these steps to run the project locally 👇

### ✅ Prerequisites
- [Node.js](https://nodejs.org/) (includes npm)
- [MongoDB Atlas](https://www.mongodb.com/atlas) account or local MongoDB
- [Postman](https://www.postman.com/) *(optional for API testing)*

---

### 1️⃣ Backend Setup (`/server` folder)

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name/server

# Install dependencies
npm install
````

Create a `.env` file inside `/server`:

```env
MONGO_URI=your_mongodb_connection_string_here
JWT_SECRET=your_super_strong_secret_key_here
PORT=5000
```

Run the backend:

```bash
# Start server with nodemon
npm run dev
```

Your backend API will be running at 👉 **[http://localhost:5000](http://localhost:5000)**

---

### 2️⃣ Frontend Setup (`/client` folder)

```bash
# Open a new terminal
cd ../client

# Install dependencies
npm install
```

In your Axios config file (`client/src/api/api.js`), set:

```js
baseURL: 'http://localhost:5000/api'
```

Run the frontend:

```bash
npm run dev
```

Your React app will open at 👉 **[http://localhost:5173](http://localhost:5173)**

---

## 📖 API Endpoints

All routes are prefixed with `/api`.

### 🔐 Auth Routes

| Method | Endpoint         | Description              |
| ------ | ---------------- | ------------------------ |
| POST   | `/auth/register` | Register a new user      |
| POST   | `/auth/login`    | Log in and receive a JWT |

### 📝 Post Routes

| Method | Endpoint     | Access                | Description        |
| ------ | ------------ | --------------------- | ------------------ |
| GET    | `/posts`     | Public                | Get all blog posts |
| POST   | `/posts`     | Private               | Create a new post  |
| PUT    | `/posts/:id` | Private (Author only) | Update a post      |
| DELETE | `/posts/:id` | Private (Author only) | Delete a post      |

---

## 💾 Deployment

The app is deployed on **Render.com** for both the frontend and backend.
You can fork the repository and connect it to your own Render account for free deployment.

---

## 💡 Future Enhancements

* 🗂️ Add post categories & tags
* 💬 Comment system
* 🖼️ Image upload support
* 🔍 Search & filter posts

---

## 🧑‍💻 Author

**Akhilesh Kumar**
📧 *Feel free to reach out for collaboration or feedback!*

---



