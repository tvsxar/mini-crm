import { useEffect, useContext } from 'react';
import { getAllCustomers, deleteCustomer } from '../utilities/api';
import CustomersContext from '../context/CustomersContext';

import Pagination from './Pagination';

import editIcon from '../assets/pencil-sharp.svg';
import deleteIcon from '../assets/trash-outline.svg';

function CustomersList() {
    const {modalState, setModalState, customers, setCustomers, sortOrder, currentPage, 
    setCurrentPage, setTotalPages, setTotalCustomers, totalCustomers, searchQuery} = useContext(CustomersContext);

    useEffect(() => {
        async function fetchCustomers() {
            const data = await getAllCustomers(sortOrder, currentPage, searchQuery);
            setCustomers(data.customers);
            setTotalPages(data.totalPages);
            setTotalCustomers(data.totalCustomers);
        }

        fetchCustomers();
    }, [sortOrder, currentPage, searchQuery]);

    async function handleDeleteCustomer(id) {
        await deleteCustomer(id);
        setCustomers(customers.filter(customer => customer.customer_id !== id));
    }

    function handleEditCustomer(customer) {
        setModalState({
        ...modalState,
        isOpen: true,
        mode: 'edit',
        selectedCustomer: customer
      });
    }

    return (
        <div className="bg-white rounded-2xl p-4 max-w-6xl mx-auto shadow-sm">
            <table className="max-w-6xl w-full table-auto">
                <thead>
                    <tr className="border-b border-gray-200 text-gray-400">
                        <th className="text-left px-4 py-4 font-normal">First Name</th>
                        <th className="text-left px-4 py-4 font-normal">Last Name</th>
                        <th className="text-left px-4 py-4 font-normal">Email</th>
                        <th className="text-left px-4 py-4 font-normal">Company</th>
                        <th className="text-left px-4 py-4 font-normal">Position</th>
                        <th className="text-left px-4 py-4 font-normal">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {customers.map((customer) => (
                        <tr key={customer.customer_id} className='border-b border-gray-200'>
                            <td className="px-4 py-4">{customer.first_name}</td>
                            <td className="px-4 py-4">{customer.last_name}</td>
                            <td className="px-4 py-4">{customer.email}</td>
                            <td className="px-4 py-4">{customer.company}</td>
                            <td className="px-4 py-4">{customer.position}</td>
                            <td className="px-4 py-4">
                                <div className="flex gap-2">
                                    <button className="p-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition cursor-pointer"
                                    onClick={() => handleEditCustomer(customer)}>
                                        <img src={editIcon} alt="editIcon" className="w-4 h-4" />
                                    </button>
                                    <button className="p-2 bg-red-100 hover:bg-red-200 rounded-lg transition cursor-pointer"
                                    onClick={() => handleDeleteCustomer(customer.customer_id)}>
                                        <img src={deleteIcon} alt="deleteIcon" className="w-4 h-4" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="px-4 py-6 flex items-center justify-between">
                <p className='text-gray-400 font-normal'>{`Total customers: ${totalCustomers ? (totalCustomers > 999 ? `${totalCustomers/1000}K` : totalCustomers) : 0}`}</p>

                <Pagination />
            </div>
        </div>
    )
}

export default CustomersList;