import { addNewCustomer, updateCustomer } from '../utilities/api';
import { useState, useContext } from 'react';

import closeIcon from '../assets/close-outline.svg';

import CustomersContext from '../context/CustomersContext';

function CustomerModal() {
    const {modalState, setModalState, setCustomers} = useContext(CustomersContext);
    const { isOpen: isModalOpen, mode, selectedCustomer } = modalState;

    if (!isModalOpen) return null;

    // State for form fields
    const [firstName, setFirstName] = useState(mode === 'edit' ? selectedCustomer.first_name : '');
    const [lastName, setLastName] = useState(mode === 'edit' ? selectedCustomer.last_name : '');
    const [email, setEmail] = useState(mode === 'edit' ? selectedCustomer.email : '');
    const [company, setCompany] = useState(mode === 'edit' ? selectedCustomer.company : '');
    const [position, setPosition] = useState(mode === 'edit' ? selectedCustomer.position : '');

    function closeModal() {
        setModalState({
            ...modalState,
            isOpen: false,
            selectedCustomer: null
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const newCustomer = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            company: company,
            position: position
        };

        if (mode === 'add') {
            try {
                await addNewCustomer(newCustomer);
                closeModal();
                setCustomers(prev => [...prev, newCustomer]);
            } catch (err) {
                console.error(err.message);
            }
        } else if (mode === 'edit') {
            try {
                await updateCustomer(selectedCustomer.customer_id, newCustomer);
                closeModal();
                setCustomers(prev => prev.map(customer => 
                    customer.customer_id === selectedCustomer.customer_id ? newCustomer : customer
                ))
            } catch (err) {
                console.error(err.message);
            }
        }
            
    }
    
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-4 max-w-xl mx-auto shadow-sm">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-800">{mode == 'add' ? 'Add New Customer' : 'Edit Customer'}</h2>
    
                    <button className='cursor-pointer' 
                    onClick={() => closeModal()}>
                        <img src={closeIcon} alt="close" className='w-8 h-8' />
                    </button>
                </div>

                <form>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                        <input type="text" placeholder='First Name' className='bg-gray-100 text-gray-800 text-sm rounded-xl px-4 py-2
                        outline-none w-full' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        <input type="text" placeholder='Last Name' className='bg-gray-100 text-gray-800 text-sm rounded-xl px-4 py-2
                        outline-none w-full' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>

                    <div className='grid grid-cols-1 gap-4 mt-4'>
                        <input type="email" placeholder='Email' className='bg-gray-100 text-gray-800 text-sm rounded-xl px-4 py-2
                        outline-none w-full mt-4' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="text" placeholder='Company' className='bg-gray-100 text-gray-800 text-sm rounded-xl px-4 py-2
                        outline-none w-full mt-4' value={company} onChange={(e) => setCompany(e.target.value)} />
                        <input type="text" placeholder='Position' className='bg-gray-100 text-gray-800 text-sm rounded-xl px-4 py-2
                        outline-none w-full mt-4' value={position} onChange={(e) => setPosition(e.target.value)} />
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-6 font-medium">
                        <button type='button' className='cursor-pointer rounded-xl bg-gray-100 p-2 hover:bg-gray-300'
                        onClick={() => closeModal()}>
                            Cancel
                        </button>

                        <button type="submit" className='cursor-pointer rounded-xl bg-black text-white p-2 hover:bg-black/80'
                        onClick={(e) => handleSubmit(e)}>
                            {mode === 'add' ? 'Add' : 'Update'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CustomerModal;