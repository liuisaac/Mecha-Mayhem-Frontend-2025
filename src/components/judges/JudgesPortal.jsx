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
        // // updating state
        // if (newInterviewStatus) {
        //     // adding to state
        //     setInterviewedTeams([...interviewedTeams, teamID]);
        // } else {
        //     // removing from state
        //     setInterviewedTeams(interviewedTeams.filter(team => team.id !== teamID));
        // }

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
                        <div className="flex items-center justify-around bg-red-600 h-[15vw] w-full absolute top-0 gap-x-10">
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
                        <div className="flex flex-row items-center justify-center text-black w-full gap-x-40 text-xl">
                            <div className="flex flex-col items-center w-[30vw]">
                                <div>High School Division</div>
                                <div className="flex justify-between w-full mt-5">
                                    <div className="flex-1 text-center font-bold">Team</div>
                                    <div className="flex-1 text-center font-bold">Status</div>
                                    <div className="flex-1 text-center font-bold">Interviewed</div>
                                </div>
                                {highSchoolTeams.map(hsTeam => {
                                    return (
                                        <div className="flex justify-between w-full">
                                            <div className="flex-1 text-center">{hsTeam.number}</div>
                                            <div className="flex-1 text-center">{hsTeam.status}</div>
                                            <div className="flex-1 text-center">
                                                <input
                                                    type="checkbox"
                                                    checked={hsTeam.interviewComplete}
                                                    onChange={() => handleInterviewChange(hsTeam.id, !hsTeam.interviewComplete, "HIGH SCHOOL")}
                                                    className="form-checkbox h-5 w-5 text-blue-600"
                                                />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="flex flex-col items-center w-[30vw]">
                                <div>Middle School Division</div>
                                <div className="flex justify-between w-full mt-5">
                                    <div className="flex-1 text-center font-bold">Team</div>
                                    <div className="flex-1 text-center font-bold">Status</div>
                                    <div className="flex-1 text-center font-bold">Interviewed</div>
                                </div>
                                {middleSchoolTeams.map(msTeam => {
                                    return (
                                        <div className="flex justify-between w-full">
                                            <div className="flex-1 text-center">{msTeam.number}</div>
                                            <div className="flex-1 text-center">{msTeam.status}</div>
                                            <div className="flex-1 text-center">
                                                <input
                                                    type="checkbox"
                                                    checked={msTeam.interviewComplete}
                                                    onChange={() => handleInterviewChange(msTeam.id, !msTeam.interviewComplete, "MIDDLE SCHOOL")}
                                                    className="form-checkbox h-5 w-5 text-blue-600"
                                                />
                                            </div>
                                        </div>
                                    )
                                    })}
                            </div>
                            <div className="flex flex-col items-center w-[30vw]">
                                <div>Vexu Division</div>
                                <div className="flex justify-between w-full mt-5">
                                    <div className="flex-1 text-center font-bold">Team</div>
                                    <div className="flex-1 text-center font-bold">Status</div>
                                    <div className="flex-1 text-center font-bold">Interviewed</div>
                                </div>
                                {vexuTeams.map(vexuTeam => {
                                    return (
                                        <div className="flex justify-between w-full">
                                            <div className="flex-1 text-center">{vexuTeam.number}</div>
                                            <div className="flex-1 text-center">{vexuTeam.status}</div>
                                            <div className="flex-1 text-center">
                                                <input
                                                    type="checkbox"
                                                    checked={vexuTeam.interviewComplete}
                                                    onChange={() => handleInterviewChange(vexuTeam.id, !vexuTeam.interviewComplete, "VEXU")}
                                                    className="form-checkbox h-5 w-5 text-blue-600"
                                                />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div>
                        <Button onClick={fetchSelectedTeams} sx={{backgroundColor: "blue", color: "black", fontWeight: "bold", fontSize: "2rem",padding: "12px 24px", borderRadius: "8px",}}>REFRESH</Button>
                        </div>
                    </div>
            )
        )
    }
};