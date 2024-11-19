import React from "react";

const Banner = ({ year, div, type }) => {
    const toTitleCase = (text) => {
        let str = text.toLowerCase().split(' ')
        for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        }
        return str.join(' ')
    }
    return (
        <div className="w-full h-36 bg-transparent text-white text-4xl flex-col-centered font-lexend pl-[15vw]">
            <div className="flex-col-centered">
                <h1 className="font-bold">{div.toUpperCase()} {year}</h1>
                <h2 className="inline text-[#d3d3d3] text-2xl">{toTitleCase(type)} Matches</h2>
            </div>
        </div>
    );
};

export default Banner;
