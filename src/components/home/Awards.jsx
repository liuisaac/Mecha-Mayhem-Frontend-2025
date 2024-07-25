import Image from "next/image";
import React from "react";

const Awards = () => {
    return (
        <div className="relative w-screen h-[100vh] bg-[#252525] text-white flex flex-col items-start justify-start overflow-hidden">
            <figure className="absolute w-[130vw] h-[100vh] ml-[16vw] -mt-[5vh]">
                <Image
                    src="/home/awards/inverse_cityscape.svg"
                    alt="background picture of a robot"
                    style={{ objectFit: "cover" }}
                    fill
                    priority
                />
            </figure>
            <div className="absolute w-screen flex flex-col items-end justify-center text-5xl z-10 pr-16">
                <header className="text-8xl z-10 ml-16 font-saira mt-16 -mr-6">
                    8 WORLDS SPOTS.
                </header>
                <h2 className="text-6xl z-10 ml-20 font-bebas mt-8">
                    HIGH SCHOOL
                </h2>
                <p className="flex flex-col items-end justify-center">
                    <span>Excellence</span>
                    <span>Tournament Champions</span>
                    <span>Robot Skills</span>
                </p>
                <h2 className="text-6xl z-10 ml-20 font-bebas mt-16">
                    MIDDLE SCHOOL
                </h2>
                <p className="flex flex-col items-end justify-center">
                    <span>Tournament Champions</span>
                </p>
                <h2 className="text-6xl z-10 ml-20 font-bebas mt-16">
                    COLLEGIATE
                </h2>
                <p className="flex flex-col items-end justify-center">
                    <span>Tournament Champions</span>
                </p>
            </div>
            <figure className="absolute w-[60vh] h-[90vh] ml-[16vw] mt-[5vh] z-10 ">
                <Image
                    src="/home/awards/banners/Excellence.svg"
                    alt="background picture of a robot"
                    style={{ objectFit: "contain" }}
                    fill
                    priority
                />
            </figure>

            <figure className="absolute w-[50vh] h-[90vh] ml-[0vw] mt-[5vh] scale-75">
                <Image
                    src="/home/awards/banners/Tournament Champions.svg"
                    alt="background picture of a robot"
                    style={{ objectFit: "contain" }}
                    fill
                    priority
                />
            </figure>
        </div>
    );
};

export default Awards;
