"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import axios from "axios";
import { useTeamContext } from "../context/TeamsContext";
import Image from "next/image";

export default function TeamsLogin() {
    const [teamID, setTeamID] = useState("");
    const [error, setError] = useState(undefined);
    const router = useRouter();
    const { setTeamInfo } = useTeamContext();

    const handleSubmit = async (e) => {
        console.log(teamID);
        e.preventDefault(); // prevents default form submission behaviour which is reload
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/teams/get-selected-team/${teamID}`
            );
            console.log(response);

            // turn data into an array of objects to be used in the frontend
            setTeamInfo(response.data);
            
            router.push(`/teams/authenticated/${response.data.number}`);
        } catch (error) {
            if (error.response) {
                if (error.response.status === 400) {
                    console.log(error.response.data.message);
                    setError(error.response.data.message);
                }
            } else {
                console.error(`Error fetching team ${teamID}:`, error.message);
                setError(error.message);
            }
        }
    };


    return (
        <div className="w-screen relative flex flex-col items-center justify-center overflow-auto bg-white font-lexend mt-16 sm:mt-20">
            <div className="flex items-center justify-around bg-red-600 h-[25vh] md:h-[22vh] lg:h-[30vh] sticky top-0 w-full gap-x-10">
                    {/* Left Container with Image */}
                    <div className="relative w-[30vw] h-[30vw]">
                        <Image
                            src="/HexLogo.svg"
                            alt="mecha mayhem logo"
                            style={{ objectFit: "contain" }}
                            fill
                        />
                    </div>

                    {/* Right Container with "TEAMS PORTAL" */}
                    <div className="flex-1 flex justify-center items-center">
                        <div className="font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                            TEAMS PORTAL LOGIN
                        </div>
                    </div>
            </div>
            <div className="flex flex-col items-center justify-center text-black w-full h-[80vh]">
                <form className="" onSubmit={handleSubmit}>
                    {error && (
                        <div className="text-danger text-center text-red-500 mb-10">{error}</div>
                    )}
                    <div className="flex flex-col items-center">
                        <input type="text" id="teamID" name="teamID" value={teamID} className="text-white font-lexend bg-black border-2 border-gray-300 rounded w-[40vh] md:w-[50vh] p-2 h-10 mb-2" placeholder="Please Enter Your Team's ID: " onChange={(e) => setTeamID(e.target.value)} required />
                        <Button type="submit" sx={{backgroundColor: "black", color: "white", fontFamily: "font-lexend"}}>Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}