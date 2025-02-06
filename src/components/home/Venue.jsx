"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const BMO = dynamic(() => import("./three/Bmo")); //component-level code splitting


const Venue = () => {
    return (
        <section className="w-screen h-screen overflow-hidden">
            <div className="flex flex-row h-screen w-screen justify-center items-center sm:items-start overflow-visible backdrop-blur-sm bg-white bg-opacity-70">
                <BMO />
                <article className="absolute w-screen h-screen flex flex-col sm:items-start items-center sm:pl-16 sm:mt-[10vh] mt-[35vh]">
                    <header className="sm:flex hidden font-saira text-8xl">THE VENUE.</header>

                    <header className="sm:hidden text-5xl z-10 font-saira flex-col-centered w-full -mt-20">
                        THE
                        <span className="text-7xl z-10 font-saira">VENUE</span>
                    </header>

                    <h2 className="font-bebas sm:text-5xl text-4xl pl-2 mt-4">
                    1912 Flores Ladue Parade SE
                    </h2>
                    <p className="w-[80vw] sm:w-auto font-lexend sm:text-3xl text-xl flex-col-left mt-8 gap-2">
                        <span>100,000 sq. feet</span>
                        <span>Brand New Expansion Hall</span>
                        <span>Largest Convention Centre in Western Canada</span>
                        <span>Located on Stampede Park</span>
                        <span>
                            C-Train Stop @ Victoria Station (Stampede Station)
                        </span>
                        <span>10 Minutes away from Partner Hotels</span>
                    </p>
                    <Link href="/info"
                    className="group sm:w-[30vw] sm:h-[10vh] w-[80vw] h-[8vh] bg-white hover:bg-black transition duraiton-100 ease-in-out group flex-row-centered rounded-sm mt-20">
                        <h2 className="w-full h-full text-center text-5xl z-10 font-bebas sm:mt-10 mt-4 text-black group-hover:text-white transition duration-200 ease-in-out">
                            SEE MAPS
                        </h2>
                    </Link>
                </article>
            </div>
        </section>
    );
};

export default Venue;
