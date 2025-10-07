// Components
import TopBar from './components/TopBar';
import CustomersList from './components/CustomersList';
import CustomerModal from './components/CustomerModal';

// React + Context
import { CustomersProvider } from './context/CustomersContext';

function App() {

  return (
    <CustomersProvider>
      {/* Top bar with search, sort, and add new customer button */}
      <TopBar  />

      {/* List of customers with pagination */}
      <CustomersList />

      {/* Modal for adding/editing customers */}
      <CustomerModal />
    </CustomersProvider>
  )
}

export default App;
