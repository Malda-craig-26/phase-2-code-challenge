import { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    category: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.amount) {
      onAddExpense(formData);
      setFormData({ name: '', amount: '', category: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Expense Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
      />
      <input
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
