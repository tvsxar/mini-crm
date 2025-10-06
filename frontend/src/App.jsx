import TopBar from './components/TopBar';
import CustomersList from './components/CustomersList';
import CustomerModal from './components/CustomerModal';

import { useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      <TopBar />
      <CustomersList />
      <CustomerModal 
        isModalOpen={isModalOpen} 
        setIsModalOpen={setIsModalOpen} />
    </>
  )
}

export default App
