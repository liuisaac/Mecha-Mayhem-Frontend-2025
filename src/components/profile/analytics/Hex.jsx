import Image from "next/image";
import React from "react";

const Hex = () => {
    return (
        <div className="w-screen flex-col-centered mt-20">
            <figure className="flex-row-start">
                <div className="relative w-[50vw] h-[50vw]">
                    <Image
                        src="/profile/IVS.svg"
                        alt="mecha mayhem logo"
                        style={{ objectFit: "contain" }}
                        fill
                    />
                </div>
            </figure>{" "}
            <figure className="absolute bg-blue-500 transition duration-200 ease-in-out [clip-path:polygon(50%_0%,93.5%_25%,93.5%_75%,50%_100%,6.5%_75%,6.5%_25%)] w-[50vw] h-[50vw] bg-opacity-40"></figure>
            </div>
    );
};

export default Hex;
