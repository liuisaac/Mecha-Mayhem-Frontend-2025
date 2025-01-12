"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useTeamContext } from "../context/TeamsContext";
import { Button } from "@mui/material";
import Image from "next/image";

export default function TeamsPortal() {
    const [error, setError] = useState(undefined);
    const router = useRouter();
    const { teamInfo, setTeamInfo } = useTeamContext();

    const getTeamData = async () => {
        console.log(teamInfo.id);
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/teams/get-selected-team/${teamInfo.id}`
        );
        console.log(response);

        // turn data into an array of objects to be used in the frontend
        setTeamInfo(response.data);
    };

    useEffect(() => {
        console.log(teamInfo);

        // redirect to teams login if user hasn't entered the code
        if (!teamInfo) {
            router.push("/teams/login");
        } else {
            console.log(teamInfo);
        }
    }, [teamInfo, router]);

    useEffect(() => {
        if (teamInfo && teamInfo.id) {
            console.log(teamInfo.id)
            getTeamData();

            // Set up an interval to fetch data every 30 seconds
            const intervalId = setInterval(() => {
                getTeamData();
            }, 10000); // 10 seconds

            // Cleanup function to clear the interval when the component unmounts
            return () => clearInterval(intervalId);
        }
    }, []);

    // handler to change team status
    const handleClick = async (status) => {
        const updatedTeamInfo = { ...teamInfo, status};

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
            <div className="w-screen h-[100vh] relative flex flex-col items-center justify-center overflow-auto bg-white font-lexend mt-20">
                <div className="flex items-center justify-around bg-red-600 h-[30vh] w-full absolute top-0 gap-x-10">
                    {/* Left Container with Image */}
                    <div className="relative w-[20vw] h-48">
                        <Image
                            src="/HexLogo.svg"
                            alt="mecha mayhem logo"
                            style={{ objectFit: "contain" }}
                            fill
                        />
                    </div>

                    {/* Right Container with "TEAMS PORTAL" */}
                    <div className="flex-1 flex justify-center items-center">
                        <div className="font-bold text-7xl">
                            TEAMS PORTAL
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center text-black w-full relative mt-[25vh] gap-y-5 text-3xl">
                    <div>
                        Your team: <span className="font-bold">{teamInfo.number}</span>
                    </div>
                    <div>
                        Your status:&nbsp;
                        {teamInfo.interviewComplete 
                            ? " INTERVIEW COMPLETE" 
                            : (
                                <span 
                                    className={ 
                                        teamInfo.status === "NOT RESPONDED" 
                                        ? "text-black"   // black for "NOT RESPONDED"
                                        : teamInfo.status === "AWAY" 
                                        ? "text-red-500" // red for "AWAY"
                                        : teamInfo.status === "AT PIT" 
                                        ? "text-[#32e355]" // green for "AT PIT"
                                        : ""  // default case if no matching status
                                    }
                                >
                                    CURRENTLY {teamInfo.status}
                                </span>
                            )
                        }
                    </div>
                    <div className="flex flex-row items-center justify-center mt-10 gap-x-40">
                        <Button disabled={teamInfo.interviewComplete} onClick={() => handleClick("AWAY")} sx={{backgroundColor: "red", color: "black", fontWeight: "bold", fontSize: "2rem",padding: "12px 24px", borderRadius: "8px",}}>AWAY</Button>
                        <Button disabled={teamInfo.interviewComplete} onClick={() => handleClick("AT PIT")} sx={{backgroundColor: "#32e355", color: "black", fontWeight: "bold", fontSize: "2rem",padding: "12px 24px", borderRadius: "8px",}}>AT PIT</Button>
                    </div>
                    <div className="w-[70vw] font-bold mt-5">
                        Please have at least ONE team member at your team pit if your interview status is set to <span style={{ color: "#32e355", fontWeight: "bold" }}>AT PIT</span>.
                    </div>
                    <div className="w-[70vw] font-bold mt-5">
                        Judging will happen anytime matches are running.
                    </div>
                    {/* <div className="flex flex-col font-bold gap-y-10 mt-20">
                        <div>
                            Please have at least ONE team member at your team pit if your interview status is set to <span style={{ color: "#32e355", fontWeight: "bold" }}>AT PIT</span>.
                        </div>
                        <div >
                            Judging will happen anytime matches are running.
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}