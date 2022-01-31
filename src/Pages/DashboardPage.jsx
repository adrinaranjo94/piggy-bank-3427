import { useContext } from "react";
import { BankContext } from "../context/BankContext";

export const DashboardPage = () => {
  const { transactions, removeTransaction } = useContext(BankContext);

  const handleClickTransaction = (id) => {
    removeTransaction(id);
  };
  return (
    <div>
      {transactions.map((transaction) => (
        <p onClick={() => handleClickTransaction(transaction.id)}>
          {transaction.date}
        </p>
      ))}
    </div>
  );
};
