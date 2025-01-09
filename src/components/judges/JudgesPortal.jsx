"use client"
import { useState, useEffect } from 'react';
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useRouter } from 'next/navigation';
import { db, onSnapshot, doc } from '@/config/firebaseConfig.mjs';

export const JudgesPortal = () => {
    const [selectedTeams, setSelectedTeams] = useState({});
    const router = useRouter();
    const { currentUser, logout } = useAuth();

    if (!currentUser) {
        router.push("/judges/login");
    }

    useEffect(() => {
        const fetchAwards = async () => {
            try {
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/judges-portal/interview-teams`
                );

                console.log(response.data);
                setSelectedTeams(response.data);
            } catch (error) {
                console.error(`Error fetching teams selected for interview:`, error);
            }
        };
        
        const docRef = doc(db, "2025", 'teams-selected-for-interview');
        const unsub = onSnapshot(docRef, (docSnapshot) => {
            if (docSnapshot.exists()) {
                console.log("Current data: ", docSnapshot.data());
                // setTeams([docSnapshot.data()]); // Set data in state (if it's an array or single document)
            } else {
                console.log("No such document!");
            }
        });

        fetchAwards();
    }, []);

    const handleLogout = async () => {
        try {
            logout();
            console.log(currentUser);
            router.push("/judges/login");
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