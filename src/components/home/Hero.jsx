"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Backdrop from "./hero/Backdrop";
import Day from "./hero/Day";
import Year from "./hero/Year";

const Hero = () => {
    const [fade, setFade] = useState(false);

    useEffect(() => {
        setFade(true);
    }, []);

    return (
        <section className="relative w-screen flex-col-centered bg-transparent">
            <div className="absolute top-0 w-screen overflow-hidden">
                <Backdrop />
            </div>
            <div className="w-screen xl:mt-[20vh] lg:mt-[24vh] md:mt-[25vh] sm:mt-[25vh] mt-[25vh]">
                <div className="w-[60vw] flex-col-centered h-[40vh]"/>
                <div className="flex flex-col items-end justify-end relative 2xl:w-[calc(57vw+(1900px-100vw)*1/2)] 2xl:-ml-[calc((1900px-100vw)*1/2)] xl:w-[55vw] lg:w-[55vw]">
                    <Year startYear={2019} targetYear={2025} />
                    <Day startDay={22} targetDay={7} />
                    <p className={`text-white font-bebas text-6xl absolute w-full flex-row-start pl-[16vw] mb-[4vh] -skew-x-12 ${fade ? "opacity-100" : "opacity-0"} transition duration-500 delay-[1000ms]`}>
                        FEBRUARY
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
