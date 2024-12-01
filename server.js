const express = require('express'); // For creating the web server
const axios = require('axios'); // For making API requests
const cors = require('cors'); // To allow frontend and backend communication

const app = express();
const port = 3000; // The port number for the server

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Amazon API credentials (replace with your actual credentials)
const ACCESS_KEY = 'your-access-key';
const SECRET_KEY = 'your-secret-key';
const ASSOCIATE_TAG = 'your-associate-tag';

// Endpoint to fetch products
app.get('/products', async (req, res) => {
    const query = req.query.query || 'cookers'; // Default search query

    // Simulate Amazon API response (since the actual API uses complex signing)
    const dummyProducts = [
        { title: 'Electric Cooker', price: '$50', link: 'https://amazon.com' },
        { title: 'Pressure Cooker', price: '$80', link: 'https://amazon.com' },
    ];

    // Send the dummy products to the frontend
    res.json(dummyProducts);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
