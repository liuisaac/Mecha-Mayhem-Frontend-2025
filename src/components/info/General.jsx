import Image from "next/image";
import React from "react";

const General = () => {
    return (
        <div className="flex-col-centered w-screen z-10">
            <div className="flex-col-centered w-screen">
                <h1 className="smLtext-8xl text-6xl sm:mt-0 mt-20 font-saira sm:w-[70vw] w-full text-center">
                    WHAT IS MECHA MAYHEM?
                </h1>
                <figure className="flex-row-start">
                    <div className="relative w-[70vw] h-[5vw]">
                        <Image
                            src="/info/infobanner.svg"
                            alt="mecha mayhem logo"
                            style={{ objectFit: "contain" }}
                            fill
                        />
                    </div>
                </figure>
            </div>
            <div className="flex-row-centered sm:w-[70vw] w-full">
                <p className="flex-col-centered font-lexend sm:text-3xl text-xl sm:w-1/2 w-[80vw] gap-20">
                    <span>
                        Started in 2023, Mecha Mayhem brings together over 300
                        University, High school, and Middle school teams from
                        around the world to compete at the BMO Centre for three
                        full days of absolutely breathtaking competition.
                    </span>
                    <span>
                        The event is open to ANYONE who is interested in
                        robotics! Come on down to watch or cheer on the teams,
                        and chat with local tech companies and universities! In
                        addition, we will be giving tours on how to start your
                        own robotics team at your school or through our club!
                    </span>
                </p>
                <figure className="sm:flex hidden flex-row-end w-1/2">
                    <div className="relative w-[60vh] h-[30vw] border-2 border-white">
                        <Image
                            src="/info/sunset.svg"
                            alt="mecha mayhem logo"
                            style={{ objectFit: "cover" }}
                            fill
                        />
                    </div>
                </figure>
            </div>
            <div className="flex-col-centered w-screen mt-36">
                <h1 className="sm:text-8xl text-6xl font-saira sm:w-[70vw] w-screen text-center">
                    WHAT IS VEX?
                </h1>
                <span className="font-lexend sm:text-3xl text-xl sm:w-1/2 w-[80vw] mt-10 sm:text-center">
                    VEX is an international robotics organization that supplies
                    the tools and parts necessary for students to create and
                    program robots. It is the largest robotics competition in
                    the world, with more than a million students involved
                    spanning 60+ different countries. Learn more about VEX and
                    the game this year{" "}
                    <a className="inline underline" href="">
                        here.
                    </a>
                </span>

                <h1 className="text-6xl font-bebas sm:w-[70vw] w-screen text-center mt-20">
                    WHAT ARE SIGNATURE EVENTS?
                </h1>
                <span className="font-lexend sm:text-3xl text-xl sm:w-1/2 w-screen mt-10 text-center">
                    Signature Events give teams the opportunity to play at a
                    tournament that is of the highest caliber. The mission of
                    these events is to provide more opportunities for teams that
                    do not typically attend Event Regional Championships or the
                    World Championship to experience an event above and beyond a
                    standard tournament. Signature Events also have the added
                    bonus of qualifying teams directly to the VEX Robotics World
                    Championships.
                </span>
                <figure className="flex-row-end w-1/2">
                    <div className="relative w-full h-[30vw] mr-16">
                        <Image
                            src="/info/logoLine.png"
                            alt="mecha mayhem logo"
                            style={{ objectFit: "contain" }}
                            fill
                        />
                    </div>
                </figure>
            </div>
        </div>
    );
};

export default General;
