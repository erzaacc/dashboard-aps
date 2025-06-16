import React from "react";
import { Home } from "lucide-react";
import clsx from "clsx"; // pastikan sudah install: npm install clsx

const Sidebar = ({ isCollapsed }) => {
  return (
    <aside
      className={clsx(
        "h-full bg-gray-100 shadow-lg transition-all duration-80",
        isCollapsed ? "w-35" : "w-60"
      )}
    >
      <ul className="px-3 py-6 space-y-3">
        <li>
          <a
            href="#"
            className={clsx(
              "flex items-center text-gray-700 hover:bg-blue-100 hover:text-blue-600 p-3 rounded-lg transition-all",
              isCollapsed ? "justify-center" : "space-x-3"
            )}
          >
            {/* Home icon tetap besar, tidak dipengaruhi toggle */}
            <Home className="w-5 h-5" />
            {/* Label hanya muncul jika sidebar tidak collapsed */}
            {!isCollapsed && <span className="font-medium">Home</span>}
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
