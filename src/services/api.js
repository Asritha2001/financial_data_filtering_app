const BASE_URL = "https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual";

export const fetchIncomeStatements = async () => {
  const response = await fetch(`${BASE_URL}&apikey=${process.env.REACT_APP_API_KEY}`);
  if (!response.ok) throw new Error("Failed to fetch data");
  return response.json();
};
