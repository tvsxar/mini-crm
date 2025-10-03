const pool = require("../db");
const router = require("express").Router();

// Get all customers
router.get('/', async (req, res) => {
    try {
        const allCustomers = await pool.query("SELECT * FROM customers");
        res.json(allCustomers.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})

module.exports = router;