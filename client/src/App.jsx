import './index.css';
import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

const App = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex h-screen flex-col">
      <Header onMenuClick={toggleSidebar} />
      <div className="flex flex-1">
        <Sidebar isCollapsed={isSidebarCollapsed} />
        <div className="flex-1 p-4">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default App;
