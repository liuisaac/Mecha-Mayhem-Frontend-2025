import Image from "next/image";
import React from "react";

const Maps = () => {
    return (
        <div className="flex-col-centered w-screen z-10">
            <div className="flex-col-centered w-screen">
                <h1 className="sm:text-8xl text-6xl font-saira sm:w-[70vw] text-center">
                    MAPS AND BROCHURES
                </h1>
                <figure className="flex-row-start">
                    <div className="relative sm:w-[55vw] h-[55vw] w-screen">
                        <Image
                            src="/info/visuals/Mecha 2025 Map.png"
                            alt="mecha mayhem logo"
                            style={{ objectFit: "contain" }}
                            fill
                        />
                    </div>
                </figure>
                <figure className="flex-row-start">
                    <div className="relative sm:w-[55vw] h-[55vw] w-screen">
                        <Image
                            src="/info/visuals/Brochure 1.png"
                            alt="mecha mayhem logo"
                            style={{ objectFit: "contain" }}
                            fill
                        />
                    </div>
                </figure>
                <figure className="flex-row-start">
                    <div className="relative sm:w-[55vw] h-[55vw] w-screen">
                        <Image
                            src="/info/visuals/Brochure 2.png"
                            alt="mecha mayhem logo"
                            style={{ objectFit: "contain" }}
                            fill
                        />
                    </div>
                </figure>
            </div>
        </div>
    );
};

export default Maps;