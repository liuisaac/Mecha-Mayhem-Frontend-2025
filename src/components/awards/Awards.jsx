"use client";

import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import Trophy23 from "./trophies/Trophy23";
import Trophy24 from "./trophies/Trophy24";
import Display from "./Display";
import axios from "axios";
import Button from "../ui/Button";

const Awards = () => {
    const [awards2023, setAwards2023] = useState([]);
    const [awards2024, setAwards2024] = useState([]);

    const [currentYear, setCurrentYear] = useState("2024");

    const handleSelectChange = (event) => {
        setCurrentYear(event.target.value);
    };

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

    const AWARDS_MAP = {
        "2023":
            (<div className="mt-16 lg:mt-0">
                <div className="z-10 relative">
                    <Display data={awards2023} />
                </div>
                <div className="sm:flex opacity-70 hidden"><Trophy23 /></div>
            </div>),

        "2024":
            (<div className="mt-16 lg:mt-0">
                <div className="z-10 relative">
                    <Display data={awards2024} />
                </div>
                <div className="sm:flex opacity-70 hidden"><Trophy24 /></div>
            </div>),
    }

    return (
        <section className="relative lg:flex lg:flex-row lg:justify-center w-screen bg-transparent mt-[64px] flex flex-col items-center">
            <h1 className="font-saira text-6xl pt-8 lg:hidden">AWARDS</h1>
            <p className="font-lexend text-xl px-8 py-2 text-center lg:hidden">
                Unforgettable custom awards for each year. Check out our past winners below.
            </p>

            <div className="hidden lg:block text-center w-[30%]">
                <h1 className="font-saira text-8xl">AWARDS</h1>
                <p className="font-lexend text-xl mt-4 mb-12">Unforgettable custom awards for each year. Check out our past winners below.</p>

                <div className="z-30 flex w-fit space-x-4 p-2 lg:p-4 bg-red-600 -skew-x-12 mx-auto text-black font-lexend mt-4">
                    <button
                        onClick={() => setCurrentYear("2024")}
                        className={`border border-black px-2 py-1 lg:px-3 lg:py-2 text-xl hover:bg-black hover:text-white transition-all `}
                        style={(currentYear === "2024") ? { backgroundColor: "black", color: "white" } : {}}
                    >
                        <p className="skew-x-12">2024</p>
                    </button>
                    <button
                        onClick={() => setCurrentYear("2023")}
                        className={`border border-black px-2 py-1 lg:px-3 lg:py-2 text-xl hover:bg-black hover:text-white transition-all`}
                        style={(currentYear === "2023") ? { backgroundColor: "black", color: "white" } : {}}
                    >
                        <p className="skew-x-12">2023</p>
                    </button>
                </div>
            </div>

            <div className="flex w-fit space-x-4 p-3 lg:p-4 bg-red-600 -skew-x-12 mx-auto text-black font-lexend mt-4 lg:hidden">
                    <button
                        onClick={() => setCurrentYear("2024")}
                        className={`border border-black px-2 py-1 lg:px-3 lg:py-2 text-xl hover:bg-black hover:text-white transition-all `}
                        style={(currentYear === "2024") ? { backgroundColor: "black", color: "white" } : {}}
                    >
                        <p className="skew-x-12">2024</p>
                    </button>
                    <button
                        onClick={() => setCurrentYear("2023")}
                        className={`border border-black px-2 py-1 lg:px-3 lg:py-2 text-xl hover:bg-black hover:text-white transition-all`}
                        style={(currentYear === "2023") ? { backgroundColor: "black", color: "white" } : {}}
                    >
                        <p className="skew-x-12">2023</p>
                    </button>
                </div>




            {/* this is fucked but so is all the three js relative styling bs deal with it or ill fix it later idrk */}
            {/* im sleepy man */}
            <div className="lg:mt-[700px]">
                {AWARDS_MAP[currentYear]}
            </div>

        </section>
    );
};

export default Awards;


// <section className="w-screen flex-col-centered">
//             <div className="relative w-screen h-screen flex-row-centered bg-transparent">
//                 <aside className="w-1/2">
//                     <div className="flex-col-start ml-[11vw]">
//                         <header className="font-saira text-[10rem]">
//                             AWARDS
//                         </header>
//                         <p className="font-lexend text-3xl w-[40vw] -mt-5">
//                             Explore all our custom awards, from spinning
//                             trophies to unique worlds-qualifying banners
//                         </p>
//                         <Button
//                             href=""
//                             className="w-[27vw] h-[10vh] bg-[#E31F2B] hover:bg-white transition duraiton-100 ease-in-out group flex-row-centered rounded-sm mt-20"
//                             iconClassName="flex-row-start relative w-12 h-12"
//                             src="/streams/cameraico.svg"
//                             alt="mecha mayhem logo"
//                             textClassName="ml-5 h-full text-center text-5xl z-10 font-bebas mt-12 text-black hover:text-black transition duration-1000 ease-in-out"
//                         >
//                             SEE YOUR TEAMS CLIPS
//                         </Button>
//                     </div>
//                 </aside>

//                 <figure className="flex-row-start w-1/2">
//                     <div className="relative w-[40vw] h-[40vw] mt-12 ml-12">
//                         <Image
//                             src="/awards/awards.png"
//                             alt="mecha mayhem logo"
//                             style={{ objectFit: "contain" }}
//                             fill
//                         />
//                     </div>
//                 </figure>
//             </div>
//             <div>
//                 <div className="flex-row-centered">
//                     <Suspense>
//                         <div className="flex flex-col gap-12 mt-12 mr-[30vw] z-10">
//                             <Display data={awards2024} />
//                         </div>
//                         <Trophy24 />
//                     </Suspense>
//                 </div>
// <div className="flex-row-centered mt-16">
//     <Trophy23 />
//     <div className="flex flex-col gap-12 ml-[30vw] z-10">
//         <Display data={awards2023} />
//     </div>
// </div>
//             </div>
//         </section>