import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';

function Income() {
  const { user } = useContext(AuthContext);

  const [income, setIncome] = useState(() => {
    return parseInt(JSON.parse(localStorage.getItem(user + ' Income'))) || 0;
  });

  const incomeHandler = () => {
    const prevIncome = localStorage.getItem(user + ' Income')
      ? parseInt(JSON.parse(localStorage.getItem(user + ' Income')))
      : 0;
    const newIncome = prevIncome + parseInt(income);
    localStorage.setItem(user + ' Income', JSON.stringify(newIncome));
    setIncome(newIncome);

     
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">Income Tracker</h2>

        <div className="mb-4">
          <input
            type="number"
            
            onChange={(e) => setIncome(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter income"
          />
        </div>

        <button
          onClick={incomeHandler}
          className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors"
        >
          Add Income
        </button>

        <p className="mt-4 text-gray-700 text-center">Your total income as of now is: <span className="font-bold">{JSON.parse(localStorage.getItem(user + ' Income'))}</span></p>
      </div>
    </div>
  );
}

export default Income;
