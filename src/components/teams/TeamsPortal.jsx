"use client"
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import { useTeamContext } from "../context/TeamsContext";
import { Button } from "@mui/material";

export default function TeamsPortal() {
    const [error, setError] = useState(undefined);
    const router = useRouter();
    const { teamInfo, setTeamInfo } = useTeamContext();

    useEffect(() => {
        // redirect to teams login if user hasn't entered the code
        if (!teamInfo) {
            router.push("/teams/login");
        } else {
            console.log(teamInfo);
        }
    }, [teamInfo.status, router]);

    // handler to change team status
    const handleClick = async (status) => {
        console.log(status);
        teamInfo.status = status;
        console.log(teamInfo);

        // update context
        setTeamInfo(teamInfo);

        // update data to send to backend
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/teams/selected-team-change-status`,
                {
                    teamID: teamInfo.id,
                    newStatus: status
                }
            );

            console.log(response);
        } catch (error) {
            console.error(`Error fetching teams data:`, error);
        }
    };

    if (!teamInfo) {
        return (
            <div className="w-screen h-screen flex items-center justify-center mt-10 relative overflow-auto">
            <div>
                Loading...
            </div>
        </div>)
    } else {
        return teamInfo && (
            <>
                 <div className="w-screen h-screen flex flex-col items-center justify-center mt-10 relative overflow-auto gap-y-10">
                    <div>
                        Your team: {teamInfo.number}
                    </div>
                    <div>
                        Your status: {teamInfo.status}
                    </div>
                    <Button onClick={() => handleClick("READY")} sx={{backgroundColor: "white", color: "black", fontFamily: "font-saira"}}>Ready</Button>
                    <Button onClick={() => handleClick("BUSY")} sx={{backgroundColor: "white", color: "black", fontFamily: "font-saira"}}>Busy</Button>
                </div>
            </>
        )
    }
}