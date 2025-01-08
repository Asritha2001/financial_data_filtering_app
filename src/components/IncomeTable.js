import React, { useState } from "react";

const IncomeTable = ({ filteredData, sortData }) => {
  const [sortConfig, setSortConfig] = useState({
    field: null,
    ascending: true
  });

  const handleSort = (field) => {
    const ascending = sortConfig.field === field ? !sortConfig.ascending : true;
    setSortConfig({ field, ascending });
    sortData(field, ascending);
  };

  const getSortIcon = (field) => {
    if (sortConfig.field !== field) return '↕';
    return sortConfig.ascending ? '↑' : '↓';
  };

  return (
    <div>
      <table className="table-auto w-full border-collapse border border-gray-400">
        <thead>
          <tr>
            <th 
              onClick={() => handleSort('date')} 
              className="border px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              Date {getSortIcon('date')}
            </th>
            <th 
              onClick={() => handleSort('revenue')} 
              className="border px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              Revenue {getSortIcon('revenue')}
            </th>
            <th 
              onClick={() => handleSort('netIncome')} 
              className="border px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              Net Income {getSortIcon('netIncome')}
            </th>
            <th className="border px-4 py-2">Gross Profit</th>
            <th className="border px-4 py-2">EPS</th>
            <th className="border px-4 py-2">Operating Income</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.date}>
              <td className="border px-4 py-2">{item.date}</td>
              <td className="border px-4 py-2">{item.revenue}</td>
              <td className="border px-4 py-2">{item.netIncome}</td>
              <td className="border px-4 py-2">{item.grossProfit}</td>
              <td className="border px-4 py-2">{item.eps}</td>
              <td className="border px-4 py-2">{item.operatingIncome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IncomeTable;
