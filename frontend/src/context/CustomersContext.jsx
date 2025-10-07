import { createContext, useState } from 'react';

const CustomersContext = createContext();

function CustomersProvider({children}) {
  const [customers, setCustomers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortOrder, setSortOrder] = useState('desc');
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [modalState, setModalState] = useState({
    isOpen: false,
    mode: 'add',
    selectedCustomer: null
  });

  return (
    <CustomersContext.Provider value={{
      customers, setCustomers,
      currentPage, setCurrentPage,
      totalPages, setTotalPages,
      sortOrder, setSortOrder,
      totalCustomers, setTotalCustomers,
      modalState, setModalState
    }}>
      {children}
    </CustomersContext.Provider>
  )
}

export { CustomersProvider };
export default CustomersContext;