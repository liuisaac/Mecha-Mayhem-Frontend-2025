import Image from "next/image";
import React from "react";

const Backdrop = () => {
    return (
        <section className="-mt-[20vh] relative h-[150vh]">
            <div className="absolute top-0 w-screen overflow-hidden flex flex-row items-end justify-end">
                <div className="-mr-[10vw]">
                    <figure className="relative w-[170vw] h-[150vh]">
                        <Image
                            src="/home/hero/hex_full.svg"
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

export default Backdrop;
