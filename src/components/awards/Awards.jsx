"use client";

import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import Trophy23 from "./trophies/Trophy23";
import Trophy24 from "./trophies/Trophy24";
import Display from "./Display";
import axios from "axios";
import Button from "../Button";

const Awards = () => {
    const [awards2023, setAwards2023] = useState([]);
    const [awards2024, setAwards2024] = useState([]);

    useEffect(() => {
        const fetchAwards = async (year, setAwards) => {
            try {
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/awards/${year}`
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
                        <Button
                            href=""
                            className="w-[27vw] h-[10vh] bg-[#E31F2B] hover:bg-white transition duraiton-100 ease-in-out group flex-row-centered rounded-sm mt-20"
                            iconClassName="flex-row-start relative w-12 h-12"
                            src="/streams/cameraico.svg"
                            alt="mecha mayhem logo"
                            textClassName="ml-5 h-full text-center text-5xl z-10 font-bebas mt-12 text-black hover:text-black transition duration-1000 ease-in-out"
                        >
                            SEE YOUR TEAMS CLIPS
                        </Button>
                    </div>
                </aside>

                <figure className="flex-row-start w-1/2">
                    <div className="relative w-[40vw] h-[40vw] mt-12 ml-12">
                        <Image
                            src="/awards/awards.png"
                            alt="mecha mayhem logo"
                            style={{ objectFit: "contain" }}
                            fill
                        />
                    </div>
                </figure>
            </div>
            <div>
                <div className="flex-row-centered">
                    <Suspense>
                        <div className="flex flex-col gap-12 mt-12 mr-[30vw] z-10">
                            <Display data={awards2024} />
                        </div>
                        <Trophy24 />
                    </Suspense>
                </div>
                <div className="flex-row-centered mt-16">
                    <Trophy23 />
                    <div className="flex flex-col gap-12 ml-[30vw] z-10">
                        <Display data={awards2023} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Awards;
