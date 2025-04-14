function ExpenseTable({ expenses }) {
    return (
      <table>
        <thead>
          <tr>
            <th>Expense</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp, index) => (
            <tr key={index}>
              <td>{exp.name}</td>
              <td>{exp.amount}</td>
              <td>{exp.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default ExpenseTable;
  