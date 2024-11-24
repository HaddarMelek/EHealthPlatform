import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";

const AdminPanel = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // État pour la sidebar

  // Gestion de la navigation
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  // Gestion du basculement de la sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
  {/* Sidebar */}
  <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />

  {/* Contenu principal */}
  <main className="flex-1 bg-gray-100 min-h-screen pl-4 pt-8 pr-4">
    <div className="w-full max-w-7xl mx-auto">
      <h1 className="text-3xl font-semibold text-blue-700 mb-6">
        Tableau de bord de l'administration
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white shadow-md p-6 rounded-md text-center">
        <img  src="/src/assets/logmed.jpg" alt=""></img>

          <h2 className="text-2xl font-bold text-gray-800">14</h2>
          <p className="text-gray-500">Médecins</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-md text-center">
        <img  src="/src/assets/rendezVouslogo.png" alt=""></img>

          <h2 className="text-2xl font-bold text-gray-800">2</h2>
          <p className="text-gray-500">Rendez-vous</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-md text-center">
        <img  src="/src/assets/patientslogo.png" alt=""></img>

          <h2 className="text-2xl font-bold text-gray-800">5</h2>
          <p className="text-gray-500">Patients</p>
        </div>
      </div>

      {/* Recent Appointments */}
      <div className="bg-white shadow-md rounded-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Dernier rendez-vous
        </h2>
        <ul>
          {Array(4).fill("").map((_, i) => (
            <li
              key={i}
              className="flex justify-between items-center py-2 border-b last:border-none"
            >
              <div className="flex items-center">
                <img
                  src="/avatar.png"
                  alt="User"
                  className="h-10 w-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium">Khaled Toumi</p>
                  <p className="text-gray-500 text-sm">
                    Réservation le 25 janvier 2025
                  </p>
                </div>
              </div>
              <button className="text-red-500 hover:text-red-700">X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </main>
</div>

  );
};

export default AdminPanel;
