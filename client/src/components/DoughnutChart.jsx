import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels"; // Plugin untuk menampilkan angka dalam chart

// Register komponen yang dibutuhkan untuk Doughnut Chart
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const DoughnutChart = () => {
  const dataValues = [30, 50, 10]; // Data jumlah
  const total = dataValues.reduce((acc, value) => acc + value, 0); // Total semua data

  const data = {
    labels: ["Closed", "Open", "Re-Open"],
    datasets: [
      {
        label: "Ticket Status",
        data: dataValues,
        backgroundColor: [
          "#4CAF50", // Green - Closed
          "#2196F3", // Blue - Open
          "#FFC107", // Yellow - Re-Open
        ],
        borderColor: ["#ffffff"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Supaya chart bisa lebih besar
    plugins: {
      legend: { position: "bottom" },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const value = tooltipItem.raw;
            const percentage = ((value / total) * 100).toFixed(1); // Hitung persen
            return `${tooltipItem.label}: ${value} (${percentage}%)`;
          },
        },
      },
      datalabels: {
        color: "white",
        font: {
          size: 16, // Lebih besar untuk lebih jelas
          weight: "bold",
        },
        formatter: (value) => {
          const percentage = ((value / total) * 100).toFixed(1);
          return `${percentage}%`;
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-3xl mx-auto"> {/* Lebar lebih besar */}
      <h2 className="text-2xl font-semibold text-gray-700 mb-10 text-center">
        Ticket Status Overview
      </h2>
      <div className="flex justify-center items-center">
        <div className="w-96 h-96"> {/* Ukuran diperbesar */}
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
