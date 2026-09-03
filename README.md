# 🛒 GreenCart — Online Grocery Store

**GreenCart** is a full-stack **MERN-based online grocery shopping application** that allows customers to browse products, manage their cart, save delivery addresses, and place orders using **Cash on Delivery (COD)** or **Stripe Online Payments**.

The application also includes a secure **Seller/Admin Dashboard** where sellers can manage products, upload product images, and monitor customer orders.

---

## 🌐 Live Demo

| Platform             | Link                                                |
| -------------------- | --------------------------------------------------- |
| 👤 Customer Website  | https://greencart-frontend-xld9.onrender.com/       |
| 🛍️ Seller Dashboard | https://greencart-frontend-xld9.onrender.com/seller |
| ⚙️ Backend API       | https://greencart-backend-72un.onrender.com         |

---

## 🔑 Demo Seller Account

Use the following credentials to access the Seller Dashboard:

**Email**

```text
admin@example.com
```

**Password**

```text
greatstack123
```

> These credentials are provided only for demonstration and testing purposes.

---

# ✨ Features

## 👤 Customer Features

* 🔐 User Registration & Login
* 🍎 Browse grocery products
* 📂 Browse products by category
* 🔎 Product details
* 🔗 Related products
* 🛒 Add products to cart
* ➕ Increase product quantity
* ➖ Decrease product quantity
* 🗑️ Remove products from cart
* 📍 Save and manage delivery addresses
* 💵 Cash on Delivery (COD)
* 💳 Stripe Online Payment
* 🔔 Stripe Webhook payment verification
* 📦 Place orders
* 📋 View order history
* 💰 View payment status
* 🚪 Secure logout

## 🛍️ Seller/Admin Features

* 🔐 Secure Seller Authentication
* 📊 Seller Dashboard
* ➕ Add new products
* ✏️ Edit existing products
* 🗑️ Delete products
* 🖼️ Upload product images
* ☁️ Cloudinary image storage
* 📦 View product inventory
* 📋 View customer orders
* 💳 Monitor order/payment status

---

# 🛠️ Tech Stack

| Category       | Technologies            |
| -------------- | ----------------------- |
| Frontend       | React.js, Vite          |
| Styling        | Tailwind CSS            |
| Backend        | Node.js, Express.js     |
| Database       | MongoDB Atlas           |
| ODM            | Mongoose                |
| Authentication | JWT + HTTP-Only Cookies |
| Image Storage  | Cloudinary              |
| Payments       | Stripe                  |
| HTTP Client    | Axios                   |
| Notifications  | React Hot Toast         |
| Routing        | React Router            |
| Deployment     | Render                  |

---

# 🏗️ Application Architecture

```text
                    ┌─────────────────────┐
                    │      Customer       │
                    │      Browser        │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   React + Vite      │
                    │    Frontend         │
                    └──────────┬──────────┘
                               │
                         Axios / API
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Express + Node    │
                    │      Backend        │
                    └──────┬───────┬──────┘
                           │       │
                ┌──────────┘       └──────────┐
                ▼                             ▼
       ┌─────────────────┐          ┌─────────────────┐
       │ MongoDB Atlas   │          │   Cloudinary    │
       │   Database      │          │ Product Images  │
       └─────────────────┘          └─────────────────┘
                           │
                           ▼
                    ┌─────────────────┐
                    │     Stripe      │
                    │    Payments     │
                    └─────────────────┘
```

---

# 📁 Project Structure

```text
greencart-main/
│
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── seller/
│   │   │   └── ...
│   │   ├── context/
│   │   ├── pages/
│   │   │   ├── seller/
│   │   │   └── ...
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── .env
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── configs/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   └── server.js
│
└── README.md
```

---

# 🔐 Environment Variables

## Frontend

Create a `.env` file inside the `client` folder:

```env
VITE_BACKEND_URL=http://localhost:8000
VITE_CURRENCY='$'
```

### Production

```env
VITE_BACKEND_URL=https://greencart-backend-72un.onrender.com
VITE_CURRENCY='$'
```

---

## Backend

Create a `.env` file inside the `server` folder:

```env
PORT=8000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

SELLER_EMAIL=your_seller_email
SELLER_PASSWORD=your_seller_password

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

> ⚠️ **Security:** Never commit `.env` files containing real passwords, database credentials, API keys, or secret keys to GitHub.

---

# 🚀 Getting Started

Follow these steps to run GreenCart locally.

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/shubhamshrivastav1/greencart-main.git
```

Navigate into the project:

```bash
cd greencart-main
```

