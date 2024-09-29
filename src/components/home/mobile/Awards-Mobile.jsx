import Image from "next/image";
import React from "react";

const Awards_Mobile = () => {
    return (
        <div className="relative w-screen h-[100vh] bg-[#252525] text-white flex flex-col items-start justify-start overflow-hidden">
            <figure className="absolute w-[100vw] h-[100vh] ml-[5vw] -mt-[15vh]">
                <Image
                    src="/home/awards/inverse_cityscape.svg"
                    alt="background picture of a robot"
                    style={{ objectFit: "cover" }}
                    fill
                    priority
                />
            </figure>
            <div className="absolute w-screen h-screen flex-col-centered flex-col-centered text-5xl z-10">
            <header className="text-5xl z-10 font-saira flex-col-centered w-full">
                8 WORLDS
                <span className="text-7xl z-10 font-saira">SPOTS</span>
            </header>
                <h2 className="font-bebas mt-[3vh]">
                    {"(3x)"} HIGH SCHOOL
                </h2>
                <p className="flex-col-centered text-3xl">
                    <span>Excellence</span>
                    <span>{"(2x)"} Tournament Champions</span>
                </p>
                <h2 className="font-bebas mt-[3vh]">
                    {"(3x)"} MIDDLE SCHOOL
                </h2>
                <p className="flex-col-centered text-3xl">
                    <span>Excellence</span>
                    <span>{"(2x)"} Tournament Champions </span>
                </p>
                <h2 className="font-bebas mt-[3vh]">
                    {"(2x)"} COLLEGIATE
                </h2>
                <p className="flex-col-centered text-3xl">
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
    );
};

export default Awards_Mobile;
