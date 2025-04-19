import React from 'react';

const TransactionList = ({ transactions, onDelete }) => {
  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          // <li key={t._id}>
          //   {t.date} - {t.description} - ${t.amount} [{t.category}]
          //   <button onClick={() => onDelete(t._id)}>Delete</button>
          // </li>
          <li key={transaction._id} className="p-4 bg-gray-800 rounded-lg shadow-md m-1 flex justify-between items-center">
  <div>
    <p className="text-white font-medium">{transaction.description}</p>
    <p className="text-gray-400 text-sm">{transaction.date} - {transaction.category}</p>
  </div>
  <div className="text-right">
    <p className="text-green-400 font-semibold">${transaction.amount}</p>
    <button
      onClick={() => onDelete(transaction._id)}
      className="mt-2 text-sm text-red-500 hover:underline"
    >
      Delete
    </button>
  </div>
</li>

        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
