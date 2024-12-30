"use client"
import { useState } from 'react';
import { useAuth } from "../context/AuthContext";
import { redirect } from 'next/navigation';

export const JudgesPortal = () => {
    // const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();

    if (!currentUser) {
        redirect("/judges/login");
    }

    const handleLogout = async () => {
        try {
            logout();
            console.log(currentUser);
            redirect("/judges/login");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        currentUser && (
            <div className="h-screen flex items-center justify-center">
                <p className="mr-5">This is the Judges Portal, if you can see this you're logged in.</p>
                <button onClick={handleLogout}>Sign out</button>
            </div>
        )
    )
};