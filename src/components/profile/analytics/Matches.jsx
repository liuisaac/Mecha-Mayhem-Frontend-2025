import Match from "@/components/streams/Matches/Banners/Match";
import React, { useEffect } from "react";

const Matches = ({ matches }) => {
  useEffect(() => {
    console.log(matches)
  }, [matches])
  
    return (
        <div className="flex-col-centered w-screen z-10">
          <div className="w-full pr-[15vw] ">
                        {matches.map((matchData, index) => {
                return <Match json={matchData} key={index} />;
            })}
          </div>

        </div>
    );
};

export default Matches;
