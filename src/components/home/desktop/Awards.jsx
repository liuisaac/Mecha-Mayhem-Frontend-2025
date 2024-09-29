import Image from "next/image";
import React from "react";
import Awards_Mobile from "../mobile/Awards-Mobile";

const Awards = () => {
    return (
        <>
            <div className="sm:hidden flex">
                <Awards_Mobile />
            </div>
            <div className="relative w-screen h-[100vh] bg-[#252525] text-white sm:flex hidden flex-col items-start justify-start overflow-hidden">
                <figure className="absolute w-[130vw] h-[100vh] ml-[16vw] -mt-[5vh]">
                    <Image
                        src="/home/awards/inverse_cityscape.svg"
                        alt="background picture of a robot"
                        style={{ objectFit: "cover" }}
                        fill
                        priority
                    />
                </figure>
                <div className="absolute w-screen h-screen lg:flex lg:flex-col lg:items-end lg:justify-center flex-col-centered text-5xl z-10 pr-16">
                    <header className="2xl:text-8xl xl:text-7xl lg:text-7xl text-8xl z-10 ml-16 font-saira mt-16 -mr-6">
                        8 WORLDS SPOTS.
                    </header>
                    <h2 className="2xl:text-6xl xl:text-5xl lg:text-4xl z-10 lg:ml-20 font-bebas mt-[3vh]">
                        {"(3x)"} HIGH SCHOOL
                    </h2>
                    <p className="2xl:text-6xl xl:text-5xl lg:text-4xl lg:flex lg:flex-col lg:items-end lg:justify-center flex-col-centered ">
                        <span>Excellence</span>
                        <span>{"(2x)"} Tournament Champions</span>
                    </p>
                    <h2 className="2xl:text-6xl xl:text-5xl lg:text-4xl z-10 lg:ml-20 font-bebas mt-[6vh]">
                        {"(3x)"} MIDDLE SCHOOL
                    </h2>
                    <p className="2xl:text-6xl xl:text-5xl lg:text-4xl lg:flex lg:flex-col lg:items-end lg:justify-center flex-col-centered ">
                        <span>Excellence</span>
                        <span>{"(2x)"} Tournament Champions </span>
                    </p>
                    <h2 className="2xl:text-6xl xl:text-5xl lg:text-4xl z-10 lg:ml-20 font-bebas mt-[6vh]">
                        {"(2x)"} COLLEGIATE
                    </h2>
                    <p className="2xl:text-6xl xl:text-5xl lg:text-4xl lg:flex lg:flex-col lg:items-end lg:justify-center flex-col-centered ">
                        <span>Excellence</span>
                        <span>Tournament Champions</span>
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
