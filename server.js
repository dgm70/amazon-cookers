const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Root Route
app.get("/", (req, res) => {
  res.send("Hello! Your app is working!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

