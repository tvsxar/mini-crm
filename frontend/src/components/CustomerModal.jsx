import closeIcon from '../assets/close-outline.svg';

function CustomerModal({isModalOpen, setIsModalOpen}) {
    if (!isModalOpen) return null;

    function closeModal() {
        setIsModalOpen(false);
    }
    
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-4 max-w-xl mx-auto shadow-sm">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-800">Add New Customer</h2>
    
                    <button className='cursor-pointer' 
                    onClick={() => closeModal()}>
                        <img src={closeIcon} alt="close" className='w-8 h-8' />
                    </button>
                </div>

                <form>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                        <input type="text" placeholder='First Name' className='bg-gray-100 text-gray-800 text-sm rounded-xl px-4 py-2
                        outline-none w-full' />
                        <input type="text" placeholder='Last Name' className='bg-gray-100 text-gray-800 text-sm rounded-xl px-4 py-2
                        outline-none w-full' />
                    </div>

                    <div className='grid grid-cols-1 gap-4 mt-4'>
                        <input type="email" placeholder='Email' className='bg-gray-100 text-gray-800 text-sm rounded-xl px-4 py-2
                        outline-none w-full mt-4' />
                        <input type="text" placeholder='Company' className='bg-gray-100 text-gray-800 text-sm rounded-xl px-4 py-2
                        outline-none w-full mt-4' />
                        <input type="text" placeholder='Position' className='bg-gray-100 text-gray-800 text-sm rounded-xl px-4 py-2
                        outline-none w-full mt-4' />
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-6 font-medium">
                        <button type='button' className='cursor-pointer rounded-xl bg-gray-100 p-2 hover:bg-gray-300'
                        onClick={() => closeModal()}>
                            Cancel
                        </button>

                        <button className='cursor-pointer rounded-xl bg-black text-white p-2 hover:bg-black/80'>
                            Add Customer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CustomerModal;