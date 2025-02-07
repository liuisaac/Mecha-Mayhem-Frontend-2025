import Image from "next/image";
import React from "react";
import General from "./General";
import Maps from "./Maps";
import FAQ from "./FAQ";
import Button from "../ui/Button";

const Info = () => {
    return (
        <section className="w-screen flex-col-centered">
            <div className="relative w-screen flex-row-centered bg-transparent">
                <aside className="sm:w-1/2 w-screen">
                    <div className="sm:ml-[11vw] sm:mt-0 mt-24 flex flex-col sm:justify-start sm:items-start justify-center items-center">
                        <header className="font-saira sm:text-[10rem] sm:text-left text-center text-8xl">
                            INFO
                        </header>
                        <p className="font-lexend sm:text-3xl text-xl sm:w-[40vw] w-[80vw] sm:-mt-5">
                            Discover Canada’s Largest Robotics Showdown hosted
                            in the heart of Calgary
                        </p>
                        <figure className="sm:hidden flex flex-row-start">
                            <div className="relative w-[100vw] h-[60vw] mt-12">
                                <Image
                                    src="/info/brochureElement.png"
                                    alt="mecha mayhem logo"
                                    style={{ objectFit: "contain" }}
                                    fill
                                />
                            </div>
                        </figure>
                        <Button
                            href=""
                            className="sm:w-[27vw] w-[80vw] h-[10vh] bg-[#E31F2B] hover:bg-white transition duraiton-100 ease-in-out group flex-row-centered rounded-sm mt-20"
                            iconClassName="flex-row-start relative w-12 h-12"
                            src="/info/navico.svg"
                            alt="mecha mayhem logo"
                            textClassName="ml-2 h-full text-center text-5xl z-10 font-bebas mt-12 text-black hover:text-black transition duration-1000 ease-in-out"
                        >
                            VIEW VENUE MAPS
                        </Button>
                    </div>
                </aside>

                <figure className="sm:flex hidden flex-row-start">
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
