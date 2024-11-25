import React, { useContext, useState, useEffect } from 'react';
import Header from '../../components/admin/Header';
import Sidebar from '../../components/admin/Sidebar';
import Footer from '../../components/admin/Adminfooter';
import { AppContext } from '../../context/AppContext';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useNavigate } from 'react-router-dom';

ChartJS.register(ArcElement, Tooltip, Legend);

const RevenuesPage = () => {
    const { doctors, patients } = useContext(AppContext);
    const navigate = useNavigate();

    const [totalRevenue, setTotalRevenue] = useState(0);
    const [doctorsRevenue, setDoctorsRevenue] = useState(0);
    const [patientsRevenue, setPatientsRevenue] = useState(0);

    useEffect(() => {
        const total = 10000;
        const doctorRevenue = total * 0.20;
        const patientRevenue = total - doctorRevenue;

        setTotalRevenue(total);
        setDoctorsRevenue(doctorRevenue);
        setPatientsRevenue(patientRevenue);
    }, []);

    const chartData = {
        labels: ['Médecins (20%)', 'Patients (80%)'],
        datasets: [
            {
                data: [doctorsRevenue, patientsRevenue],
                backgroundColor: ['#C49A00', '#0056B3'],
                hoverBackgroundColor: ['#B38600', '#003D80'],
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        cutout: '0%',
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: { size: 14 },
                },
            },
        },
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-200">
            {/* Header */}
            <Header />

            <div className="flex flex-1">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <main className="flex-1 p-6 transition-all duration-300 ml-64">

                    <div className="bg-white shadow-md rounded-md p-6">
                        {/* Affichage des revenus */}
                        <div className="mb-6">
                            <h2 className="text-3xl font-bold text-blue-600" >Total des Revenus</h2>
                            <p className="text-xl font-semibold text-gray-800">{totalRevenue} TND</p>
                        </div>

                        {/* Graphe Circulaire */}
                        <div className="flex justify-center items-center mb-6">
                            <div className="w-full max-w-md">
                                <Doughnut data={chartData} options={chartOptions} />
                            </div>
                        </div>

                        {/* Informations complémentaires comme boutons */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div
                                className="bg-yellow-300 hover:bg-yellow-400 cursor-pointer p-4 rounded-md transition-transform transform hover:scale-105"
                                onClick={() => navigate('/admin/revenus/doctors')}
                            >
                                <h3 className="text-xl font-semibold text-gray-800">Revenus des Médecins</h3>
                                <p className="text-2xl font-bold text-yellow-800">{doctorsRevenue} TND</p>
                                <p className="text-sm text-gray-600">Soit 20% des revenus totaux</p>
                            </div>
                            <div
                                className="bg-blue-300 hover:bg-blue-400 cursor-pointer p-4 rounded-md transition-transform transform hover:scale-105"
                                onClick={() => navigate('/admin/revenus/patients')}
                            >
                                <h3 className="text-xl font-semibold text-gray-800">Revenus des Patients</h3>
                                <p className="text-2xl font-bold text-blue-800">{patientsRevenue} TND</p>
                                <p className="text-sm text-gray-600">Soit 80% des revenus totaux</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default RevenuesPage;
