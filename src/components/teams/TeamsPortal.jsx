"use client"
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";

export default function TeamsPortal() {
    const [teamData, setTeamData] = useState({});
    const [error, setError] = useState(undefined);
    const router = useRouter();
    const params = useParams();
    const teamID = params.teamID;

    useEffect(() => {
        const fetchTeamData = async () => {
            try {
                const response = await axios.post(
                    `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/teams/selected-team-change-status/${teamID}`,
                    {
                        teamID
                    }
                );

                console.log(response);
            } catch (error) {
                console.error(`Error fetching teams data:`, error);
            }
        };

        fetchTeamData();
    }, []);


    return (
        <div className="w-screen h-screen flex items-center justify-center mt-10 relative overflow-auto">
            dshfdjsf
        </div>
    )
}