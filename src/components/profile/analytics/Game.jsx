import Image from "next/image";
import React from "react";

const Game = () => {
    return (
        <div className="w-screen h-56 font-bebas relative">
            <figure className="flex-row-start h-full">
                <div className="relative w-[100vw] h-full">
                    <Image
                        src="/profile/ribbon.svg"
                        alt="mecha mayhem logo"
                        style={{ objectFit: "cover" }}
                        fill
                    />
                </div>
            </figure>
            <div className="w-full flex-col-centered absolute -mt-56">
                <h1 className="font-lexend font-bold text-7xl mt-16">HIGH STAKES 2025</h1>
                <div className="flex-row-centered gap-8 font-lexend text-[#A6A6A6] text-2xl">
                    <span>Division: Rockies</span>
                    <span>Rank: 11th</span>
                    <span>Skills: 5th</span>
                </div>
            </div>
        </div>
    );
};

export default Game;
