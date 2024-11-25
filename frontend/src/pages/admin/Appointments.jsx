import React, { useState, useEffect, useContext } from 'react';
import Header from '../../components/admin/Header';
import Sidebar from '../../components/admin/Sidebar';
import Footer from '../../components/admin/Adminfooter';

const Appointments = () => {
    const appointments = [
        { id: 1, patient: 'John Doe', date: '2024-11-26', time: '10:00 AM', doctor: 'Dr. John Smith', status: 'Confirmed' },
        { id: 2, patient: 'Jane Smith', date: '2024-11-26', time: '11:00 AM', doctor: 'Dr. Emily Johnson', status: 'Pending' },
        { id: 3, patient: 'Paul Turner', date: '2024-11-27', time: '02:00 PM', doctor: 'Dr. Michael Lee', status: 'Cancelled' },
    ];

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Header */}
            <Header />

            <div className="flex flex-1">
                {/* Sidebar */}
                <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />

                {/* Main Content */}
                <main className={`flex-1 p-6 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-16"}`}>
                    <h1 className="text-3xl font-bold text-blue-700 mb-6">Liste des Rendez-vous</h1>

                    {/* Section tableau des rendez-vous */}
                    <div className="bg-white shadow-md rounded-md p-4">
                        <table className="min-w-full table-auto border-collapse">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b">Patient</th>
                                    <th className="py-2 px-4 border-b">Date</th>
                                    <th className="py-2 px-4 border-b">Heure</th>
                                    <th className="py-2 px-4 border-b">Médecin</th>
                                    <th className="py-2 px-4 border-b">Statut</th>
                                    <th className="py-2 px-4 border-b">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {appointments.map((appointment) => (
                                    <tr key={appointment.id}>
                                        <td className="py-2 px-4 border-b">{appointment.patient}</td>
                                        <td className="py-2 px-4 border-b">{appointment.date}</td>
                                        <td className="py-2 px-4 border-b">{appointment.time}</td>
                                        <td className="py-2 px-4 border-b">{appointment.doctor}</td>
                                        <td className="py-2 px-4 border-b">{appointment.status}</td>
                                        <td className="py-2 px-4 border-b">
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded mr-2">
                                                Détails
                                            </button>
                                            <button className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded">
                                                Annuler
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Appointments;
