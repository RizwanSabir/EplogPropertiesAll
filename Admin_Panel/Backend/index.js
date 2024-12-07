require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const blogRoutes = require('./routes/Blogs'); // Adjust path as needed
const path = require('path');

// middlewares
app.use(express.json());
app.use('/uploads', express.static('uploads'));

const allowedOrigins = [
  'http://localhost:5173', // First allowed origin
  'http://localhost:3000', // First allowed origin
  
];
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) { // !origin is to allow requests with no origin (like curl or Postman)
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use('/api/blogs', blogRoutes);







// database connection and server start
connection()
  .then(() => {
    const port = process.env.PORT || 8080;
    app.listen(port, () => console.log(`Listening on port ${port}...`));
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
    process.exit(1); // Exit the process if the database connection fails
  });
