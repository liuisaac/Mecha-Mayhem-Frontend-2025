"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Trophy23 from "./trophies/Trophy23";
import Trophy24 from "./trophies/Trophy24";
import Display from "./Display";
import axios from "axios";

const Awards = () => {
    const [awards2023, setAwards2023] = useState([]);
    const [awards2024, setAwards2024] = useState([]);

    useEffect(() => {
        const fetchAwards = async (year, setAwards) => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/awards/${year}`
                );
                setAwards(response.data);
            } catch (error) {
                console.error(`Error fetching awards for ${year}:`, error);
            }
        };

        fetchAwards(2023, setAwards2023);
        fetchAwards(2024, setAwards2024);
    }, []);

    return (
        <section className="w-screen flex-col-centered">
            <div className="relative w-screen h-screen flex-row-centered bg-transparent">
                <aside className="w-1/2">
                    <div className="flex-col-start ml-[11vw]">
                        <header className="font-saira text-[10rem]">
                            AWARDS
                        </header>
                        <p className="font-lexend text-3xl w-[40vw] -mt-5">
                            Explore all our custom awards, from spinning
                            trophies to unique worlds-qualifying banners
                        </p>
                        <button className="w-[27vw] h-[10vh] bg-[#E31F2B] hover:bg-white transition duraiton-100 ease-in-out group flex-row-centered rounded-sm mt-20">
                            <figure className="flex-row-start">
                                <div className="relative w-12 h-12">
                                    <Image
                                        src="/streams/cameraico.svg"
                                        alt="mecha mayhem logo"
                                        style={{ objectFit: "contain" }}
                                        fill
                                    />
                                </div>
                            </figure>
                            <h2 className="ml-5 h-full text-center text-5xl z-10 font-bebas mt-12 text-black hover:text-black transition duration-1000 ease-in-out">
                                SEE YOUR TEAMS CLIPS
                            </h2>
                        </button>
                    </div>
                </aside>

                <figure className="flex-row-start w-1/2">
                    <div className="relative w-[50vw] h-[50vw] mt-12 -ml-12">
                        <Image
                            src="/streams/newStreams.png"
                            alt="mecha mayhem logo"
                            style={{ objectFit: "contain" }}
                            fill
                        />
                    </div>
                </figure>
            </div>
            <div>
                <div className="flex-row-centered">
                    <div className="flex flex-col gap-12 mt-12 mr-[30vw]">
                        <Display data={awards2024} />
                    </div>
                    <Trophy24 />
                </div>
                <div className="flex-row-centered">
                    <Trophy23 />
                    <div className="flex flex-col gap-12 ml-[30vw]">
                        <Display data={awards2023} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Awards;
