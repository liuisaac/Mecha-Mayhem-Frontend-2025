import React from "react";
import Image from "next/image";
import Backdrop from "./hero/Backdrop";

const Hero = () => {
    return (
        <section className="relative w-screen flex-col-centered bg-transparent">
            <div className="absolute top-0 w-screen overflow-hidden">
                <Backdrop />
            </div>
            <div className="w-screen mt-[20vh]">
                <div className="w-[60vw] flex-col-centered">
                    <figure className="relative w-[40vw] h-[40vh]">
                        <Image
                            src="/home/hero/mecha_mayhem.svg"
                            alt="background picture of a robot"
                            style={{ objectFit: "contain" }}
                            fill
                            priority
                        />
                    </figure>
                </div>
                <div className="flex flex-col items-end justify-end w-[55vw]">
                    <figure className="relative w-[40vw] h-[10vh] mt-8">
                        <Image
                            src="/home/hero/Year.svg"
                            alt="background picture of a robot"
                            style={{ objectFit: "contain" }}
                            fill
                            priority
                        />
                    </figure>
                    <figure className="relative w-[40vw] h-[10vh] mt-4">
                        <Image
                            src="/home/hero/Day.svg"
                            alt="background picture of a robot"
                            style={{ objectFit: "contain" }}
                            fill
                            priority
                        />
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default Hero;
