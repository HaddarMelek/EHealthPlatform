import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";

const AdminPanel = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [counts, setCounts] = useState({
    medecins: 0,
    rendezVous: 0,
    patients: 0,
  });

  const targetCounts = {
    medecins: 14,
    rendezVous: 2,
    patients: 5,
  };

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) => {
        const newCounts = { ...prevCounts };
        let allReached = true;

        for (const key in targetCounts) {
          if (newCounts[key] < targetCounts[key]) {
            newCounts[key] += 1;
            allReached = false;
          }
        }

        if (allReached) {
          clearInterval(interval);
        }

        return newCounts;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-16"}`}>
        <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
      </div>

      {/* Contenu principal */}
      <div
        className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-30" : "ml-12"
          } p-3`}
      >
        <h1 className="text-3xl font-semibold text-blue-700">
          Tableau de bord de l'administration
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Carte Médecins */}
          <div className="bg-white shadow-md p-2 rounded-md flex items-center">
            <img
              src="/src/assets/logmed.jpg"
              alt="Logo Médecins"
              className="w-12 h-12 object-contain rounded-full mr-4"
            />
            <div className="text-left">
              <h2 className="text-2xl font-bold text-gray-800">
                {counts.medecins}
              </h2>
              <p className="text-gray-500">Médecins</p>
            </div>
          </div>

          {/* Carte Rendez-vous */}
          <div className="bg-white shadow-md p-2 rounded-md flex items-center">
            <img
              src="/src/assets/rendezVouslogo.png"
              alt="Logo Rendez-vous"
              className="w-12 h-12 object-contain rounded-full mr-4"
            />
            <div className="text-left">
              <h2 className="text-2xl font-bold text-gray-800">
                {counts.rendezVous}
              </h2>
              <p className="text-gray-500">Rendez-vous</p>
            </div>
          </div>

          {/* Carte Patients */}
          <div className="bg-white shadow-md p-2 rounded-md flex items-center">
            <img
              src="/src/assets/patientslogo.png"
              alt="Logo Patients"
              className="w-12 h-12 object-contain rounded-full mr-4"
            />
            <div className="text-left">
              <h2 className="text-2xl font-bold text-gray-800">
                {counts.patients}
              </h2>
              <p className="text-gray-500">Patients</p>
            </div>
          </div>
        </div>

        {/* Derniers rendez-vous */}
        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Derniers rendez-vous
          </h2>
          <ul>
            {Array(4)
              .fill("")
              .map((_, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center py-2 border-b last:border-none"
                >
                  <div className="flex items-center">
                    <img
                      src="/src/assets/profile_pic.png"
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
    </div>
  );
};

export default AdminPanel;
