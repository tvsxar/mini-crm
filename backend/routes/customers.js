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
});

// Post a new customer
router.post('/', async (req, res) => {
    try {
        const { first_name, last_name, email, company, position } = req.body;
        const response = await pool.query(`INSERT INTO customers 
            (first_name, last_name, email, company, position) 
            VALUES ($1, $2, $3, $4, $5) RETURNING *`, 
            [first_name, last_name, email, company, position]);

            res.json(response.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// Put update a customer
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { first_name, last_name, email, company, position } = req.body;
        const response = await pool.query(`UPDATE customers
            SET first_name=$1, last_name=$2, email=$3, company=$4, position=$5
            WHERE customer_id = $6 RETURNING *`,
            [first_name, last_name, email, company, position, id]);

            res.json(response.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})

// Delete a customer
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const response = await pool.query("DELETE FROM customers WHERE customer_id = $1", [id]);
        res.json("Customer deleted successfully");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})

module.exports = router;