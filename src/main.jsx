import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import ExpenseForm from './assets/expenseForm';
import ExpenseTable from './assets/expenseTable';
import SearchBar from './assets/searchBar';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddExpense = (expense) => {
    const newExpense = { ...expense, id: Date.now() };
    setExpenses((prev) => [...prev, newExpense]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <header>
        <h1>Expense Tracker</h1>
        <p>Welcome to Expense Tracker! Manage your expenses efficiently by adding, viewing, and filtering your expenses.</p>
      </header>
      <div className="content">
        <div className="form-container">
          <ExpenseForm onAddExpense={handleAddExpense} />
        </div>
        <div className="table-container">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <ExpenseTable expenses={filteredExpenses} onDeleteExpense={handleDeleteExpense} />
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
