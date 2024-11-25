import Image from "next/image";
import React from "react";
import Button from "../../Button";

const Calgary_Mobile = () => {
    return (
        <div className="relative w-screen pb-20 bg-transparent mt-[20vh] text-white flex flex-col items-center justify-start overflow-hidden">
            <header className="text-5xl z-10 font-saira flex-col-centered w-full">
                WELCOME TO
                <span className="text-7xl z-10 font-saira">CALGARY</span>
            </header>
            <h2 className="text-3xl z-10 font-bebas mt-8 mb-0 text-center w-[80vw]">
                HOME TO THE LARGEST ROBOTICS COMPETITION IN CANADA
            </h2>
            <section className="w-screen flex-col-centered z-10">
                <div className="flex flex-col items-start justify-start mt-8">
                    <p className="w-[80vw] h-[30vh] text-xl text-[#7c7c7c]">
                        Mecha Mayhem brings together{" "}
                        <span className="text-white font-semibold">
                            over 260 teams
                        </span>{" "}
                        from around the world to compete at the BMO Center in
                        Calgary, AB, Canada. Teams battle for the title of{" "}
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

                    <div className="mt-0 flex-row-centered">
                        <div className=" w-[80vw] h-[45vw] border-2 border-white ">
                            <iframe
                                src="https://www.youtube.com/embed/e-PBs0b2zsc"
                                frameBorder="0"
                                allowFullScreen
                                className="w-full h-full"
                            />
                        </div>
                    </div>

                    <Button
                        href="https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-V5RC-24-5504.html#general-info"
                        className="w-[80vw] h-[8vh] bg-[#E31F2B] hover:bg-white transition duration-100 ease-in-out group flex-row-centered rounded-sm mt-10"
                        textClassName="w-full mt-2 text-center text-4xl z-10 font-bebas text-black hover:text-black transition duration-1000 ease-in-out"
                    >
                        REGISTER TODAY
                    </Button>

                    <p className="w-[80vw] flex-row-centered  mt-4 text-sm">
                        Registration closes Oct 13
                    </p>
                </div>
            </section>
            <figure className="absolute w-[100vw] h-[100vh] ml-[10vw] mt-[15vh] ">
                <Image
                    src="/home/calgary/cityscape.svg"
                    alt="background picture of a robot"
                    style={{ objectFit: "cover" }}
                    fill
                    priority
                />
            </figure>
        </div>
    );
};

export default Calgary_Mobile;
