// components/ExpenseTable.jsx
import React from 'react';

function ExpenseTable({ expenses }) {
  if (expenses.length === 0) {
    return <p>No matching expenses found.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Amount</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((exp, index) => (
          <tr key={index}>
            <td>{exp.name}</td>
            <td>${exp.amount.toFixed(2)}</td>
            <td>{exp.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
