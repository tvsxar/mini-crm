const pool = require("../db");
const router = require("express").Router();

// Get all customers
router.get('/', async (req, res) => {
    try {
        const { sort = 'desc', page = 1, search = '' } = req.query;
        const limit = 8;
        const sortOrder = sort && sort.toLowerCase() === 'asc' ? 'ASC' : 'DESC';

        let allCustomers, totalCustomers;

        if (search) {
            const searchQuery = `%${search}%`;
            allCustomers = await pool.query(`
                SELECT * FROM customers
                WHERE first_name ILIKE $1 
                  OR last_name ILIKE $1 
                  OR email ILIKE $1 
                  OR company ILIKE $1 
                  OR position ILIKE $1
                ORDER BY created_at ${sortOrder} 
                LIMIT $2 OFFSET $3`,
                [searchQuery, limit, (page - 1) * limit]);

            totalCustomers = await pool.query(`
                SELECT COUNT(*) FROM customers
                WHERE first_name ILIKE $1 
                  OR last_name ILIKE $1 
                  OR email ILIKE $1 
                  OR company ILIKE $1 
                  OR position ILIKE $1`,
                [searchQuery]);
        } else {
            allCustomers = await pool.query(`
                SELECT * FROM customers 
                ORDER BY created_at ${sortOrder} 
                LIMIT $1 OFFSET $2`, 
                [limit, (page -1) * limit]);

            totalCustomers = await pool.query(" SELECT COUNT(*) FROM customers");
        }

        const total = parseInt(totalCustomers.rows[0].count, 10);

        res.json({
            customers: allCustomers.rows,
            totalPages: Math.ceil(total / limit),
            totalCustomers: total,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Server Error" })
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
        res.status(500).json({ error: "Server Error" })
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
        res.status(500).json({ error: "Server Error" })
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
        res.status(500).json({ error: "Server Error" })
    }
})

module.exports = router;