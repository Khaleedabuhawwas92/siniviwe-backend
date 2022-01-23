const express = require("express");
const db = require("./db");

// Create express instnace
const app = express();
const port = 3333;

// Init body-parser options (inbuilt with express)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Require & Import API routes

const articles = require("./routes/articles");

// Use API Routes

app.use(articles);

// Export the server middleware
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = {
  path: "/api",
  handler: app,
};
