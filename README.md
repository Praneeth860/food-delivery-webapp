### Tomato - Food Delivery Website (MERN Stack) 🍔

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-Payment-008CDD?style=for-the-badge&logo=stripe&logoColor=white)

Tomato is a full-stack food delivery web app built with the MERN stack and Stripe for payments. It offers a responsive UI, secure JWT-based authentication, an admin panel for managing orders and products, and an intuitive experience for browsing and ordering food.

---

## ✨ Features
### Customer Features
- 🍽️ **Browse Menu**: Explore diverse food categories (Salads, Rolls, Desserts, Pasta, Noodles, etc.)
- 🛒 **Shopping Cart**: Add/remove items with instant UI updates
- 💳 **Secure Payments**: Integrated Stripe payment gateway for safe transactions
- 📦 **Order History**: View past orders and current order status
- 👤 **User Authentication**: Secure login and registration with JWT & bcrypt
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices

### Admin Features
- ➕ **Add Items**: Upload new food items with images and descriptions
- 📋 **Manage Inventory**: View and remove items from the menu
- 📊 **Order Management**: View all orders and update delivery status

---

## 📸 Screenshots

*Add screenshots of your application here showing the main pages: Home, Menu, Cart, Order Tracking, and Admin Panel*

---
# 🛠️ Tech Stack

## Frontend Technologies
- ⚛️ React 19 – Modern UI library
- 🎨 HTML5 & CSS3 – Semantic markup and responsive styling
- 🟨 JavaScript (ES6+) – Core programming language

## Frontend Tools & Libraries
- ⚡ Vite – Fast build tool
- 🔄 React Router DOM – Client-side routing
- 📱 React Toastify – Toast notifications
- 🧪 Axios – API requests

## Backend Technologies
- 🟢 Node.js – JavaScript runtime
- 🚂 Express.js – Web framework
- 🍃 MongoDB – NoSQL database

## Backend Tools & Libraries
- 🍃 Mongoose – ODM
- 🔐 JWT – Authentication
- 🔒 Bcrypt – Password hashing
- 💳 Stripe API – Payments
- 📁 Multer – File uploads
- ✅ Validator – Input validation
- 🔄 CORS – Cross-origin handling

---

## 📋 Prerequisites

Before running this application, make sure you have:

- 📦 **Node.js** (v14 or higher)
- 🍃 **MongoDB Atlas account** or local MongoDB installation
- 🔑 **Stripe account** for payment processing
- 🌐 **npm or yarn** package manager

---

## 🚀 Installation

### 1. 📥 Clone the repository
```bash
git clone https://github.com/Praneeth860/food-delivery-webapp.git
cd food-delivery-webapp


### 2. 🔧 Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
ATLAS_PWD=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
frontend_url=http://localhost:5173
PORT=4000
```

Start the backend server:
```bash
npm run server
```

### 3. 🎨 Frontend Setup

```bash
cd frontend
npm install
```


Start the frontend development server:
```bash
npm run dev
```

### 4. 👨‍💼 Admin Panel Setup

```bash
cd admin
npm install
npm run dev
```
### 5. 🌐 Access the Applications

⚠️ **Note:** The backend is hosted on Render (free tier), so it may take **30–60 seconds** to wake up on the first request.  
If the app doesn’t load immediately, please wait a moment and refresh the page.  
After that, open the **Customer Frontend** and **Admin Panel**.

- **Backend API**: https://food-delivery-backend-3ysn.onrender.com  
- **Customer Frontend**: https://food-delivery-webapp-alpha.vercel.app/  
- **Admin Panel**: https://food-delivery-webapp-zeoi.vercel.app/  


## 🎯 Usage

### For Customers:
1. 🏠 **Browse Menu**: Visit the home page and explore food categories
2. 🛒 **Add to Cart**: Click on items to add them to your cart
3. 📝 **Sign Up/Login**: Create an account or login to proceed with checkout
4. 💳 **Checkout**: Fill in delivery details and complete payment via Stripe
5. 📦 **Track Order**: View your order status in the "My Orders" section

### For Admins:
1. 🔐 **Access Admin Panel**: Navigate to the admin URL
2. ➕ **Add Items**: Upload new menu items with images, descriptions, and pricing
3. 📋 **Manage Menu**: View all items and remove discontinued ones
4. 📊 **Process Orders**: View incoming orders and update their status (Processing → Out for Delivery → Delivered)

## 🔐 Security Features

- 🔒 **Password Hashing**: Bcrypt with salt rounds for secure password storage
- 🎫 **JWT Authentication**: Token-based authentication for API endpoints
- ✅ **Input Validation**: Email and password validation using validator library
- 🛡️ **Protected Routes**: Middleware authentication for sensitive endpoints
- 💳 **Secure Payments**: PCI-compliant Stripe integration

---

## ⚠️ Error Handling

The application includes basic error handling:

- 🔐 **Authentication Errors**: Token verification with 401 status codes
- ✅ **Input Validation**: Email format and password strength validation
- 🔧 **Try-Catch Blocks**: Basic error catching in API endpoints
- 📝 **User Feedback**: Toast notifications for success/error messages


## 🚀 Deployment

### Backend Deployment (Render/Railway)
1. Push your code to GitHub
2. Connect your repository to Render or Railway
3. Set environment variables in the platform
4. Deploy the backend service

### Frontend Deployment (Vercel/Netlify)
1. The `vercel.json` file is already configured
2. Connect your repository to Vercel
3. Configure build settings (Vite preset)
4. Deploy with automatic SSL

---

## 🤝 Contributing

1. 🍴 Fork the repository
2. 🌟 Create a feature branch (`git checkout -b feature/amazing-feature`)
3. 💾 Commit your changes (`git commit -m 'Add some amazing feature'`)
4. 📤 Push to the branch (`git push origin feature/amazing-feature`)
5. 🔀 Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Praneeth Medicharla**
- GitHub: [Praneeth860](https://github.com/Praneeth860)
- LinkedIn: [Praneeth](www.linkedin.com/in/praneethmedicharla)

---

## ☕ Support

If you find this project useful, consider showing your support:

- If you encounter any issues or have questions, please open an issue on the GitHub repository.
- ⭐ Star the repository on [GitHub](https://github.com/Praneeth860/food-delivery-webapp)

- [![Buy Me A Coffee](https://img.shields.io/badge/-Buy%20me%20a%20coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/Praneeth_Medicharla)

---


## 📝 Additional Notes

**⚠️ Important Notes:**
- Ensure MongoDB Atlas IP whitelist includes your deployment server IP
- Store all sensitive keys in environment variables, never commit `.env` files
- Test Stripe payments in test mode before going live
- The default delivery fee is $2 (configurable in the code)
- Images are stored locally in the `uploads` folder (consider using cloud storage for production)

**🔧 Configuration:**
- Backend URL in frontend: Update `url` in `StoreContext.jsx` for production
- Admin panel backend URL: Update in `App.jsx`
- Stripe currency is set to INR (Indian Rupees) - modify in `orderController.js` if needed


Made with ❤️ by Praneeth
