// Importing necessary modules and components
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactsPage from './pages/ContactsPage';
import DashboardPage from './pages/DashboardPage';
import Sidebar from './components/Sidebar';

function App() {
  // Rendering the JSX
  return (
    // Set up the router component for client-side routing
    <div className='flex h-screen w-full'>
    <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<ContactsPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App; // Export the App component for use in other parts of the application
