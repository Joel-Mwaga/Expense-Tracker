import React from 'react';

const ExpenseTable = ({ expenses, onDeleteExpense }) => (
  <table>
    <thead>
      <tr>
        <th>Description</th>
        <th>Category</th>
        <th>Amount</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {expenses.map((expense) => (
        <tr key={expense.id}>
          <td>{expense.description}</td>
          <td>{expense.category}</td>
          <td>${expense.amount.toFixed(2)}</td>
          <td>
            <button onClick={() => onDeleteExpense(expense.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ExpenseTable;