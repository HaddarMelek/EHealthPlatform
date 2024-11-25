import React, { useState } from 'react';
import Header from '../../components/admin/Header';
import Sidebar from '../../components/admin/Sidebar';
import Footer from '../../components/admin/Adminfooter';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Analytics = () => {
  const [viewMode, setViewMode] = useState('week');

  const weeklyData = {
    labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
    datasets: [
      {
        label: 'Médecins',
        data: [50, 55, 60, 48, 52, 63, 58],
        borderColor: '#0056B3',
        backgroundColor: 'rgba(0, 86, 179, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Patients',
        data: [120, 110, 115, 130, 140, 135, 150],
        borderColor: '#C49A00',
        backgroundColor: 'rgba(196, 154, 0, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Rendez-vous',
        data: [20, 22, 25, 23, 30, 28, 35],
        borderColor: '#00A36C',
        backgroundColor: 'rgba(0, 163, 108, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Revenus',
        data: [5000, 5200, 5300, 5500, 5800, 6000, 6200],
        borderColor: '#800080',
        backgroundColor: 'rgba(128, 0, 128, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const monthlyData = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil'],
    datasets: weeklyData.datasets,
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      {/* Header */}
      <Header />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 ml-64">
          <h1 className="text-3xl font-bold text-blue-700 mb-6">Suivi des Activités</h1>

          <div className="bg-white shadow-md rounded-md p-6">
            {/* Boutons pour changer la vue */}
            <div className="flex justify-end mb-6">
              <button
                className={`px-6 py-2 font-semibold rounded-md mr-4 ${viewMode === 'week' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
                  }`}
                onClick={() => setViewMode('week')}
              >
                Par Semaine
              </button>
              <button
                className={`px-6 py-2 font-semibold rounded-md ${viewMode === 'month' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
                  }`}
                onClick={() => setViewMode('month')}
              >
                Par Mois
              </button>
            </div>

            {/* Graphe */}
            <div className="relative">
              <Line
                data={viewMode === 'week' ? weeklyData : monthlyData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { position: 'top' },
                    tooltip: { mode: 'index', intersect: false },
                  },
                  scales: {
                    x: {
                      grid: { color: 'rgba(200, 200, 200, 0.2)' },
                      ticks: { color: '#333' },
                    },
                    y: {
                      grid: { color: 'rgba(200, 200, 200, 0.2)' },
                      ticks: { color: '#333' },
                    },
                  },
                }}
              />
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Analytics;
