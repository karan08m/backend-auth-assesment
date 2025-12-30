# Backend Auth Assessment

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose

## Features
- User Signup
- User Login
- JWT-based authentication

## Project Structure
- src/app.js – Express app setup
- src/routes/authRoutes.js – Auth routes
- src/controllers/authController.js – Auth logic
- src/models/User.js – User schema
- server.js – Entry point

## Setup Instructions
1. Clone the repository
2. Run `npm install`
3. Create a `.env` file with:
   - PORT
   - MONGO_URI
   - JWT_SECRET
4. Run `node server.js`

## API Endpoints
- POST `/auth/signup`
- POST `/auth/login`