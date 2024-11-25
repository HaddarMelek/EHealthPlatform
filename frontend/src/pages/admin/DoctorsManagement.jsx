import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/admin/Header";
import Sidebar from "../../components/admin/Sidebar";
import Footer from "../../components/admin/Adminfooter";
import { AppContext } from "../../context/AppContext";

const DoctorsManagement = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (doctors && doctors.length > 0) {
      if (speciality) {
        setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
      } else {
        setFilterDoc(doctors);
      }
    }
  }, [doctors, speciality]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />

        {/* Main Content */}
        <main className={`flex-1 p-6 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-16"}`}>
          <h1 className="text-3xl font-bold text-blue-700 mb-6">Gestion des Médecins</h1>

          {/* Section tableau des médecins */}
          <div className="bg-white shadow-md rounded-md p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Liste des Médecins</h2>
            </div>

            {/* Liste des médecins */}
            {filterDoc.length > 0 ? (
              <div className="w-[95%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
                {filterDoc.map((item, index) => (
                  <div
                    className="relative border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 group"
                    key={index}
                  >
                    <img className="w-full h-40 object-cover bg-blue-50" src={item.image} alt={item.name} />
                    <div className="p-4">
                      <div className="flex items-center gap-2 text-sm text-green-500">
                        <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                        <p>Disponible</p>
                      </div>
                      <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                      <p className="text-gray-600 text-sm">{item.speciality}</p>
                    </div>

                    {/* Icônes d'actions */}
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-100/50 flex justify-center items-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => navigate(`/admin/viewDoctor/${item._id}`)}
                        className="w-16 h-16 bg-gray-300 hover:bg-blue-500 active:bg-blue-700 transition-colors flex justify-center items-center rounded-full"
                      >
                        <i className="fas fa-eye text-gray-700 text-4xl hover:text-white active:text-white"></i> {/* Icône œil */}
                      </button>

                      <button
                        onClick={() => console.log(`Deleting doctor ${item._id}`)}
                        className="w-16 h-16 bg-gray-300 hover:bg-blue-500 active:bg-blue-700 transition-colors flex justify-center items-center rounded-full"
                      >
                        <i className="fas fa-trash text-gray-700 text-4xl hover:text-white active:text-white"></i> {/* Icône poubelle */}
                      </button>
                    </div>
                  </div>
                ))}

                <div
                  onClick={() => navigate("/admin/addDoctor")}
                  className="relative border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 flex justify-center items-center"
                >
                  <div className="w-full h-60 flex justify-center items-center border rounded-xl relative group cursor-pointer">
                    <div className="w-16 h-16 flex justify-center items-center">
                      <i className="fas fa-plus text-gray-700 text-4xl group-hover:text-blue-500 transition-colors duration-300"></i> {/* Icône "+" */}
                    </div>

                    <div className="absolute bottom-4 text-center text-blue-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Ajouter un Médecin
                    </div>
                  </div>

                </div>
              </div>
            ) : (
              <p className="text-gray-600 text-center mt-4">Aucun médecin trouvé pour cette spécialité.</p>
            )}
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DoctorsManagement;
