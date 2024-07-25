"use client";

import React, { useEffect, useMemo } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { PerspectiveCamera } from "@react-three/drei";
import Bmo from "./three/Bmo";

const Venue = () => {
    const hober = useLoader(GLTFLoader, "./three/bmo_large.glb");
    return (
        <section className="w-screen h-screen overflow-hidden">
            <div className="flex flex-row h-screen w-screen justify-center overflow-visible backdrop-blur-sm bg-white bg-opacity-70">
                <Bmo />
                <article className="absolute w-screen h-screen flex-col-left pl-16">
                    <header className="font-saira text-8xl">THE VENUE.</header>
                    <h2 className="font-bebas text-5xl pl-4 mt-4">
                        BMO CENTRE HALLS BC
                    </h2>
                    <p className="font-lexend text-3xl flex-col-left mt-8 gap-2">
                        <span>1200 sq. feet</span>
                        <span>5 min away from Banff</span>
                        <span>12 minutes away from Telus Spark</span>
                        <span>1239 minutes away from Azerbaijan</span>
                        <span>18000000 minutes away from Armenia</span>
                        <span className="mt-4">
                            5minutes awat from cemenetary
                            {"("}hi uncle john i mis syou died at age 27
                        </span>
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
