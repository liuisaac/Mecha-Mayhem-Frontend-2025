"use client";

import Game from "@/components/profile/analytics/Game";
import Hex from "@/components/profile/analytics/Hex";
import Matches from "@/components/profile/analytics/Matches";
import Overview from "@/components/profile/analytics/Overview";
import Profile from "@/components/profile/Profile";
import TeamSelected from "@/components/profile/TeamSelected";
import Waves from "@/components/Waves";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const page = () => {
    const [teamNumber, setTeamNumber] = useState("");
    const [teamName, setTeamName] = useState("");
    const [matches, setMatches] = useState([]);
    const [stats, setStats] = useState({
        data: {
            team_number: "",
            team_name: "",
            matches: [],
            rank: 0,
            wins: 0,
            losses: 0,
            ties: 0,
            wp: 0,
            ap: 0,
            sp: 0,
            high: 0,
            avg: 0,
            total: 0,
        },
    });

    useEffect(() => {
        if (stats.data !== undefined) {
            setTeamNumber(stats.data.team_number);
            setTeamName(stats.data.team_name);
            setMatches(stats.data.matches);
        }
    }, [stats]);

    return (
        <div className="bg-black relative">
            <div className="relative w-screen h-screen overflow-hidden">
                <Waves />
                <div className="w-full h-full bg-gradient-to-b from-transparent to-black relative" />
            </div>
            <div
                className={`${
                    teamNumber == "" ? "opacity-100" : "opacity-0"
                } transition-opacity duration-1000 ease-in-out`}
            >
                <Profile setSubmit={setTeamNumber} setInfo={setStats} />
            </div>
            <div
                className={`${
                    teamNumber == "" ? "opacity-0" : "opacity-100"
                } transition-opacity duration-1000 delay-[1200ms] ease-in-out`}
            >
                <TeamSelected
                    number={teamNumber}
                    name={teamName}
                    setSubmit={setTeamNumber}
                />
            </div>

            <div
                className={`${
                    teamNumber == ""
                        ? "opacity-0 max-h-0 overflow-hidden"
                        : "flex-col-centered opacity-100"
                } -mt-[15vh] transition duration-1000 delay-1000`}
            >
                <figure
                    className={`${
                        teamNumber == ""
                            ? "opacity-0"
                            : "flex-row-centered opacity-100"
                    } transition duration-1000 delay-1000 animate-pulse`}
                >
                    <div className="relative w-[100vw] h-28">
                        <Image
                            src="/profile/scrollCTA.svg"
                            alt="mecha mayhem logo"
                            style={{ objectFit: "contain" }}
                            fill
                        />
                    </div>
                </figure>
                

                <div
                    className={`${
                        teamNumber == "" ? "hidden" : "flex-col-centered mt-20"
                    }`}
                >
                    <Game />
                    <Overview stats={stats} />
                    <Hex stats={stats} />
                    <Matches matches={matches} />
                </div>
            </div>
        </div>
    );
};

export default page;
