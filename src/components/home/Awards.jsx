import Image from "next/image";
import React from "react";

const Awards = () => {
    return (
        <>
            <div className="relative w-screen h-[100vh] bg-[#252525] text-white flex flex-col items-start justify-start overflow-hidden">
                <figure className="absolute sm:w-[130vw] sm:ml-[16vw] sm:-mt-[5vh] w-[100vw] h-[100vh] ml-[5vw] -mt-[15vh]">
                    <Image
                        src="/home/awards/inverse_cityscape.svg"
                        alt="background picture of a robot"
                        style={{ objectFit: "cover" }}
                        fill
                        priority
                    />
                </figure>

                <div className="absolute w-screen h-screen lg:flex lg:flex-col lg:items-end lg:justify-center flex-col-centered text-5xl z-10">
                    {/* desktop styling */}
                    <header className="hidden sm:flex 2xl:text-8xl xl:text-7xl lg:text-7xl sm:text-8xl sm:z-10 sm:ml-16 sm:mt-16 sm:-mr-6 font-saira pr-16">
                        5 WORLDS SPOTS.
                    </header>
                    {/* mobile styling */}
                    <header className="sm:hidden text-5xl z-10 font-saira flex-col-centered w-full">
                        5 WORLDS
                        <span className="text-7xl z-10 font-saira">SPOTS</span>
                    </header>
                    <h2 className="2xl:text-6xl xl:text-5xl lg:text-4xl sm:z-10 lg:ml-20 font-bebas mt-[3vh] sm:pr-16">
                        {"(3x)"} HIGH SCHOOL
                    </h2>
                    <p className="2xl:text-6xl xl:text-5xl lg:text-4xl lg:flex lg:flex-col lg:items-end lg:justify-center flex-col-centered sm:pr-16 text-3xl">
                        <span>Excellence</span>
                        <span>{"(2x)"} Tournament Champions</span>
                    </p>
                    <h2 className="2xl:text-6xl xl:text-5xl lg:text-4xl z-10 lg:ml-20 font-bebas sm:mt-[6vh] sm:pr-16 mt-[3vh]">
                        {"(1x)"} MIDDLE SCHOOL
                    </h2>
                    <p className="2xl:text-6xl xl:text-5xl lg:text-4xl lg:flex lg:flex-col lg:items-end lg:justify-center flex-col-centered sm:pr-16 text-3xl">
                        <span>Excellence</span>
                        {/* <span>{"(2x)"} Tournament Champions </span> */}
                    </p>
                    <h2 className="2xl:text-6xl xl:text-5xl lg:text-4xl z-10 lg:ml-20 font-bebas sm:mt-[6vh] sm:pr-16 mt-[3vh]">
                        {"(1x)"} COLLEGIATE
                    </h2>
                    <p className="2xl:text-6xl xl:text-5xl lg:text-4xl lg:flex lg:flex-col lg:items-end lg:justify-center flex-col-centered sm:pr-16 text-3xl">
                        <span>Excellence</span>
                        {/* <span>Tournament Champions</span> */}
                    </p>
                </div>

                <div className="lg:visible flex-row-centered invisible h-screen ml-[12vw]">
                    <figure className="absolute w-[40vw] h-[45vw] ml-[25vw] mt-[2vh] z-10 ">
                        <Image
                            src="/home/awards/banners/Excellence.svg"
                            alt="background picture of a robot"
                            style={{ objectFit: "contain" }}
                            fill
                            priority
                        />
                    </figure>

                    <figure className="absolute w-[30vw] h-[40vw] ml-[0vw] mt-[5vh] scale-75">
                        <Image
                            src="/home/awards/banners/Tournament Champions.svg"
                            alt="background picture of a robot"
                            style={{ objectFit: "contain" }}
                            fill
                            priority
                        />
                    </figure>
                </div>
            </div>
        </>
    );
};

export default Awards;
