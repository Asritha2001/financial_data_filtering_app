import React, { useState, useEffect } from "react";
import IncomeTable from "./components/IncomeTable";
import { fetchIncomeStatements } from "./services/api";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    minRevenue: "",
    maxRevenue: "",
    minIncome: "",
    maxIncome: "",
  });

  useEffect(() => {
    fetchIncomeStatements()
      .then((data) => {
        setData(data);
        setFilteredData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Apply filters to data
  const applyFilters = () => {
    const filtered = data.filter((item) => {
      const withinDateRange =
        (!filters.startDate || new Date(item.date) >= new Date(filters.startDate)) &&
        (!filters.endDate || new Date(item.date) <= new Date(filters.endDate));
      const withinRevenueRange =
        (!filters.minRevenue || item.revenue >= parseFloat(filters.minRevenue)) &&
        (!filters.maxRevenue || item.revenue <= parseFloat(filters.maxRevenue));
      const withinNetIncomeRange =
        (!filters.minIncome || item.netIncome >= parseFloat(filters.minIncome)) &&
        (!filters.maxIncome || item.netIncome <= parseFloat(filters.maxIncome));

      return withinDateRange && withinRevenueRange && withinNetIncomeRange;
    });
    setFilteredData(filtered);
  };

  // Handle sorting
  const sortData = (field, ascending = true) => {
    const sortedData = [...filteredData].sort((a, b) => {
      if (field === 'date') {
        return ascending 
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date);
      }
      return ascending 
        ? a[field] - b[field]
        : b[field] - a[field];
    });
    setFilteredData(sortedData);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Financial Data Filtering App</h1>
      <div className="filters mb-4">
        <input
          type="date"
          placeholder="Start Date"
          onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
          className="mr-2 p-2 border rounded"
        />
        <input
          type="date"
          placeholder="End Date"
          onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
          className="mr-2 p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Min Revenue"
          onChange={(e) => setFilters({ ...filters, minRevenue: e.target.value })}
          className="mr-2 p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Max Revenue"
          onChange={(e) => setFilters({ ...filters, maxRevenue: e.target.value })}
          className="mr-2 p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Min Net Income"
          onChange={(e) => setFilters({ ...filters, minIncome: e.target.value })}
          className="mr-2 p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Max Net Income"
          onChange={(e) => setFilters({ ...filters, maxIncome: e.target.value })}
          className="p-2 border rounded"
        />
        <button onClick={applyFilters} className="ml-2 p-2 bg-blue-500 text-white rounded">
          Apply Filters
        </button>
      </div>
      <IncomeTable 
        filteredData={filteredData} 
        sortData={sortData} 
      />
    </div>
  );
};

export default App;
