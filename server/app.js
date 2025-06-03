const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes");


const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the APS Dashboard API");
});

app.use("/api/v1", router);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
