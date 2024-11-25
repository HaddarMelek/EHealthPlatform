import React, { useState } from "react";
import { FaHome, FaUserMd, FaCalendarAlt, FaUser, FaWallet, FaChartLine, FaBars } from "react-icons/fa";

const Sidebar = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleDashboardClick = () => {
    setIsSidebarOpen(false);
  };

  return (

    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`h-screen ${isSidebarOpen ? "w-64" : "w-16"
          } bg-blue-50 shadow-md fixed top-0 left-0 transition-all duration-300`}
      >
        {/* Logo et bouton */}
        <div className="p-4 flex items-center justify-between border-b border-gray-200">
          {isSidebarOpen && (
            <div className="flex items-center space-x-3">
              <img src="/assets/logo.png" alt="Logo" className="h-10" />
              <h1 className="text-lg font-bold text-blue-700">Dawini</h1>
            </div>
          )}
          <button
            onClick={toggleSidebar}
            className="text-blue-700 text-xl hover:bg-blue-100 p-2 rounded-md"
          >
            <FaBars />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6">
          <ul className="space-y-2">
            <li>
              <a
                className={`flex items-center px-4 py-3 text-blue-700 hover:bg-blue-100 transition-colors rounded-md ${!isSidebarOpen ? "justify-center" : ""
                  }`}
                onClick={toggleSidebar}
              >
                <FaHome className="text-lg" />
                {isSidebarOpen && <span className="font-medium ml-3">Tableau de bord</span>}
              </a>
            </li>
            <li>
              <a
                href="/admin/doctors"
                className={`flex items-center px-4 py-3 text-gray-700 hover:bg-blue-100 transition-colors rounded-md ${!isSidebarOpen ? "justify-center" : ""
                  }`}
              >
                <FaUserMd className="text-lg" />
                {isSidebarOpen && <span className="font-medium ml-3">Liste des médecins</span>}
              </a>
            </li>


            <li>
              <a
                href="/admin/appointments"
                className={`flex items-center px-4 py-3 text-gray-700 hover:bg-blue-100 transition-colors rounded-md ${!isSidebarOpen ? "justify-center" : ""
                  }`}
              >
                <FaCalendarAlt className="text-lg" />
                {isSidebarOpen && <span className="font-medium ml-3">Rendez-vous</span>}
              </a>
            </li>
            <li>
              <a
                href="/admin/PatientsList"
                className={`flex items-center px-4 py-3 text-gray-700 hover:bg-blue-100 transition-colors rounded-md ${!isSidebarOpen ? "justify-center" : ""
                  }`}
              >
                <FaUser className="text-lg" />
                {isSidebarOpen && <span className="font-medium ml-3">Liste des patients</span>}
              </a>
            </li>
            <li>
              <a
                href="/admin/revenues"
                className={`flex items-center px-4 py-3 text-gray-700 hover:bg-blue-100 transition-colors rounded-md ${!isSidebarOpen ? "justify-center" : ""
                  }`}
              >
                <FaWallet className="text-lg" />
                {isSidebarOpen && <span className="font-medium ml-3">Consulter les revenus</span>}
              </a>
            </li>
            <li>
              <a
                href="/admin/analytics"
                className={`flex items-center px-4 py-3 text-gray-700 hover:bg-blue-100 transition-colors rounded-md ${!isSidebarOpen ? "justify-center" : ""
                  }`}
              >
                <FaChartLine className="text-lg" />
                {isSidebarOpen && <span className="font-medium ml-3">Analyse des activités</span>}
              </a>
            </li>

          </ul>
        </nav>
      </aside>

      {!isSidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="text-blue-700 fixed top-4 left-4 text-xl p-2 rounded-md bg-white shadow-md"
        >
          <FaBars />
        </button>
      )}
    </div>
  );
};

export default Sidebar;
