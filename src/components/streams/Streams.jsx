import React from "react";
import Image from "next/image";
import Backdrop from "../home/hero/Backdrop";

const Streams = () => {
    return (
        <section className="relative w-screen h-screen flex-row-centered bg-transparent">
            <aside className="w-1/2">
                <div className="flex-col-start ml-[11vw]">
                    <header className="font-saira text-[10rem]">STREAMS</header>
                    <p className="font-lexend text-3xl w-[30vw] -mt-5">
                        High-definition streams that capture every moment of the
                        event.
                    </p>
                    <button className="w-[27vw] h-[10vh] bg-[#E31F2B] hover:bg-white transition duraiton-100 ease-in-out group flex-row-centered rounded-sm mt-20">
                        <figure className="flex-row-start">
                            <div className="relative w-12 h-12">
                                <Image
                                    src="/streams/cameraico.svg"
                                    alt="mecha mayhem logo"
                                    style={{ objectFit: "contain" }}
                                    fill
                                />
                            </div>
                        </figure>
                        <h2 className="ml-5 h-full text-center text-5xl z-10 font-bebas mt-12 text-black hover:text-black transition duration-1000 ease-in-out">
                            SEE YOUR TEAMS CLIPS
                        </h2>
                    </button>
                </div>
            </aside>

            <figure className="flex-row-start w-1/2">
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
