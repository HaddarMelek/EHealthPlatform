import React, { useContext, useState, useEffect } from "react";
import Header from "../../components/admin/Header";
import Sidebar from "../../components/admin/Sidebar";
import Footer from "../../components/admin/Adminfooter";
import { AppContext } from "../../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";


const PatientsList = () => {
    const { patients = [] } = useContext(AppContext);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Header */}
            <Header />

            <div className="flex flex-1">
                {/* Sidebar */}
                <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />

                {/* Main Content */}
                <main className={`flex-1 p-6 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-16"}`}>
                    <h1 className="text-3xl font-bold text-blue-700 mb-6">Liste des Patients Inscrits</h1>

                    {/* Section pour afficher les patients sous forme de cartes */}
                    <div className="bg-white shadow-md rounded-md p-4">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold text-gray-800">Patients Inscrits</h2>
                        </div>

                        {/* Liste des patients */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {patients.length > 0 ? (
                                patients.map((patient) => (
                                    <div
                                        key={patient.id}
                                        className="relative border border-blue-200 rounded-xl overflow-hidden bg-white shadow-lg transition-all duration-300 hover:scale-105"
                                    >
                                        <img className="w-full h-40 object-cover" src={patient.photo} alt={patient.name} />
                                        <div className="p-4">
                                            <p className="text-lg font-medium text-gray-800">{patient.name}</p>
                                            <p className="text-sm text-gray-600">Âge: {patient.age} ans</p>
                                            <p className="text-sm text-gray-600">Email: {patient.email}</p>
                                        </div>

                                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-100/50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                            <button
                                                onClick={() => alert(`Détails du patient ${patient.name}`)}
                                                className="w-16 h-16 bg-blue-500 hover:bg-blue-700 active:bg-blue-800 transition-colors text-white rounded-full flex justify-center items-center"
                                            >
                                                <FontAwesomeIcon icon={faEye} className="text-white text-2xl" />
                                            </button>
                                            <button
                                                onClick={() => alert(`Supprimer le patient ${patient.name}`)}
                                                className="w-16 h-16 bg-red-500 hover:bg-red-700 active:bg-red-800 transition-colors text-white rounded-full flex justify-center items-center"
                                            >
                                                <FontAwesomeIcon icon={faTrash} className="text-white text-2xl" />
                                            </button>
                                        </div>

                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-600 text-center mt-4">Aucun patient inscrit pour le moment.</p>
                            )}
                        </div>
                    </div>
                </main>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default PatientsList;
