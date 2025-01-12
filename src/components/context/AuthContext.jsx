"use client"

import React, { useEffect, useState, useContext, createContext } from "react";
import { auth } from "@/config/firebaseConfig.mjs";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

// this component manages user state using React Context

// creates context object
export const AuthContext = createContext(undefined);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
  
    const login = (email, password) => {
     return signInWithEmailAndPassword(auth ,email, password)
    };

    const logout = () => {
      auth.signOut().then(() => {
        console.log("User Successfully Logged Out");
      }).catch((error) => {
        `When logging out, ${error} occurred`
      });
    };
  
    useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user)
     });
     return unsubscribe
    }, []);
  
    // passing the data/functions we want to share with other components to access as props
    const value = {
        currentUser,
        login,
        logout,
    };

    return (
        <AuthContext.Provider
        value={value}
        >
            {children}
        </AuthContext.Provider>
    );
};