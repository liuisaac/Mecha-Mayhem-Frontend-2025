"use client";

import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";

const Profile = ({ setSubmit }) => {
    const [value, setValue] = useState("");
    const reqTeam = async (name) => {
        try {
            const res = await axios.get(
                `https://www.robotevents.com/api/v2/teams?number%5B%5D=${name}&grade%5B%5D=High%20School&myTeams=false`
            );
            if (res.data !== null) {
                const team_id = res.data.id;
                const team_name = res.data.team_name;
            } else {
            }
        } catch (error) {
            //bad request 419 too many attempts}
        }
    };

    const submitTeam = (event) => {
        event.preventDefault(); // prevent default form submission
        console.log(value);
        setSubmit(value);
    };

    return (
        <div className="absolute top-0 w-screen h-screen bg-transparent font-lexend flex-col-centered z-10 text-white">
            <span className="font-saira text-[10rem]">SEARCH</span>
            <span className="text-4xl w-[35vw] text-center -mt-10">
                Search up your favourite teams and see registration status,
                match results, ranking, and highlights.
            </span>
            <form className="mt-10 flex-row-centered" onSubmit={submitTeam}>
                <input
                    placeholder="TEAM NUMBER"
                    className="h-full w-[50vw] rounded-full bg-black 
                    px-10 py-0 text-md font-bold text-5xl
                    outline-3 outline-white border border-3 border-white  transition-all 
                    placeholder:opacity-20 focus:placeholder:opacity-40 placeholder:font-lexend placeholder:font-bold font-lexend"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <figure
                    className="flex-row-start -ml-16 pr-4 hover:cursor-pointer"
                    onClick={submitTeam}
                >
                    <div className="relative w-12 h-12">
                        <Image
                            src="/profile/search.svg"
                            alt="mecha mayhem logo"
                            style={{ objectFit: "contain" }}
                            fill
                        />
                    </div>
                </figure>
            </form>
        </div>
    );
};

export default Profile;
