import React from "react";
import { Menu } from "lucide-react";

const Header = ({ onMenuClick }) => {
  return (
    <header className="bg-blue-900 text-white px-6 py-4 shadow flex items-center justify-between">
      {/* Kiri: Menu + Logo + Title */}
      <div className="flex items-center gap-5">
        {/* Hamburger */}
        <button onClick={onMenuClick} className="p-1.5 hover:bg-blue-800 rounded-md">
          <Menu className="w-7 h-7" />
        </button>

        {/* Logo + Title */}
        <div className="flex items-center gap-2.5">
          <img
            src="/Images/acc_logo.png"
            alt="ACC Logo"
            className="w-9 h-9 rounded-md"
          />
          <h1 className="text-xl font-bold">
            | Dashboard APS
          </h1>
        </div>
      </div>

      {/* Kanan: Date + Profile */}
      <div className="flex items-center gap-5">
        <span className="text-sm text-gray-200 whitespace-nowrap">
          [Kamis, 28 November 2024]
        </span>
        <div className="flex items-center gap-2.5">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-9 h-9 rounded-full border-2 border-white shadow"
          />
          <span className="text-sm font-medium">
            Yesaya Purwocaroko (12345)
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
