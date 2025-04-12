import React, { useState } from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'; // Ensure [index.css](http://_vscodecontentref_/10) exists in the src directory
import ExpenseTable from './assets/expenseTable'; // Ensure the file exists in the assets folder
import ExpenseForm from './assets/expenseForm'; // Ensure the file exists in the assets folder
import SearchBar from './assets/searchbar'; // Ensure the file exists in the assets folder
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddExpense = (expense) => {
    const newExpense = { ...expense, id: Date.now() };
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Expense Tracker</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseTable expenses={filteredExpenses} onDeleteExpense={handleDeleteExpense} />
    </div>
  );
};

import ReactDOM from 'react-dom/client';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
