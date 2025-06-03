import React from "react";
import { Home, Menu } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 shadow-lg h-screen flex flex-col p-5">
      {/* Logo atau Header */}
      <div className="flex items-center space-x-2 mb-6">
        <Menu className="w-6 h-6 text-blue-500" />
        <h2 className="text-xl font-bold text-gray-800">Dashboard APS</h2>
      </div>
      
      {/* Menu List */}
      <ul className="space-y-4">
        <li>
          <a
            href="#"
            className="flex items-center space-x-3 text-gray-700 hover:bg-blue-100 hover:text-blue-600 p-3 rounded-lg transition-all"
          >
            <Home className="w-5 h-5" />
            <span className="font-medium">Home</span>
          </a>
        </li>
        {/* Tambahkan menu lainnya jika diperlukan */}
      </ul>
    </aside>
  );
};

export default Sidebar;
