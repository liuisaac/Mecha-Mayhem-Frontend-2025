"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const TeamSelected = ({ number, name }) => {
    const [value, setValue] = useState("");
    const [fade, setFade] = useState(false);
    const [oldText, setOldText] = useState(number);
    const [newText, setNewText] = useState(number);

    useEffect(() => {
        if (newText !== oldText) {
            setFade(true);
            setTimeout(() => {
                console.log("starting Fade")
                setOldText(newText); // Update oldText with the previous newText
                console.log("ending Fade")
                setFade(false);
            }, 500); // Duration should match the CSS transition duration
        }
    }, [newText]);

    useEffect(() => {
        if (number !== newText) {
            setFade(true);
            setTimeout(() => {
                setOldText(newText);
                setNewText(number);
                setFade(false);
            }, 500); // Match duration with the CSS transition
        }
    }, [number]);
    

    const submitTeam = (event) => {
        event.preventDefault(); // prevent default form submission
        console.log(value);
        setOldText(newText);
        setNewText(value);
    };

    

    return (
        <div className="absolute top-0 w-screen h-screen bg-transparent font-lexend flex-col-centered z-10 text-white">
            <span className={`font-saira text-[10rem] transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'} ease-in-out`}>{fade ? oldText : newText}</span>
            <span className={`text-4xl w-[35vw] text-center -mt-10 text-[#939393] transition-opacity duration-500 ease-in-out`}>
                {name}
            </span>
            <form className="mt-10 flex-row-centered" onSubmit={submitTeam}>
                <input
                    placeholder="SEARCH OTHER TEAMS"
                    className="h-full w-[50vw] rounded-full bg-black 
                    px-10 py-0 text-md font-bold text-5xl
                    outline-3 outline-white border border-3 border-white  transition-all 
                    placeholder:opacity-20 focus:placeholder:opacity-40 placeholder:font-lexend placeholder:font-bold font-lexend"
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                />
                <figure
                    className="flex-row-start -ml-16 pr-4 hover:cursor-pointer"
                    onClick={submitTeam}
                >
                    <div className="relative w-12 h-12">
                        <Image
                            src="/profile/search.svg"
                            alt="mecha mayhem logo"
                            style={{ objectFit: "contain" }}
                            fill
                        />
                    </div>
                </figure>
            </form>
        </div>
    );
};

export default TeamSelected;
