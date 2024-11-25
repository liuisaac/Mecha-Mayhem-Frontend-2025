import Image from "next/image";
import React from "react";
import General from "./General";
import Maps from "./Maps";
import FAQ from "./FAQ";
import Button from "../Button";

const Info = () => {
    return (
        <section className="w-screen flex-col-centered">
            <div className="relative w-screen h-screen flex-row-centered bg-transparent">
                <aside className="w-1/2">
                    <div className="flex-col-start ml-[11vw]">
                        <header className="font-saira text-[10rem]">
                            INFO
                        </header>
                        <p className="font-lexend text-3xl w-[40vw] -mt-5">
                            Discover Canada’s Largest Robotics Showdown hosted
                            in the heart of Calgary
                        </p>
                        <Button
                            href=""
                            className="w-[27vw] h-[10vh] bg-[#E31F2B] hover:bg-white transition duraiton-100 ease-in-out group flex-row-centered rounded-sm mt-20"
                            iconClassName="flex-row-start relative w-12 h-12"
                            src="/info/navico.svg"
                            alt="mecha mayhem logo"
                            textClassName="ml-2 h-full text-center text-5xl z-10 font-bebas mt-12 text-black hover:text-black transition duration-1000 ease-in-out"
                        >
                            VIEW VENUE MAPS
                        </Button>
                    </div>
                </aside>

                <figure className="flex-row-start w-1/2">
                    <div className="relative w-[30vw] h-[40vw] mt-12 ml-12">
                        <Image
                            src="/info/brochureElement.png"
                            alt="mecha mayhem logo"
                            style={{ objectFit: "contain" }}
                            fill
                        />
                    </div>
                </figure>
            </div>
            <General />
            <Maps />
            <FAQ />
        </section>
    );
};

export default Info;
