# Financial Data Filter

A React application for filtering and sorting financial data. The app allows users to filter financial statements by date ranges, revenue ranges, and net income ranges, with the ability to sort data by different columns.

## Live Demo

[View Live Demo](https://financial-data-filtering-3b4bj0166.vercel.app/)

## Running the Project Locally

### Prerequisites

- Node.js
- React

### Installation Steps

1. Clone the repository
   ```bash
   git clone https://github.com/Asritha2001/financial_data_filtering_app
   ```
2. Go to the Project directory
   ```bash
   cd financial_data_filtering_app
   ```
3. Install dependencies
   ```bash
   npm install
   ```
4. Set Up Environment Variables: Create a .env file in the root directory (if it doesn't exist) and add your api key.
   ```bash
   REACT_APP_API_KEY=your-api-key
   ```
5. Start the server
   ```bash
   npm start
   ```
6. Open your browser and visit [http://localhost:3000](http://localhost:3000)

## Project Structure

├── src/

│ ├── components/

  │ │ └── IncomeTable.js # Table component with sorting functionality
  
│ ├── services/

  │ │ └── api.js # API service for fetching financial data
  
│ ├── App.js # Main application component with filtering logic


## Features

- Filter financial data by:
  - Date range
  - Revenue range
  - Net Income range
- Sort data by clicking column headers:
  - Date
  - Revenue
  - Net Income
- Visual indicators for sort direction

## Technologies Used

- React.js
- Tailwind CSS
- JavaScript
