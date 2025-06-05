# Eumax - Digital Marketing Agency Website

A modern, responsive web application for Eumax Digital Marketing Agency built with React and Node.js.

## Technology Stack

### Frontend
- React 18+ with Vite
- Tailwind CSS for styling
- PostCSS for CSS processing
- ESLint for code quality

### Backend
- Node.js
- Express.js
- MySQL Database
- CORS for cross-origin requests

## Setup Instructions

### Prerequisites
- Node.js v18 or higher
- MySQL 8.0 or higher
- Git

### Frontend Setup
1. Clone the repository and navigate to the client directory:
```powershell
cd client
```

2. Install dependencies:
```powershell
npm install
```

3. Start the development server:
```powershell
npm run dev
```
The frontend will be available at `http://localhost:5173`

### Backend Setup
1. Navigate to the server directory:
```powershell
cd server
```

2. Install dependencies:
```powershell
npm install
```

3. Create a `.env` file in the server directory with the following variables:
```env
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=eumax_db
PORT=3000
```

4. Initialize the database:
```powershell
mysql -u root -p < db/schema.sql
```

5. Start the server:
```powershell
npm start
```
The backend will be available at `http://localhost:3000`

## API Documentation

### Services API

#### GET /api/services
Retrieves all services.

**Response**
```json
[
  {
    "id": 1,
    "title": "Digital Marketing",
    "description": "Comprehensive digital marketing solutions"
  }
]
```

### Contact API

#### POST /api/contact
Submit a contact form message.

**Request Body**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'm interested in your services"
}
```

**Response**
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

## Project Structure
```
client/                 # Frontend React application
├── src/
│   ├── components/    # React components
│   ├── Common/        # Shared utilities
│   └── assets/        # Static assets
server/                # Backend Node.js application
├── controllers/       # Request handlers
├── routes/           # API routes
├── config/           # Configuration files
└── db/               # Database schemas
```

## Development

- Use `npm run dev` in the client directory for hot-reload development
- Use `npm run build` to create a production build
- Follow the ESLint configuration for consistent code style
