# Elisi Backend

This is the backend for the Elisi MERN stack project.

## Setup

1. Install dependencies:
   ```
   npm install
   ```
2. Start the development server:
   ```
   npm run dev
   ```
   Or start the production server:
   ```
   npm start
   ```

## Configuration
- MongoDB connection string defaults to `mongodb://localhost:27017/elisi`. Set the `MONGO_URI` environment variable to override.
- Server runs on port `5000` by default. Set the `PORT` environment variable to override.

## API Endpoints
- `GET /` — Health check
- `GET /api/example` — Example endpoint

## Folder Structure
- `src/index.js` — Main server file

## Requirements
- Node.js
- MongoDB

---

For frontend setup, see the corresponding frontend folder.
