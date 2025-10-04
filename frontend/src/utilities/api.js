const API_URL = process.env.VITE_API_URL || 'http://localhost:3999/customers';

// Function to fetch all customers
export const getAllCustomers = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error('Error fetching customers:', err);
        return [];
    }
};

// Function to add a new customer
export const addNewCustomer = async (customer) => {
    try {
        const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customer)
        });
        const data = await response.json();
        return data;
    } catch (err) {
        console.error('Error adding customer:', err);
        return null;
    }
};

// Function to delete a customer by ID
export const deleteCustomer = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        })
        const data = await response.json();
        return data;
    } catch (err) {
        console.error('Error deleting customer:', err);
        return null;
    }
};

// Function to update a customer by ID
export const updateCustomer = async (id, updatedCustomer) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedCustomer)
        })
        const data = await response.json();
        return data;
    } catch (err) {
        console.error('Error updating customer:', err);
        return null;
    }
}