---

## 2️⃣ Backend Setup

Navigate to the server folder:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and configure the required environment variables.

Start the backend server:

```bash
npm run server
```

Backend will run on:

```text
http://localhost:8000
```

---

## 3️⃣ Frontend Setup

Open a new terminal and navigate to the client folder:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Create the `.env` file:

```env
VITE_BACKEND_URL=http://localhost:8000
VITE_CURRENCY='$'
```

Start the frontend:

```bash
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

---

# 🔗 Local URLs

### 👤 Customer Website

```text
http://localhost:5173/
```

### 🛍️ Seller Dashboard

```text
http://localhost:5173/seller
```

### ⚙️ Backend

```text
http://localhost:8000
```

---

# 🔒 Authentication

GreenCart uses **JWT-based authentication with HTTP-only cookies** to securely authenticate users and sellers.

### User Authentication

Users can:

* Register
* Login
* Logout
* Check authentication status
* Access protected user functionality

### Seller Authentication

Seller authentication uses:

* JWT tokens
* HTTP-only cookies
* Environment-based seller credentials
* Authentication middleware

Protected seller routes verify the `sellerToken` cookie before allowing access to seller functionality.

---

# 🖼️ Image Management

GreenCart uses **Cloudinary** for product image storage.

Instead of storing product images directly on the backend server:

```text
Seller
   ↓
Upload Product Image
   ↓
Backend
   ↓
Cloudinary
   ↓
Image URL
   ↓
MongoDB Product
```

This allows product images to be stored and served through a dedicated cloud image-storage service.

---

# 📦 Order Flow

```text
User
  │
  ▼
Browse Products
  │
  ▼
Add Products to Cart
  │
  ▼
Add Delivery Address
  │
  ▼
Checkout
  │
  ├───────────────┐
  ▼               ▼
COD           Stripe Payment
  │               │
  └───────┬───────┘
          ▼
     Order Created
          │
          ▼
   Seller Views Order
```

---

# 💳 Stripe Payment Flow

For online payments, GreenCart integrates Stripe Checkout and webhook-based payment updates.

```text
User
  │
  ▼
Checkout
  │
  ▼
Stripe Checkout
  │
  ▼
Payment
  │
  ▼
Stripe Webhook
  │
  ▼
Backend
  │
  ▼
Update Order Payment Status
```

---

# 📸 Screenshots

## 👤 Customer Side

### 🏠 Home Page

![Home Page](client/src/assets/Home.JPG)

### 🛍️ All Products

![All Products](client/src/assets/all-products_page.JPG)

### 📦 Product Details

![Product Details](client/src/assets/product_page.JPG)

### 🔗 Related Products

![Related Products](client/src/assets/related-product_page.JPG)

### 🛒 Shopping Cart

![Cart](client/src/assets/cart_page.JPG)

### 📝 Sign Up

![Sign Up](client/src/assets/sign-up_page.JPG)

### 🔐 Login

![Login](client/src/assets/login_page.JPG)

### 📦 My Orders

![My Orders](client/src/assets/my-orders_page.JPG)

---

## 🛍️ Seller/Admin Side

### 🔐 Seller Login

![Seller Login](client/src/assets/seller-login_page.JPG)

### 📊 Seller Dashboard

![Seller Dashboard](client/src/assets/seller-home_page.JPG)

### 📦 Product Management

![Seller Product List](client/src/assets/seller-productlist_page.JPG)

### 📋 Customer Orders

![Seller Orders](client/src/assets/seller-orders_page.JPG)

---

# ☁️ Deployment

GreenCart is deployed using **Render**.

### Frontend

```text
https://greencart-frontend-xld9.onrender.com/
```

### Seller Dashboard

```text
https://greencart-frontend-xld9.onrender.com/seller
```

### Backend API

```text
https://greencart-backend-72un.onrender.com
```

---

# 🔮 Future Improvements

Some planned improvements include:

* 🔎 Product search
* ⭐ Product reviews and ratings
* ❤️ Wishlist
* 🏷️ Coupon and discount system
* 🚚 Order tracking
* 📊 Sales analytics
* 💰 Revenue dashboard
* 📦 Stock notifications
* 👥 Multiple seller accounts
* 📱 Improved mobile responsiveness

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Author

## Shubham Shrivastav

Full-Stack Developer | MERN Stack Developer

**GitHub:**
https://github.com/shubhamshrivastav1

---

# ⭐ Support

If you found this project useful or interesting, please consider giving the repository a **⭐ Star** on GitHub.

Your support is greatly appreciated! ❤️
