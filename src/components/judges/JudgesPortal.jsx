"use client"
import { useState, useEffect } from 'react';
import { useAuth } from "../context/AuthContext";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { Button } from "@mui/material";
import axios from "axios";

export const JudgesPortal = () => {
    const [highSchoolTeams, setHighSchoolTeams] = useState([]);
    const [middleSchoolTeams, setMiddleSchoolTeams] = useState([]);
    const [vexuTeams, setVexuTeams] = useState([]);

    const router = useRouter();
    const { currentUser, logout } = useAuth();

    const fetchSelectedTeams = async () => {
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/judges-portal/selected-teams`,
            ); 

            let hsTeams = [], msTeams = [], vexuTeams = [], iViewTeams = [];
            const teams = Object.values(response.data).sort((team1, team2) => {
                team1.number.localeCompare(team2.number);
            });
    
            console.log(teams);
    
            teams.forEach(team => {
                if (team.level === "0") hsTeams.push(team);
                else if (team.level === "1") msTeams.push(team);
                else vexuTeams.push(team);

                if (team.interviewComplete) iViewTeams.push(team.id);
            });
    
            console.log(hsTeams);
            console.log(msTeams);
            console.log(vexuTeams);
            console.log(iViewTeams);
    
            setHighSchoolTeams(hsTeams);
            setMiddleSchoolTeams(msTeams);
            setVexuTeams(vexuTeams);
        } catch (error) {
            console.log(`Error when fetching selected teams: ${error}`);
            return undefined;
        }
    }

    useEffect(() => {
        if (!currentUser) {
            router.push("/judges/login");
        }
    }, [currentUser]);

    useEffect(() => {
        fetchSelectedTeams();

        // Set up an interval to fetch data every 30 seconds
        const intervalId = setInterval(() => {
            fetchSelectedTeams();
        }, 10000); // 30 seconds

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
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

    const handleInterviewChange = async (teamID, newInterviewStatus, level) => {
        // updating state
        let updatedTeams = [];
        switch (level) {
            case "HIGH SCHOOL":
                updatedTeams = highSchoolTeams.map(team => {
                    return team.id === teamID ? {...team, interviewComplete: newInterviewStatus} : team
                });
                setHighSchoolTeams(updatedTeams);
                break;
            case "MIDDLE SCHOOL":
                updatedTeams = middleSchoolTeams.map(team => {
                    return team.id === teamID ? {...team, interviewComplete: newInterviewStatus} : team
                });
                setMiddleSchoolTeams(updatedTeams);
                break;
            case "VEXU":
                updatedTeams = vexuTeams.map(team => {
                    return team.id === teamID ? {...team, interviewComplete: newInterviewStatus} : team
                });
                setVexuTeams(updatedTeams);
                break;
        }

        // updating db
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/judges-portal/change-interview-status`,
                {
                    teamID,
                    newInterviewStatus
                }
            );

            console.log(response);
        } catch (error) {
            console.error(`Error fetching teams data:`, error);
        }
    };

    const DivisionTable = ({divisionName, teams, handleInterviewChange, interviewComplete}) => {
        const getStatusColor = (status) => {
            switch (status) {
                case "NOT RESPONDED":
                    return "bg-gray-500";  
                case "AWAY":
                    return "bg-red-600"; 
                case "AT PIT":
                    return "bg-[#32e355]"; 
                default:
                    return "bg-gray-500";  // Default gray for unknown status
            }
        };

        // teams with interviews not complete
        if (!interviewComplete) {
            return (
                <div className="flex flex-col items-center w-[25vw]">
                    <div className="top-2">{divisionName} Division</div>
                    <div className="flex justify-between sticky w-full mt-5">
                        <div className="flex-1 text-center font-bold">Team</div>
                        <div className="flex-1 text-center font-bold">Status</div>
                        <div className="flex-1 text-center font-bold">Interviewed</div>
                    </div>
                    <div className="overflow-y-auto max-h-[50vh] w-full">
                        {teams.map(team => {
                            if (!team.interviewComplete) {
                                return (
                                    <div className="flex justify-between w-full">
                                        <div className="flex-1 text-center">{team.number}</div>
                                        {/* <div className="flex-1 text-center">{team.status}</div> */}
                                        <div className="flex-1 text-center">
                                            <span 
                                                className={`inline-block w-6 h-6 rounded-full ${getStatusColor(team.status)}`} 
                                                title={`Status: ${team.status}`}
                                            />
                                        </div>
                                        <div className="flex-1 text-center">
                                            <input
                                                type="checkbox"
                                                checked={team.interviewComplete}
                                                onChange={() => handleInterviewChange(team.id, !team.interviewComplete, divisionName)}
                                                className="form-checkbox h-5 w-5 text-blue-600"
                                            />
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="flex flex-col items-center w-[25vw]">
                    <div className="flex justify-between w-full mt-5">
                        <div className="flex-1 text-center font-bold">Interviewed Teams</div>
                    </div>
                    {teams.map(team => {
                            if (team.interviewComplete) {
                                return (
                                    <div className="flex justify-between w-full">
                                        <div className="flex-1 text-center">{team.number}</div>
                                        {/* <div className="flex-1 text-center">{team.status}</div> */}
                                        <div className="flex-1 text-center">
                                            <span 
                                                className={`inline-block w-6 h-6 rounded-full ${getStatusColor(team.status)}`} 
                                                title={`Status: ${team.status}`}
                                            />
                                        </div>
                                        <div className="flex-1 text-center">
                                            <input
                                                type="checkbox"
                                                checked={team.interviewComplete}
                                                onChange={() => handleInterviewChange(team.id, !team.interviewComplete, divisionName)}
                                                className="form-checkbox h-5 w-5 text-blue-600"
                                            />
                                        </div>
                                    </div>
                                )
                            }
                        })}
                </div>
            )
        }
        
    };

    const divisions = [
        { name: "MIDDLE SCHOOL", teams: middleSchoolTeams },
        { name: "HIGH SCHOOL", teams: highSchoolTeams },
        { name: "VEXU", teams: vexuTeams },
    ];

    if (!currentUser) {
        return (
            <div className="w-screen h-screen flex items-center justify-center mt-10 relative overflow-auto">
            <div>
                Loading...
            </div>
        </div>)
    } else {
        return (
            currentUser && (
                <div className="w-screen h-[100vh] relative flex flex-col items-center justify-center overflow-auto bg-white font-lexend mt-20">
                        <div className="flex items-center justify-around bg-red-600 h-[30vh] w-full absolute top-0 gap-x-10">
                            <div classname="relative w-[20vw] h-28">
                                <Image
                                    src="/HexLogo.svg"
                                    alt="mecha mayhem logo"
                                    style={{ objectFit: "contain" }}
                                    fill
                                />
                            </div>
                            <div className="font-bold text-7xl">
                                JUDGES PORTAL
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-center text-black w-full gap-x-20 text-xl">
                            {divisions.map((division, index) => (
                                <DivisionTable
                                    key={index}
                                    divisionName={division.name}
                                    teams={division.teams}
                                    handleInterviewChange={handleInterviewChange}
                                    interviewComplete={false}
                                />
                            ))}
                        </div>
                        {/* interview complete section below */}
                        <div className="flex flex-row items-center justify-center text-black w-full gap-x-20 text-xl">
                                {divisions.map((division, index) => (
                                    <DivisionTable
                                        key={index}
                                        divisionName={division.name}
                                        teams={division.teams}
                                        handleInterviewChange={handleInterviewChange}
                                        interviewComplete={true}
                                    />
                                ))}
                        </div>
                        <div className="flex justify-center items-center">
                            <Button onClick={fetchSelectedTeams} sx={{backgroundColor: "blue", color: "black", fontWeight: "bold", fontSize: "2rem",padding: "12px 24px", borderRadius: "8px",}}>REFRESH</Button>
                            <Button onClick={handleLogout} sx={{backgroundColor: "blue", color: "black", fontWeight: "bold", fontSize: "2rem",padding: "12px 24px", borderRadius: "8px",}}>SIGN OUT</Button>
                        </div>
                    </div>
            )
        )
    }
};