const express = require('express');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;


app.listen(PORT, (err) => {
    if (err) {
        console.error('Error starting server:', err);
        return;
    }
    console.log(`Server is running on port ${PORT}`);
});