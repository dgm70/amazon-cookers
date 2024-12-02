const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Root Route
app.get("/", (req, res) => {
  res.send("Hello! Your app is working!");
});

// Test route to check environment variables
app.get("/test", (req, res) => {
    res.json({
      accessKey: process.env.AWS_ACCESS_KEY_ID,   // AWS Key from Render
      secretKey: process.env.AWS_SECRET_ACCESS_KEY, // AWS Secret from Render
      region: process.env.REGION,                 // AWS Region from Render
      endpoint: process.env.ENDPOINT,             // Endpoint if used from Render
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

