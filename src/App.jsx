import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import ExpenseSearch from './ExpenseList'
import SearchBar from './SearchBar'

function App() {
  const [expenses, setExpenses] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  }
  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <ExpenseSearch expenses={filteredExpenses} />
    </div>
  )
 
  
      
}

export default App
