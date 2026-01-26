<<<<<<< HEAD
# Wanderlust

A full-stack web application for listing and reviewing travel destinations, built with Node.js, Express, and MongoDB.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Routes](#api-routes)
- [Contributing](#contributing)

## ✨ Features

- **User Authentication**: Secure signup/login using Passport.js with local strategy
- **Listings Management**: Create, read, update, and delete travel destination listings
- **Reviews System**: Add and manage reviews for listings
- **Session Management**: Persistent user sessions with Express Session
- **Flash Messages**: User feedback with connect-flash
- **Input Validation**: Server-side validation using Joi
- **Error Handling**: Custom error handling middleware

## 🛠 Tech Stack

**Backend:**
- Node.js
- Express.js v5.1.0
- MongoDB with Mongoose ODM

**Authentication:**
- Passport.js
- Passport-Local
- Passport-Local-Mongoose

**Template Engine:**
- EJS with EJS-Mate

**Validation:**
- Joi

**Other Libraries:**
- Express Session
- Connect Flash
- Method Override
- Cookie Parser

## 📦 Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (v4.4 or higher)
- npm (comes with Node.js)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd MAJORPROJECT
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start MongoDB**
   
   Make sure MongoDB is running on your system:
   ```bash
   # On Windows
   net start MongoDB
   
   # On macOS/Linux
   sudo systemctl start mongod
   ```

## ⚙️ Configuration

1. **Create a `.env` file** in the root directory (already created):
   ```env
   MONGO_URI=mongodb://127.0.0.1:27017/wanderlust
   SESSION_SECRET=mysupersecretcode
   PORT=8080
   ```

2. **Update MongoDB Connection** (Optional)
   
   If using MongoDB Atlas or a different database, update the `MONGO_URI` in your `.env` file:
   ```env
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/wanderlust
   ```

## 🏃 Running the Application

1. **Start the server**
   ```bash
   node app.js
   ```

2. **Access the application**
   
   Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

3. **Test the demo user endpoint**
   ```
   http://localhost:8080/demouser
   ```

## 📁 Project Structure

```
MAJORPROJECT/
├── models/              # Mongoose models
│   ├── listing.js
│   ├── reviews.js
│   └── user.js
├── routes/              # Express routes
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── views/               # EJS templates
├── public/              # Static files (CSS, JS, images)
├── utils/               # Utility functions
│   └── ExpressError.js
├── init/                # Database initialization scripts
├── classroom/           # Additional resources
├── app.js               # Main application file
├── schema.js            # Joi validation schemas
├── package.json         # Project dependencies
└── .env                 # Environment variables (not in git)
```

## 🛣 API Routes

### Listings
- `GET /listings` - Get all listings
- `POST /listings` - Create a new listing
- `GET /listings/:id` - Get a specific listing
- `PUT /listings/:id` - Update a listing
- `DELETE /listings/:id` - Delete a listing

### Reviews
- `POST /listings/:id/reviews` - Add a review to a listing
- `DELETE /listings/:id/reviews/:reviewId` - Delete a review

### User Authentication
- `GET /signup` - Signup page
- `POST /signup` - Register a new user
- `GET /login` - Login page
- `POST /login` - Authenticate user
- `GET /logout` - Logout user

## 🔒 Security Features

- Password hashing with Passport-Local-Mongoose
- Session-based authentication
- CSRF protection ready
- Input validation with Joi schemas
- Custom error handling

## 🐛 Error Handling

The application includes:
- Custom `ExpressError` class for structured error handling
- 404 page for undefined routes
- Global error handler middleware
- Validation error handling

## 📝 Validation Schemas

**Listing Schema:**
- Title (required)
- Description (required)
- Location (required)
- Country (required)
- Price (required, min: 0)
- Image (optional)

**Review Schema:**
- Rating (required, number)
- Comment (required, string)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

Your Name

## 🙏 Acknowledgments

- Express.js documentation
- MongoDB documentation
- Passport.js documentation

---

**Note:** Remember to add `.env` to your `.gitignore` file to keep your credentials secure!
=======
# Wanderlust-
A full-stack web application for listing and reviewing travel destinations, built with Node.js, Express, and MongoDB.
>>>>>>> b344f049dd527c24ec3e50978eca8856586c4991
