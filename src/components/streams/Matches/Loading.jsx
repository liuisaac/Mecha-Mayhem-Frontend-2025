import React from "react";

const Loading = () => {
    return (
        <div className="bg-black w-screen flex flex-col gap-1">
            <span className="mt-8 font-bebas absolute top-0 text-white opacity-100 pl-[15vw] w-full h-full z-10 flex-col-centered text-9xl">LOADING MATCHES...</span>
            <div className="pl-[15vw] w-full h-36 flex-row-start bg-[#2c2e32] animate-pulse" />
            <div className="pl-[15vw] w-full h-36 flex-row-start bg-[#2c2e32] animate-pulse" />
            <div className="pl-[15vw] w-full h-36 flex-row-start bg-[#2c2e32] animate-pulse" />
            <div className="pl-[15vw] w-full h-36 flex-row-start bg-[#2c2e32] animate-pulse" />
            <div className="pl-[15vw] w-full h-36 flex-row-start bg-[#2c2e32] animate-pulse" />
            <div className="pl-[15vw] w-full h-36 flex-row-start bg-[#2c2e32] animate-pulse" />
            <div className="pl-[15vw] w-full h-36 flex-row-start bg-[#2c2e32] animate-pulse" />
            <div className="pl-[15vw] w-full h-36 flex-row-start bg-[#2c2e32] animate-pulse" />
        </div>
    );
};

export default Loading;
