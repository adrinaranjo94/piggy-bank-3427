import { createContext, useEffect, useState } from "react";
import { movements } from "../data/data";
import { deleteMovementById, getMovements } from "../services/strapiMovements";
export const BankContext = createContext();

const initialState = {
  transactions: movements,
};
export const BankProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getMovements().then((response) => {
      setTransactions(response.data);
    });
  }, []);

  const removeTransaction = (id) => {
    const tempTransactions = [...transactions].filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(tempTransactions);
    deleteMovementById(id);
  };
  return (
    <BankContext.Provider value={{ transactions, removeTransaction }}>
      {children}
    </BankContext.Provider>
  );
};
