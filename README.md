<H1 align ="center" > BLOG SPACE – MERN BLOG APPLICATION </h1>
<h5 align ="center">
Fullstack open-source blogging platform built using MongoDB, Express, React & Node.js (MERN)
</h5>

<br/>

  * [Configuration and Setup](#configuration-and-setup)
  * [Key Features](#key-features)
  * [Technologies Used](#technologies-used)
      - [Frontend](#frontend)
      - [Backend](#backend)
      - [Database](#database)
  * [📸 Screenshots](#screenshots)
  * [Author](#author)


---

## Configuration and Setup

To run this project locally, simply clone or download the repository as a ZIP and extract it.

- Open the project in your preferred code editor (VS Code recommended)
- Open **two terminals** — one for Frontend and one for Backend

### **Terminal 1 → Frontend**

```

cd Frontend
npm install         # Install dependencies
npm start           # Start React app

```

### **Terminal 2 → Backend**

Go to:

```

cd Backend

```

Create a **config.env** file inside `./config` folder and add the following:

```

# --- Config.env ---

NODE_ENV = development
PORT = 5000
URI = [http://localhost:3000](http://localhost:3000)

# MongoDB

MONGO_URI = your_mongodb_connection_string

# JWT Authentication

JWT_SECRET_KEY = your_secret_key
JWT_EXPIRE = 60m
RESET_PASSWORD_EXPIRE = 3600000

# Nodemailer (Gmail SMTP)

SMTP_HOST = smtp.gmail.com
SMTP_PORT = 587
EMAIL_USERNAME = [example@gmail.com](mailto:example@gmail.com)
EMAIL_PASS = your_google_app_password

```

Then run the backend:

```

npm install      # Install backend dependencies
npm start        # Start Node/Express server

```

---

## Key Features

- User registration & login  
- Secure authentication using JWT  
- Story creation, reading, updating, deleting (CRUD)  
- Upload user profile images and story images  
- Like and unlike stories  
- Add stories to a personal Reading List  
- Comment on stories  
- Story search feature + Pagination  
- Skeleton loading effect  
- Fully responsive mobile-friendly UI  
- Custom error handling for invalid file uploads  
- Protect routes with authentication middleware  

<br/>

---

## Technologies Used

This project was created using the following technologies:

---

### Frontend

- **React.js** – UI library for building single-page applications  
- **React Hooks** – State & lifecycle handling  
- **React Router DOM** – Page routing  
- **Axios** – Making API requests  
- **CSS** – Styling  
- **React Icons** – Beautiful icons for UI  

---

### Backend

- **Node.js** – Backend JavaScript runtime  
- **Express.js** – Server framework for routing & middleware  
- **Mongoose** – MongoDB object modeling  
- **express-async-handler** – Async error handling  
- **jsonwebtoken (JWT)** – Authentication tokens  
- **bcryptjs** – Password hashing  
- **Nodemailer** – Email sending (Forgot Password, notifications)  
- **dotenv** – Manage environment variables  
- **multer** – File uploads (images only)  
- **slugify** – Create URL-friendly slugs  
- **CORS** – Cross-origin resource sharing  

---

### Database

- **MongoDB (Atlas / Local)** – Stores:
  - Users  
  - Stories  
  - Comments  
  - Likes  
  - Reading lists  
  - Uploaded images  

---

## 📸 Screenshots

---
![WhatsApp Image 2025-11-25 at 12 03 19_5cd73509](https://github.com/user-attachments/assets/cb9382ec-c12f-4abe-b153-cef4e115a21b)
---
![WhatsApp Image 2025-11-25 at 12 03 59_9b11230a](https://github.com/user-attachments/assets/14016dbb-22f7-4a92-97c2-700323be3a46)
---
![WhatsApp Image 2025-11-25 at 12 04 12_a3d610a1](https://github.com/user-attachments/assets/c24c0946-9392-44e4-9245-026ea53dbac5)
---
![WhatsApp Image 2025-11-25 at 12 05 11_aba2b347](https://github.com/user-attachments/assets/9f326dec-f4e8-4306-8e97-51751da24c68)
---
![WhatsApp Image 2025-11-25 at 12 05 57_6e544022](https://github.com/user-attachments/assets/1d6f6694-6ce4-4363-b544-04420d4703b8)
---
![WhatsApp Image 2025-11-25 at 12 06 08_5b8f84bc](https://github.com/user-attachments/assets/7c1d2a27-1240-4b02-a94b-ddfb1e82fed5)
---
![WhatsApp Image 2025-11-25 at 12 06 39_e1780c76](https://github.com/user-attachments/assets/ff87e0a7-b0a5-4af4-a501-63d2c80a7a38)
---
![WhatsApp Image 2025-11-25 at 12 08 34_68758d70](https://github.com/user-attachments/assets/95587bd2-bae7-4f03-bf07-1695f437061b)
---
![WhatsApp Image 2025-11-25 at 12 08 46_a746acd5](https://github.com/user-attachments/assets/4311bd81-143c-484c-ba01-214c3dc2822e)
---
![WhatsApp Image 2025-11-25 at 12 11 03_e7465c65](https://github.com/user-attachments/assets/1d6486da-93df-4d17-b66e-f3d5708b1dd4)
---
![WhatsApp Image 2025-11-25 at 23 43 36_3afca2c6](https://github.com/user-attachments/assets/43908c84-05b6-4f83-a37a-3c1b4fd25475)
---

## Author

**Palle Sai Sowjanya**  
Final-Year IT Student   
---
**Manju Sri S**
Final-Year IT Student 
---
**Manish Kumar N K**
Final-Year IT Student
---



```


