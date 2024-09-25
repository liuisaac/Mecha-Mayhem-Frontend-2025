"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Year from "./hero/Year";
import Day from "./hero/Day";

const Hero_Mobile = () => {
    const [fade, setFade] = useState(false);

    useEffect(() => {
        setFade(true);
    }, []);

    useEffect
    return (
        <div className="w-screen h-screen bg-transparent">
            <figure className="relative w-[100vw] h-[105vw] mt-2">
                <Image
                    src="/home/hero/Medallion.svg"
                    alt="background picture of a robot"
                    style={{ objectFit: "cover" }}
                    fill
                    priority
                />
            </figure>

            <h1 className="font-saira flex-col-centered w-screen text-7xl">
                <span>
                    MECHA
                </span>
                <span>
                    MAYHEM
                </span>
            </h1>

            <div className="w-screen h-96 bg-transparent">
                <div className="flex-col-centered relative w-full">
                    <Year startYear={2019} targetYear={2025} />
                    <p className={`text-[#9F9F9F] font-bebas w-full flex-row-centered text-5xl -skew-x-12 ${fade ? "opacity-100" : "opacity-0"} transition duration-500 delay-[1000ms] mt-10 -mb-4`}>
                        FEBRUARY
                    </p>
                    <Day startDay={22} targetDay={7} />
                </div>
            </div>
        </div>
    );
};

export default Hero_Mobile;
