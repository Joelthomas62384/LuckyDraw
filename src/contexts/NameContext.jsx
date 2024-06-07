"use client";

import React, { createContext, useContext, useState } from 'react';

// Create the context
const NameContext = createContext();

// Custom hook to use the NameContext
export const useNameContext = () => useContext(NameContext);

// Provider component
export const NameContextProvider = ({ children }) => {
  const [nameArray, setNameArray] = useState([]);
  const [useToast, setUseToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [winners, setWinners] = useState([]);

  // Function to add a winner to the array
  const addWinner = (winner) => {
    setWinners((prevWinners) => [...prevWinners, winner]);
  };

  // Function to add names to the name array
  const setNames = (names) => {
    setNameArray((prevNames) => [...prevNames, ...names]);
  };

  // Provider's value
  const value = {
    nameArray,
    setNameArray,
    useToast,
    setUseToast,
    toastMessage,
    setToastMessage,
    winners,
    addWinner,
    setNames,
  };

  return (
    <NameContext.Provider value={value}>
      {children}
    </NameContext.Provider>
  );
};
