"use client";

import { React, useState } from "react";
const Sidebar = () => {
    const [drop, setDrop] = useState("ALL");
    const filters = {
        BROADCAST: [
            {
                title: "VURC",
                filter: "U",
            },
            {
                title: "V5RC (HS)",
                filter: "HS",
            },
            {
                title: "V5RC (MS)",
                filter: "MS",
            },
        ],
        DIVISION: [
            {
                title: "ROCKIES",
                filter: "ROCKIES",
            },
            {
                title: "PRAIRIES",
                filter: "PRAIRIES",
            },
        ],
        "MEDIA TYPE": [
            {
                title: "FULL STREAM",
                filter: "FULL",
            },
            {
                title: "CLIPPED MATCHES",
                filter: "CLIP",
            },
        ],
    };

    const switchColor = (input) => {
        let output = "";
        switch (input) {
            case "UPCOMING":
                output = "bg-blue-600";
                break;
            case "STARTING":
                output = "bg-orange-400";
                break;
            case "LIVE":
                output = "bg-red-600";
                break;
            case "COMPLETED":
                output = "bg-green-600";
                break;
            default:
                output = "bg-gray-600";
                break;
        }

        return output;
    };

    return (
        <div
            className={`overflow-x-visible z-40 w-[15vw] flex-col-centered pt-20 fixed top-0 left-0 h-screen overflow-y-scroll bg-black flex-col-centered transition-all ease-in-out duration-200`}
        >
            <div
                className={`flex-col-left mt-4 duration-100 transition-opacity ease-in-out font-bold tracking-wide w-full h-full text-dimWhite`}
            >
                {Object.entries(filters).map(([category, items]) => (
                    <div key={category} className="w-full flex-col-centered">
                        <div className="border-t-2 py-3 border-[#191B21] w-4/5">
                            <h3 className="text-[#707070] font-bebas tracking-widest text-2xl font-light ml-5">
                                {category}
                            </h3>
                            <ul className="font-lexend font-medium text-[#939393] ml-5">
                                {items.map(({ title }) => (
                                    <li key={title} className="my-4">
                                        {title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}

                <div className="w-full flex-col-centered">
                    <div className="border-t-2 py-3 border-[#191B21] w-4/5">
                        <h3 className="text-[#707070] font-bebas tracking-widest text-2xl font-light ml-5">
                            FILTER
                        </h3>
                        <ul className="font-lexend font-medium text-[#939393] ml-5 relative">
                            <li className="my-4 -ml-2 mr-3">
                                <figure className="absolute mt-2 ml-2">
                                    <div
                                        className={`${switchColor(
                                            drop
                                        )} h-4 w-4 rounded-full`}
                                    />
                                </figure>
                                <select
                                    className="block w-full bg-black
                                        border border-gray-900 
                                        py-1 pl-6 rounded leading-tight 
                                        focus:outline-none focus:bg-black focus:border-gray-500"
                                    id="dropdown"
                                    onChange={() => {
                                        setDrop(dropdown.value);
                                    }}
                                >
                                    <option>ANY STATUS </option>
                                    <option>UPCOMING</option>
                                    <option>STARTING</option>
                                    <option>LIVE</option>
                                    <option>COMPLETED</option>
                                </select>
                            </li>
                            <li className="my-4 -ml-2 mr-3">
                                <input
                                    placeholder="TEAM NUMBER"
                                    className="h-full w-full rounded-[3px] border-gray-900 bg-transparent px-2 py-1 text-md font-normal outline outline-0 transition-all border border-blue-gray-200
                                     focus:border-gray-500 placeholder:opacity-100
                                        focus:placeholder:opacity-100 placeholder:font-lexend placeholder:font-medium font-lexend"
                                />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-full flex-col-centered">
                    <div className="border-t-2 border-b-2 py-3 border-[#191B21] w-4/5">
                        <h3 className="text-[#707070] font-bebas tracking-widest text-2xl font-light ml-5">
                            SEASON
                        </h3>

                        <select
                            className="block w-full bg-black
                                        py-1 pl-2 rounded leading-tight 
                                        focus:outline-none focus:bg-black
                                         focus:border-gray-500 font-lexend 
                                         font-medium text-[#939393] mt-3"
                            // id="dropdown"
                            // onChange={() => {
                            //     setDrop(dropdown.value);
                            // }}
                        >
                            <option>ALL SEASONS</option>
                            <option>2025 HIGH STAKES</option>
                            <option>2024 OVER UNDER</option>
                            <option>2023 SPIN UP</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
