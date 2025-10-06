// Components
import TopBar from './components/TopBar';
import CustomersList from './components/CustomersList';
import CustomerModal from './components/CustomerModal';

// React
import { useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mode, setMode] = useState('add'); // 'add' or 'edit'
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [customers, setCustomers] = useState([]);
  const [sortOrder, setSortOrder] = useState('desc');

  return (
    <>
      <TopBar 
        setMode={setMode} 
        setIsModalOpen={setIsModalOpen}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder} />
      <CustomersList 
        setMode={setMode} 
        setIsModalOpen={setIsModalOpen}
        setSelectedCustomer={setSelectedCustomer}
        customers={customers}
        setCustomers={setCustomers} />
      {/* Modal for adding/editing customers */}
      <CustomerModal 
        mode={mode}
        isModalOpen={isModalOpen} 
        setIsModalOpen={setIsModalOpen}
        selectedCustomer={selectedCustomer}
        setCustomers={setCustomers} />
    </>
  )
}

export default App
