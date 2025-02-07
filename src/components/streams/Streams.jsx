import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

const Streams = () => {
    return (
        <section className="relative w-screen sm:h-screen overflow-hidden flex sm:flex-row flex-col justify-center items-center bg-transparent">
            <aside className="sm:w-1/2 w-screen">
                <div className="flex flex-col sm:items-start sm:justify-start items-center justify-center sm:ml-[11vw]">
                    <header className="font-saira sm:text-[10rem] text-7xl sm:mt-0 mt-12 sm:text-left text-center">
                        STREAMS
                    </header>
                    <p className="font-lexend sm:text-3xl text-xl sm:w-[30vw] sm:-mt-5 sm:text-left text-center">
                        High-definition streams that capture every moment of the
                        event.
                    </p>
                    <figure className="flex sm:hidden flex-row-centered w-full">
                        <div className="relative w-[100vw] h-[60vw] mt-6">
                            <Image
                                src="/streams/newStreams.png"
                                alt="mecha mayhem logo"
                                style={{ objectFit: "contain" }}
                                fill
                            />
                        </div>
                    </figure>
                    <Button
                        href="/streams/matches"
                        className="sm:w-[27vw] w-[80vw] h-[10vh] bg-[#E31F2B] hover:bg-white transition duration-100 ease-in-out group flex-row-centered rounded-sm sm:mt-20 mt-6"
                        iconClassName="flex-row-start relative w-12 h-12"
                        src="/streams/cameraico.svg"
                        alt="mecha mayhem logo"
                        textClassName="ml-5 h-full text-center text-5xl z-10 font-bebas mt-6 text-black hover:text-black transition duration-1000 ease-in-out"
                    >
                        SEE YOUR TEAM'S MATCHES
                    </Button>
                    <Link
                        href="/streams/vods"
                        className="w-[27vw] flex-row-centered text-center font-lexend font-light mt-4 underline"
                    >
                        Click here to see the full VODS
                    </Link>
                </div>
            </aside>

            <figure className="sm:flex hidden flex-row-start w-1/2">
                <div className="relative w-[50vw] h-[50vw] mt-12 -ml-12">
                    <Image
                        src="/streams/newStreams.png"
                        alt="mecha mayhem logo"
                        style={{ objectFit: "contain" }}
                        fill
                    />
                </div>
            </figure>
        </section>
    );
};

export default Streams;
