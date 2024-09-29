"use client";

import React from "react";
import Bmo from "../three/Bmo";
import Venue_Mobile from "../mobile/Venue-Mobile";

const Venue = () => {
    return (
        <section className="w-screen h-screen overflow-hidden">
            <div className="sm:hidden flex">
                <Venue_Mobile />
            </div>
            <div className="sm:flex hidden flex-row h-screen w-screen justify-center overflow-visible backdrop-blur-sm bg-white bg-opacity-70">
                <Bmo />
                <article className="absolute w-screen h-screen flex-col-left pl-16">
                    <header className="font-saira text-8xl">THE VENUE.</header>
                    <h2 className="font-bebas text-5xl pl-4 mt-4">
                        BMO CENTRE HALLS A1 A2
                    </h2>
                    <p className="font-lexend text-3xl flex-col-left mt-8 gap-2">
                        <span>100,000 sq. feet</span>
                        <span>Brand New Expansion Hall</span>
                        <span>Largest Convention Centre in Western Canada</span>
                        <span>Located on Stampede Park</span>
                        <span>
                            C-Train Stop @ Victoria Station (Stampede Station)
                        </span>
                        <span>10 Minutes away from Partner Hotels</span>
                    </p>
                    <button className="group w-[30vw] h-[10vh] bg-white hover:bg-black transition duraiton-100 ease-in-out group flex-row-centered rounded-sm mt-20">
                        <h2 className="w-full h-full text-center text-5xl z-10 font-bebas mt-12 text-black group-hover:text-white transition duration-200 ease-in-out">
                            SEE MAPS
                        </h2>
                    </button>
                </article>
            </div>
        </section>
    );
};

export default Venue;
