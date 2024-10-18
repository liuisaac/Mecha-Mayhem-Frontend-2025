"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Loader from "./Loader"; // Adjust the path as necessary

// Dynamically import components without SSR
const Hero_Mobile = dynamic(() => import("../mobile/Hero-Mobile"), { ssr: false });

// Import Day and Year components statically
import Day from "../hero/Day"; // Adjust the path as necessary
import Year from "../hero/Year"; // Adjust the path as necessary
import Backdrop from "../hero/Backdrop";

const Hero = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false); // State for fade out
    const [showContent, setShowContent] = useState(false); // New state for controlling content visibility
    const [startAnimation, setStartAnimation] = useState(false); // State for starting animations

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true); // Start fading out loader
            // Set a timeout to show content before loader hides
            setTimeout(() => {
                setShowContent(true); // Show content before the loader fades out
            }, 300); // Adjust this delay as needed to fit your timing
            setTimeout(() => {
                setIsLoading(false); // Hide loader after fading out
                setStartAnimation(true); // Start animations after loader fades out
            }, 500); // Duration to match the CSS transition
        }, 500); // Set loader display time
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative w-screen flex-col-centered bg-transparent">
            {isLoading && (
                <Loader fadeOut={fadeOut} /> // Pass fadeOut state
            )}
            {/* Main content */}
            <div className={`absolute top-0 w-screen h-[120vh] overflow-hidden hidden sm:block transition-opacity duration-500 ${fadeOut ? 'opacity-100' : 'opacity-0'}`}>
                <Backdrop />
            </div>

            <div className={`w-screen xl:mt-[20vh] lg:mt-[24vh] md:mt-[25vh] sm:mt-[15vh] mt-[25vh] hidden sm:block transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-[60vw] flex-col-centered h-[40vh]" />
                <div className="flex flex-col items-end justify-end relative 2xl:w-[calc(57vw+(1900px-100vw)*1/2)] 2xl:-ml-[calc((1900px-100vw)*1/2)] xl:w-[55vw] lg:w-[55vw] md:w-[55vw]">
                    <Year startYear={2019} targetYear={2025} startAnimation={startAnimation} /> {/* Pass startAnimation prop */}
                    <Day startDay={22} targetDay={7} startAnimation={startAnimation} /> {/* Pass startAnimation prop */}
                    <p className={`text-white font-bebas 2xl:text-6xl md:text-5xl absolute w-full flex-row-start 2xl:pl-[16vw] lg:pl-[12vw] md:pl-[12vw] mb-[4vh] -skew-x-12 transition-opacity duration-500 ${fadeOut ? 'opacity-100' : 'opacity-100'}`}>
                        FEBRUARY
                    </p>
                </div>
            </div>

            <div className="top-0 w-screen overflow-hidden sm:hidden block transition-opacity duration-500">
                <Hero_Mobile />
            </div>
        </section>
    );
};

export default Hero;
