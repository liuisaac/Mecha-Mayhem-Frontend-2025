"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import axios from "axios";
import { useTeamContext } from "../context/TeamsContext";

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
        <div className="w-screen h-screen flex flex-col items-center justify-center mt-10 relative overflow-auto">
            <form className="flex flex-col items-center justify-center w-[30%] h-[80%] bg-black" onSubmit={handleSubmit}>
                {error && (
                    <div className="text-danger text-red-500 mb-10">{error}</div>
                )}
                <input type="text" id="teamID" name="teamID" value={teamID} className="text-black border-2 border-gray-300 rounded w-[100%] p-2 h-10" placeholder="Please Enter Your Team's ID: " onChange={(e) => setTeamID(e.target.value)} required />
                <Button type="submit" sx={{backgroundColor: "white", color: "black", fontFamily: "font-saira"}}>Submit</Button>
            </form>
        </div>
    )
}