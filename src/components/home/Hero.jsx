"use client";

import React, { useEffect, useState } from "react";
import Loader from "./Loader";

import Day from "./hero/Day";
import Year from "./hero/Year";
import Backdrop from "./hero/Backdrop";
import Image from "next/image";

const Hero = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
                setShowContent(true);
            }, 300);
            setTimeout(() => {
                setIsLoading(false);
                setStartAnimation(true);
            }, 500);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative w-screen flex-col-centered bg-transparent">
            {isLoading && (
                <Loader fadeOut={fadeOut} />
            )}

            {/* main content */}
            <div className={`absolute top-0 sm:w-screen sm:h-[120vh] overflow-hidden hidden sm:block transition-opacity duration-500 ${fadeOut ? 'opacity-100' : 'opacity-0'}`}>
                <Backdrop />
            </div>
            
            {/* mobile view */}
            <div className="top-0 w-screen overflow-hidden sm:hidden block transition-opacity duration-500"> 
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
            </div>
            
            
            {/* desktop view */}
            <div className={`w-screen bg-transparent xl:mt-[20vh] lg:mt-[24vh] md:mt-[25vh] sm:mt-[15vh] transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                <div className="sm:w-[60vw] sm:flex-col-centered sm:h-[40vh]"/>
                <div className="sm:flex sm:flex-col items-center sm:items-end sm:justify-end 2xl:w-[calc(57vw+(1900px-100vw)*1/2)] 2xl:-ml-[calc((1900px-100vw)*1/2)] xl:w-[55vw] lg:w-[55vw] md:w-[55vw]">

                    {/* year */}
                    <Year className="order-1 sm:order-1" startYear={2019} targetYear={2025} startAnimation={startAnimation} />

                    <p className={`flex flex-row order-2 sm:order-3 sm:text-white text-[#9F9F9F] font-bebas 2xl:text-6xl text-5xl sm:absolute w-full sm:items-start justify-center 2xl:pl-[16vw] lg:pl-[12vw] md:pl-[12vw] sm:mb-[4vh] -mb-[1vh] -skew-x-12 sm:transition-opacity duration-500 ${fadeOut ? "opacity-100" : "opacity-0"} delay-[1000ms] mt-10 -mb-4`}>
                        FEBRUARY
                    </p>

                    {/* day */}
                    <Day className="mt-12 order-3 sm:order-2" startDay={22} targetDay={7} startAnimation={startAnimation} />
                </div>
            </div>

        </section>
    );
};

export default Hero;
