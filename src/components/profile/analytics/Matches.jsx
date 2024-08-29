import Match from "@/components/streams/Matches/Banners/Match";
import React from "react";

const Matches = ({ matches }) => {
    return (
        <div className="flex-col-centered w-screen z-10 my-20">
            <span className="font-bebas text-6xl">MATCH OVERVIEW</span>
            <div className="w-full pr-[15vw] mt-16">
                {matches.map((matchData, index) => {
                    return <Match json={matchData} key={index} />;
                })}
            </div>
        </div>
    );
};

export default Matches;
