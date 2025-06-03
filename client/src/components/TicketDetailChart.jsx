import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const TicketDetailChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const startDate = "2025-05-31"; // kamu bisa bikin form untuk dynamic date nanti
      const endDate = "2025-05-31";

      try {
        const response = await fetch(`/api/v1/ticket/top-module?startDate=${startDate}&endDate=${endDate}`)
        const result = await response.json();

        if (result.data && Array.isArray(result.data)) {
          const labels = result.data.map(item => item.name || "Unknown");
          const dataCounts = result.data.map(item => item.total_tickets);

          setChartData({
            labels,
            datasets: [
              {
                label: "Total Tickets",
                data: dataCounts,
                backgroundColor: "#9932CC",
                borderColor: "black",
                borderWidth: 1,
                barThickness: 22,
              },
            ],
          });
        } else {
          console.error("Invalid data format", result);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: false },
      datalabels: {
        color: "white",
        anchor: "center",
        align: "center",
        font: { weight: "bold", size: 12 },
      },
    },
    scales: {
      y: {
        ticks: {
          autoSkip: false,
          font: { size: 9 },
          color: "black",
        },
      },
      x: {
        ticks: {
          font: { size: 11 },
          color: "black",
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2 text-center">Top 10 Ticket</h2>
      <div className="h-[400px]">
        {chartData ? <Bar data={chartData} options={options} /> : <p>Loading data...</p>}
      </div>
    </div>
  );
};

export default TicketDetailChart;