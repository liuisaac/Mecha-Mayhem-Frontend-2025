"use client";

import Hex from "@/components/profile/analytics/Hex";
import Matches from "@/components/profile/analytics/Matches";
import Overview from "@/components/profile/analytics/Overview";
import Profile from "@/components/profile/Profile";
import TeamSelected from "@/components/profile/TeamSelected";
import Waves from "@/components/Waves";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
    const [teamNumber, setTeamNumber] = useState("");
    const [teamName, setTeamName] = useState("Angel");
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
                <Profile setSubmit={setTeamNumber} />
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
                    !teamNumber == "" ? "hidden" : "flex-col-centered"
                }`}
            >
                <figure
                    className={`${
                        !teamNumber == "" ? "hidden" : "flex-row-centered"
                    }`}
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

                <Overview />
                <Hex />
                <Matches />
            </div>
        </div>
    );
};

export default page;
