import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white py-3 px-6 flex justify-between items-center">
      {/* Logo & Title */}
      <div className="flex items-center">
        <img src="/Images/acc_logo.png" alt="ACC Logo" className="w-10 h-10 rounded-md" />
        <h1 className="text-lg font-semibold ml-3">| Dashboard APS</h1>
      </div>

      {/* Tanggal & Profil */}
      <div className="flex items-center gap-6">
        <span className="text-sm opacity-80">Kamis, 28 November 2024</span>
        <div className="flex items-center gap-2">
          <img src="https://via.placeholder.com/40" alt="Profile" className="w-9 h-9 rounded-full border-2 border-white shadow-md" />
          <span className="text-sm font-medium">Yesaya Purwocaroko (12345)</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
