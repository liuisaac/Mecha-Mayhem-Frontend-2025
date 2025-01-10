"use client"
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import { useTeamContext } from "../context/TeamsContext";
import { Button } from "@mui/material";
import Image from "next/image";

export default function TeamsPortal() {
    const [error, setError] = useState(undefined);
    const router = useRouter();
    const { teamInfo, setTeamInfo } = useTeamContext();

    useEffect(() => {
        console.log(teamInfo);

        // redirect to teams login if user hasn't entered the code
        if (!teamInfo) {
            router.push("/teams/login");
        } else {
            console.log(teamInfo);
        }
    }, [teamInfo, router]);

    // handler to change team status
    const handleClick = async (status) => {
        console.log(status);
        
        const updatedTeamInfo = { ...teamInfo, status};

        console.log(updatedTeamInfo);

        // update context
        setTeamInfo(updatedTeamInfo);

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
                 <div className="w-screen h-screen relative flex flex-col items-center justify-center overflow-auto bg-white font-lexend">
                    <div className="flex items-center justify-around bg-red-600 h-[15vw] w-full absolute top-0 gap-x-10">
                        {/* <Image
                            src="/icon.png"
                            alt="mecha mayhem logo"
                            style={{ objectFit: "contain" }}
                            fill
                        /> */}
                        <div>
                            Image
                        </div>
                        <div>
                            Team Interview Status
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center text-black w-full gap-y-5 text-3xl">
                        <div>
                            Your team: <span className="font-bold">{teamInfo.number}</span>
                        </div>
                        <div>
                            Your status: {teamInfo.status}
                        </div>
                        <div className="flex flex-row items-center justify-center mt-10 gap-x-40">
                            <Button onClick={() => handleClick("AWAY")} sx={{backgroundColor: "red", color: "black", fontWeight: "bold", fontSize: "2rem",padding: "12px 24px", borderRadius: "8px",}}>AWAY</Button>
                            <Button onClick={() => handleClick("AT PIT")} sx={{backgroundColor: "#32e355", color: "black", fontWeight: "bold", fontSize: "2rem",padding: "12px 24px", borderRadius: "8px",}}>AT PIT</Button>
                        </div>
                        <div className="flex flex-col font-bold gap-y-5">
                            <div>
                                Please have at least ONE team member at your team pit if your interview statis is set to <span style={{ color: "#32e355", fontWeight: "bold" }}>AT PIT</span>.
                            </div>
                            <div >
                                Judging will happen anytime matches are running.
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}