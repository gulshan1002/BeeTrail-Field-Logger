const express = require('express');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

const connectDB = require('./config/db'); // Adjust the path as necessary
connectDB(); // Connect to the database

app.listen(PORT, (err) => {
    if (err) {
        console.error('Error starting server:', err);
        return;
    }
    console.log(`Server is running on port ${PORT}`);
});