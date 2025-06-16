import React, { useEffect, useState } from "react";
import TicketDetailChart from "./TicketDetailChart";
import DoughnutChart from "./DoughnutChart";

const Dashboard = () => {
  const getToday = () => {
    const today = new Date();
    return today.toISOString().split("T")[0]; // Format: YYYY-MM-DD
  };

  const [startDate, setStartDate] = useState(getToday());
  const [endDate, setEndDate] = useState(getToday());
  const [filter, setFilter] = useState({ start: getToday(), end: getToday() });

  const handleSearch = () => {
    if (startDate && endDate) {
      setFilter({ start: startDate, end: endDate });
      console.log("Search clicked. Start:", startDate, "| End:", endDate);
    } else {
      alert("Silakan isi kedua tanggal terlebih dahulu.");
    }
  };

  const handleReset = () => {
    const today = getToday();
    setStartDate(today);
    setEndDate(today);
    setFilter({ start: today, end: today });
    console.log("Reset clicked. Reset to today:", today);
  };

  // Menjalankan handleSearch saat halaman pertama kali dibuka
  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <main className="w-full h-full space-y-6">
      {/* Filter Tanggal */}
      <section className="bg-white p-3 rounded-lg">
        <h2 className="mb-3 text-2xl font-bold text-blue-800 tracking-wide">
          Dashboard APS
        </h2>
        <h5 className="mb-3 text-gray-700 font-medium">Filter Tanggal :</h5>
        <div className="flex flex-wrap items-center gap-4">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <p className="px-2 py-2">to</p>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleSearch}
            className="bg-violet-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Search
          </button>
          <button
            onClick={handleReset}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-red-700 hover:text-white transition"
          >
            Reset
          </button>
        </div>
      </section>

      {/* Chart Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-xl h-full flex justify-center items-center">
          <DoughnutChart startDate={filter.start} endDate={filter.end} />
        </div>
        <div className="bg-white p-5 rounded-xl h-full flex justify-center items-center">
          <TicketDetailChart startDate={filter.start} endDate={filter.end} />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
