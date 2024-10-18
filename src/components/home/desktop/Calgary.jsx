import Image from "next/image";
import React from "react";
import Calgary_Mobile from "../mobile/Calgary-Mobile";
import Link from "next/link";

const Calgary = () => {
    return (
        <>
            <div className="sm:hidden flex">
                <Calgary_Mobile />
            </div>
            <div className="sm:flex hidden relative w-screen h-[100vh] bg-transparent mt-[40vh] text-white flex-col items-start justify-start overflow-hidden">
                <header className="text-8xl z-10 ml-16 font-saira">
                    WELCOME TO CALGARY.
                </header>
                <h2 className="text-5xl z-10 ml-20 font-bebas mt-8 mb-0">
                    HOME TO THE LARGEST ROBOTICS COMPETITION IN CANADA
                </h2>
                <section className="w-screen flex-row-centered z-10">
                    <div className="w-1/3 flex flex-col items-start justify-start mt-8">
                        <p className="w-full h-[30vh] ml-20 2xl:text-3xl xl:text-2xl lg:text-2xl md:text-xl sm:text-sm text-[#7c7c7c]">
                            Mecha Mayhem brings together{" "}
                            <span className="text-white font-semibold">
                                over 260 teams
                            </span>{" "}
                            from around the world to compete at the BMO Center
                            in Calgary, AB, Canada. Teams battle for the title
                            of{" "}
                            <span className="text-white font-semibold">
                                Mecha Mayhem Tournament Champions
                            </span>{" "}
                            and to guarantee a qualification spot to the VEX
                            Robotics{" "}
                            <span className="text-white font-semibold">
                                World Championships
                            </span>{" "}
                            in Dallas, TX.
                        </p>

                        <Link
                            href="https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-V5RC-24-5504.html#general-info"
                            className="w-[30vw] ml-20 h-[10vh] bg-[#E31F2B] hover:bg-white transition duraiton-100 ease-in-out group flex-row-centered rounded-sm mt-20"
                        >
                            <h2 className="w-full mt-2 text-center text-5xl z-10 font-bebas text-black hover:text-black transition duration-1000 ease-in-out">
                                REGISTER TODAY
                            </h2>
                        </Link>

                        <p className="w-[30vw] flex-row-centered ml-20 mt-4 text-sm">
                            Registration closes Oct 13
                        </p>
                    </div>
                    <div className="w-2/3 mt-[5vh] flex-row-centered">
                        <div className=" w-[40vw] h-[25vw] border-2 border-white ml-16">
                            <iframe
                                src="https://www.youtube.com/embed/e-PBs0b2zsc"
                                frameBorder="0"
                                allowFullScreen
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </section>
                <figure className="absolute w-[130vw] h-[100vh] ml-[16vw] mt-[5vh] ">
                    <Image
                        src="/home/calgary/cityscape.svg"
                        alt="background picture of a robot"
                        style={{ objectFit: "cover" }}
                        fill
                        priority
                    />
                </figure>
            </div>
        </>
    );
};

export default Calgary;
