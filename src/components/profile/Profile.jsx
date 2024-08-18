"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Profile = ({ setSubmit, setInfo }) => {
    const [value, setValue] = useState("");
    const [drop, setDrop] = useState("HS");

    const dropToKeyMap = {
        "Middle School": "MS",
        "High School": "HS",
        Collegiate: "UNI",
    };

    const reqTeam = async (name) => {
        try {
            const res = await axios.get(
                `http://localhost:8080/teams/${name}/${drop}/2024`
            );
            console.log(res);
            setInfo(res);
        } catch (error) {
            if (error.response) {
                console.error("Error response message:", error.response.data.error);

                if (error.response.status === 404) {
                    if (error.response.data.error == "Team not found") {
                        console.log("Team not found")
                    } else {
                        console.log("No team data for 2024")
                    }
                } else if (error.response.status === 419) {
                    console.error("Too many attempts. Please try again later.");
                } else {
                    console.error(
                        `Error: ${error.response.status} - ${error.response.data}`
                    );
                }
            } else if (error.request) {
                // The request was made but no response was received
                console.error(
                    "No response received from the server. Please check the server or network."
                );
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error("Error setting up the request:", error.message);
            }
        }
    };

    const submitTeam = async (event) => {
        event.preventDefault(); // prevent default form submission
        console.log(value);
        reqTeam(value);
        setSubmit(value);
    };

    return (
        <div className="absolute top-0 w-screen h-screen bg-transparent font-lexend flex-col-centered z-10 text-white">
            <span className="font-saira text-[10rem] -mt-[5vh]">SEARCH</span>
            <span className="text-4xl w-[35vw] text-center -mt-10">
                Search up your favourite teams and see registration status,
                match results, ranking, and highlights.
            </span>
            <form className="mt-20 flex-row-centered" onSubmit={submitTeam}>
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
                <div className="flex-row-centered mt-[30vh] absolute">
                    <div className="flex-col-centered w-[27vw] h-[10vh] bg-[#E31F2B] hover:bg-white transition duraiton-100 ease-in-out ">
                        <div className="border-[#191B21] w-4/5 flex-row-centered">
                            <figure
                                className="flex-row-start mr-4 hover:cursor-pointer"
                                onClick={submitTeam}
                            >
                                <div className="relative w-12 h-12">
                                    <Image
                                        src="/profile/gear.svg"
                                        alt="mecha mayhem logo"
                                        style={{ objectFit: "contain" }}
                                        fill
                                    />
                                </div>
                            </figure>
                            <select
                                className="block w-64 bg-transparent
                                        rounded leading-tight 
                                        focus:outline-none focus:bg-transparent
                                         focus:border-gray-500 font-bebas 
                                         font-medium text-black mt-3 text-5xl mb-2"
                                id="grade"
                                defaultValue="High School"
                                onChange={() => {
                                    setDrop(dropToKeyMap[String(grade.value)]);
                                }}
                            >
                                <option>Middle School</option>
                                <option>High School</option>
                                <option>Collegiate</option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Profile;
