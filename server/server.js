const express = require("express");
const path = require("path");

const app = express();

// Allow JSON body
app.use(express.json());

// Serve website
app.use(express.static(path.resolve(__dirname, "../tpc-pharma")));

// API route
app.post("/api/inquiry", (req, res) => {
  console.log("New Inquiry Received:");
  console.log(req.body);

  res.json({ success: true });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});