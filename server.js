const express = require('express');
const bodyParser = require('body-parser');
const user_controller = require('./controller/user_controller');
require('dotenv').config();
const connectDB = require('./dbconnect');

const app = express();
const PORT = process.env.PORT || 1440;

// Middleware
app.use(bodyParser.json());

// Database connection
connectDB();

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to our project');
});

// Routes
app.use('/api', user_controller);


const update_patient = require('./controller/update_patient');
app.use('/api', update_patient);


// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});