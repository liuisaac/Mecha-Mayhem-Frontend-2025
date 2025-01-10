"use client"

import React, { createContext, useState, useContext } from 'react';

// Create a context for the team information
export const TeamContext = createContext();

export const useTeamContext = () => useContext(TeamContext);

// Create the TeamProvider component which will provide the state and updater functions
export const TeamProvider = ({ children }) => {
  const [teamInfo, setTeamInfo] = useState(undefined); // The state that holds the team ID

  return (
    <TeamContext.Provider value={{ teamInfo, setTeamInfo}}>
      {children}
    </TeamContext.Provider>
  );
};