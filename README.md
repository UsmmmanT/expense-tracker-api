# Expense Tracker API

A RESTful expense tracker backend built with Node.js, Express, MongoDB, and JWT authentication.

## Features

- User registration and login
- Password hashing with `bcryptjs`
- JWT-based user authentication
- Create, view, update, and delete expenses
- MongoDB persistence through Mongoose
- Development mode with Nodemon

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token
- bcryptjs
- dotenv

## Getting Started

### Prerequisites

- Node.js 18 or newer
- MongoDB database
- npm

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/YOUR_USERNAME/expense-tracker-api.git
cd expense-tracker-api
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Do not commit `.env` to GitHub. Add it to `.gitignore`.

### Running the API

Start the server:

```bash
npm start
```

Run the server in development mode with automatic restarts:

```bash
npm run dev
```

The API runs on:

```text
http://localhost:3000
```

## API Endpoints

### Health Check

```http
GET /
```

Returns:

```text
Api working
```

### User Authentication

#### Register

```http
POST /api/user/register
Content-Type: application/json
```

Request body:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "password123"
}
```

#### Login

```http
POST /api/user/login
Content-Type: application/json
```

Request body:

```json
{
  "email": "jane@example.com",
  "password": "password123"
}
```

The register and login endpoints return a JWT token when successful.

### Expense Management

#### Add an Expense

```http
POST /api/expense/add
Content-Type: application/json
```

Request body:

```json
{
  "token": "YOUR_JWT_TOKEN",
  "title": "Groceries",
  "amount": 75.5,
  "category": "Food"
}
```

#### Get Expenses

```http
GET /api/expense/all
Content-Type: application/json
```

Request body:

```json
{
  "token": "YOUR_JWT_TOKEN"
}
```

#### Update an Expense

```http
PATCH /api/expense/update/EXPENSE_ID
Content-Type: application/json
```

Request body:

```json
{
  "title": "Updated title",
  "amount": 80,
  "category": "Food"
}
```

#### Delete an Expense

```http
DELETE /api/expense/remove/EXPENSE_ID
```

Replace `EXPENSE_ID` with the MongoDB ID of the expense.

## Project Structure

```text
.
├── config/
│   └── mongodb.js
├── controllers/
│   ├── expenseController.js
│   └── userController.js
├── middlewares/
│   └── userMiddleware.js
├── models/
│   ├── expenseModel.js
│   └── userModel.js
├── routes/
│   ├── expenseRoute.js
│   └── userRoutes.js
├── server.js
├── package.json
└── .env
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm start` | Starts the production server |
| `npm run dev` | Starts the server with Nodemon |

## Notes

- Keep your MongoDB connection string and JWT secret in `.env`.
- Use the token returned by registration or login for protected expense requests.
- This project is intended as a backend API and can be connected to a web or mobile frontend.

## License

This project is available under the ISC license.
