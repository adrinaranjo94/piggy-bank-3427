import { createContext, useState } from "react";
import { movements } from "../data/data";
export const BankContext = createContext();

const initialState = {
  transactions: movements,
};
export const BankProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(initialState.transactions);

  const removeTransaction = (id) => {
    const tempTransactions = [...transactions].filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(tempTransactions);
  };
  return (
    <BankContext.Provider value={{ transactions, removeTransaction }}>
      {children}
    </BankContext.Provider>
  );
};
