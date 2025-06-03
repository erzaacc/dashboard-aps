import './index.css'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1">
        <Header />
        <div className="flex">
          <Sidebar />
          <Dashboard/>
        </div>
      </div>
    </div>
  );
};

export default App
