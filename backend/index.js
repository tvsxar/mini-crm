const express = require("express");
const cors = require("cors");
const pool = require("./db");
require('dotenv').config();
const customerRoutes = require("./routes/customers");

const app = express();
const port = process.env.PORT || 3999;

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));
app.use(express.json());
app.use("/customers", customerRoutes);

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to the Mini CRM API");
});

// Listening to the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})