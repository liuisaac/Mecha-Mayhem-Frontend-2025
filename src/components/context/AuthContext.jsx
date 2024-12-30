"use client"

import React, { useEffect, useState, useContext, createContext } from "react";
import { auth } from "@/config/firebaseConfig.mjs";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";

// this component manages user state using React Context

// creates context object
export const AuthContext = createContext(undefined);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);
  
    const signup = (email, password, name) => {
        return createUserWithEmailAndPassword(auth, email, password, name)
    };
  
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
  
    const resetPassword = (email) => {
      return sendPasswordResetEmail(auth, email)
    };
  
    const updateEmail = (email) => {
     return currentUser.updateEmail(email)
    };
  
    const updatePassword = (password) => {
      return currentUser.updatePassword(password)
    };

    useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user)
      setPending(false)
     });
     return unsubscribe
    }, []);
  
    if(pending){
      return <>Loading...</>
    }
    
    // passing the data/functions we want to share with other components to access as props
    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    };

    return (
        <AuthContext.Provider
        value={value}
        >
            {children}
        </AuthContext.Provider>
    );
};